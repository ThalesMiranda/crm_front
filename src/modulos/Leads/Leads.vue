<template>
  <v-container fluid>
    <header-title :titulo="'Leads'" :botaoTexto="'Novo Lead'" />
    <v-btn flat class="mr-2" @click="view = 'kanban'">
      <span class="icon icon-kanban-view text-xl"></span>
    </v-btn>
    <v-btn flat class="" @click="view = 'table'">
      <span class="icon icon-table-view text-xl"></span>
    </v-btn>
    
    <v-card v-if="view === 'kanban'" class="pt-4 bg-grayFix d-flex flex-column">
      <div class="kanban-container flex-grow-1">
        <KanbanColumn
          v-for="column in groupedLeads"
          :key="column.id"
          :title="column.title"
          :leads="column.leads"
          @lead-updated="updateLeadPipelineStatus"
        />
      </div>
    </v-card>
    
    <v-card v-if="view === 'table'" class="mt-4">
      <v-row class="pa-3" align="center" justify="space-between">
        <v-col cols="12" md="4" class="d-flex align-center">
          <v-text-field
            v-model="search"
            density="comfortable"
            placeholder="Search"
            prepend-inner-icon="fa-solid fa-magnifying-glass"
            hide-details
            variant="outlined"
            class="mr-2"
          />
          <v-btn color="primary" variant="tonal">
            Filter
          </v-btn>
        </v-col>
        <v-col cols="12" md="3" class="d-flex justify-end">
          <v-select
            v-model="itemsPerPage"
            :items="[5, 10, 20]"
            density="comfortable"
            variant="outlined"
            label="Per Page"
            hide-details
            style="max-width: 120px"
          />
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="allLeads"
        :search="search"
        :items-per-page="itemsPerPage"
        :page="page"
        hide-default-footer
        item-value="id"
        show-select
        density="comfortable"
        class="elevation-0"
        @click:row="goToLeadDetails"
      >
        <template #item.title="{ item }">
          <div class="font-weight-medium text-wrap">{{ item.title }}</div>
        </template>

        <template #item.lead_value="{ item }">
          ${{ formatCurrency(item.lead_value) }}
        </template>

        <template #item.pipeline_status="{ item }">
          <v-chip size="small">
            {{ item.pipeline_status }}
          </v-chip>
        </template>

        <template #item.salesOwner="{ item }">
          {{ item.sales_owner ? item.sales_owner.name : 'N/A' }}
        </template>

        <template #item.contactPerson="{ item }">
          <a href="#" class="text-primary font-medium">
            {{ item.contact_person ? item.contact_person.name : 'N/A' }}
          </a>
        </template>

        <template #item.organization="{ item }">
          {{ item.contact_person && item.contact_person.organization ? item.contact_person.organization.name : 'N/A' }}
        </template>

        <template #item.actions="{ item }">
          <div class="d-flex align-center ga-2">
            <v-icon size="small">
              <span class="icon icon-eye"></span>
            </v-icon>
            <v-icon size="small">
              <span class="icon icon-trash text-xl"></span>
            </v-icon>
          </div>
        </template>

        <template #bottom>
          </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import KanbanColumn from '../Kanban/KanbanColumn.vue';
import HeaderTitle from '../Layout/HeaderTitle.vue';
import { columns } from '@/data/LeadsDataMock';

import axios from 'axios';

export default {
  name: 'Leads',
  components: {
    HeaderTitle,
    KanbanColumn,
  },
  data() {
    return {
      view: 'kanban',
      columns: columns,
      search: "",
      itemsPerPage: 10,
      page: 1,
      selected: [],
      allRawLeads: [],
      headers: [
        { title: "ID", key: "id", sortable: false },
        { title: "Subject", key: "title", sortable: false },
        { title: "Source", key: "source", sortable: false },
        { title: "Lead Value", key: "lead_value", sortable: false },
        { title: "Stage", key: "pipeline_status", sortable: false }, 
        { title: "Sales Person", key: "salesOwner", sortable: false }, 
        { title: "Contact Person", key: "contactPerson", sortable: false }, 
        { title: "Organization", key: "organization", sortable: false },
      ],
    };
  },
  computed: {

    groupedLeads() {
      const pipelineOrder = ['New', 'Follow Up', 'Prospect', 'Negotiation', 'Won', 'Lost'];

      const grouped = this.allRawLeads.reduce((acc, lead) => {
        const status = lead.pipeline_status || 'New';
        if (!acc[status]) {
          acc[status] = [];
        }
        acc[status].push(this.mapLeadToCard(lead));
        return acc;
      }, {});

      return pipelineOrder
        .filter(status => grouped[status])
        .map(status => ({
          id: status.toLowerCase().replace(/\s/g, '-'),
          title: status,
          leads: grouped[status],
        }));
    },

    allLeads() {
        return this.allRawLeads;
    },
    startItem() {
      return (this.page - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      return Math.min(this.page * this.itemsPerPage, this.allLeads.length);
    },
  },
  methods: {
    async fetchLeads() {
      const apiUrl = `${process.env.VUE_APP_API_URL}/leads`;
      try {
        const response = await axios.get(apiUrl);
        this.allRawLeads = response.data;
      } catch (error) {
        console.error("Erro ao buscar dados dos leads:", error);
      }
    },
    mapLeadToCard(lead) {
      return {
        id: lead.id,
        avatar: lead.contact_person ? lead.contact_person.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : '?',
        name: lead.contact_person ? lead.contact_person.name : 'N/A',
        company: lead.contact_person && lead.contact_person.organization ? lead.contact_person.organization.name : 'Sem Organização',
        description: lead.title,
        chips: [
          { text: `R$ ${lead.lead_value}` },
          { text: lead.source },
          { text: lead.type },
          { text: lead.pipeline_status, color: 'bg-blue-lighten-5 text-blue-darken-3' }
        ],
      };
    },
    formatCurrency(value) {
      const num = parseFloat(value);
      if (isNaN(num)) return value;
      return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async updateLeadPipelineStatus(payload) {
      const { id, new_pipeline_status } = payload;
      const apiUrl = `${process.env.VUE_APP_API_URL}/leads/${id}`;

      try {
        await axios.patch(apiUrl, { 
          pipeline_status: new_pipeline_status 
        });

        const leadIndex = this.allRawLeads.findIndex(l => l.id === id);
        if (leadIndex !== -1) {
          this.allRawLeads[leadIndex].pipeline_status = new_pipeline_status;
        }

        console.log(`Lead ${id} movido para ${new_pipeline_status} com sucesso!`);

      } catch (error) {
        console.error("Erro ao atualizar o pipeline:", error);
        alert('Erro ao mover o lead. Tente novamente.');
        this.fetchLeads(); 
      }
    },
    goToLeadDetails(event, { item }) {
      this.$router.push({ name: 'leads_details', params: { id: item.id } });
    }
  },
  mounted() {
    this.fetchLeads();
  },
};
</script>

<style scoped>
.bg-grayFix {
  background-color: rgb(243, 244, 246);
  box-shadow: none;
  height: calc(100vh - 120px);
  padding-bottom: 0 !important;
}
.kanban-container {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  height: 100%;
  padding-bottom: 0;
}
:deep(.v-data-table__td),
:deep(.v-data-table__th) {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
:deep(.v-data-table__tr) {
  height: 80px;
}
.text-wrap {
  white-space: normal;
  word-wrap: break-word;
}
</style>

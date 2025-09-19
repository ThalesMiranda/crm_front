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
          v-for="column in columns"
          :key="column.id"
          :title="column.title"
          :leads="column.leads"
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
      >
        <template #item.subject="{ item }">
          <div class="font-weight-medium text-wrap">{{ item.subject }}</div>
        </template>
        <template #item.source="{ item }">
          {{ item.source }}
        </template>
        <template #item.leadValue="{ item }">
          {{ item.leadValue }}
        </template>
        <template #item.leadType="{ item }">
          {{ item.leadType }}
        </template>
        <template #item.contactPerson="{ item }">
          <a href="#" class="text-primary font-medium">{{ item.contactPerson }}</a>
        </template>
        <template #item.stage="{ item }">
          {{ item.stage }}
        </template>
        <template #item.rottenLead="{ item }">
          {{ item.rottenLead }}
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
          <v-row class="pa-3" align="center" justify="space-between">
            <v-col cols="auto">
              <span>
                {{ startItem }} - {{ endItem }} of {{ allLeads.length }}
              </span>
            </v-col>
            <v-col cols="auto" class="d-flex align-center">
              <v-btn
                variant="text"
                density="comfortable"
                :disabled="page === 1"
                @click="page--"
              >
                <v-icon>fa-solid fa-chevron-left</v-icon>
              </v-btn>
              <v-btn
                variant="text"
                density="comfortable"
                :disabled="page * itemsPerPage >= allLeads.length"
                @click="page++"
              >
                <v-icon>fa-solid fa-chevron-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import KanbanColumn from '../Kanban/KanbanColumn.vue';
import HeaderTitle from '../Layout/HeaderTitle.vue';
import { columns } from '@/data/LeadsDataMock';

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
      headers: [
        { title: "ID", key: "id", sortable: false },
        { title: "Sales Person", key: "salesPerson", sortable: false },
        { title: "Subject", key: "subject", sortable: false },
        { title: "Source", key: "source", sortable: false },
        { title: "Lead Value", key: "leadValue", sortable: false },
        { title: "Lead Type", key: "leadType", sortable: false },
        { title: "Tag Name", key: "tagName", sortable: false },
        { title: "Contact Person", key: "contactPerson", sortable: false },
        { title: "Stage", key: "stage", sortable: false },
        { title: "Rotten Lead", key: "rottenLead", sortable: false },
        { title: "Date To", key: "dateTo", sortable: false },
        { title: "Created At", key: "createdAt", sortable: false },
        { title: "Actions", key: "actions", sortable: false, align: "center" },
      ],
    };
  },
  computed: {
    allLeads() {
      return this.columns.flatMap(column => 
        column.leads.map(lead => ({
          ...lead, 
          stage: column.title, 
          subject: lead.description,
          contactPerson: lead.name,
          salesPerson: 'Example',
          source: 'Affiliate Links',
          leadValue: lead.chips.find(c => c.text.includes('$'))?.text || '',
          leadType: lead.chips.find(c => c.text.includes('Business'))?.text || '',
          tagName: lead.chips.find(c => c.color)?.text || '-',
          rottenLead: 'No',
          dateTo: '--',
          createdAt: new Date().toISOString(), 
        }))
      );
    },
    startItem() {
      return (this.page - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      return Math.min(this.page * this.itemsPerPage, this.allLeads.length);
    },
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

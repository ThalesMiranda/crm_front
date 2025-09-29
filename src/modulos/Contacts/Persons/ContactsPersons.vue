<template>
  <v-container fluid>
      <header-title
        :titulo="'Persons'"
        :botaoTexto="'New Person'"
        @action-button="goToCreatePerson"
      />    
    <v-card outlined>
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
        :items="persons"
        :search="search"
        :items-per-page="itemsPerPage"
        :page="page"
        hide-default-footer
        item-value="id"
        show-select
        density="comfortable"
        class="elevation-0"
      >
        <template #item.id="{ item }">
          {{ item.id }}
        </template>

        <template #item.name="{ item }">
          <div class="d-flex align-center">
            <v-avatar color="blue-lighten-2" size="40" class="mr-3">
              <span class="text-h6 white--text">{{ getInitials(item.name) }}</span>
            </v-avatar>
            <div class="d-flex flex-column">
              <span class="font-weight-medium">{{ item.name }}</span>
            </div>
          </div>
        </template>
        
        <template #item.emails="{ item }">
          <div class="d-flex flex-column">
            <div v-for="(email, index) in item.emails" :key="index">{{ email.value }}</div>
          </div>
        </template>

        <template #item.contact_numbers="{ item }">
          <div class="d-flex flex-column">
            <div v-for="(contact, index) in item.contact_numbers" :key="index">{{ contact.value }}</div>
          </div>
        </template>
        
    <template #item.organization="{ item }">
      {{ item.organization ? item.organization.name : 'N/A' }}
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
                {{ startItem }} - {{ endItem }} of {{ persons.length }}
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
                :disabled="page * itemsPerPage >= persons.length"
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
import HeaderTitle from '../../Layout/HeaderTitle.vue';
import axios from 'axios';

export default {
  name: "ContactsPersons",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      persons: [],
      search: "",
      itemsPerPage: 10,
      page: 1,
      selected: [],
      headers: [
        { title: "ID", key: "id", sortable: false },
        { title: "Name", key: "name", sortable: false },
        { title: "Emails", key: "emails", sortable: false },
        { title: "Contact Numbers", key: "contact_numbers", sortable: false },
        { title: "Organization Name", key: "organization", sortable: false },
        { title: "Actions", key: "actions", sortable: false, align: "center" },
      ],
    };
  },
  computed: {
    startItem() {
      return (this.page - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      return Math.min(this.page * this.itemsPerPage, this.persons.length);
    },
  },
  methods: {
    async fetchPersons() {
      const apiUrl = `${process.env.VUE_APP_API_URL}/persons`;
      try {
        const response = await axios.get(apiUrl);
        this.persons = response.data;
      } catch (error) {
        console.error("Erro ao buscar dados das pessoas:", error);
      }
    },
    getInitials(name) {
      if (!name) return '';
      const parts = name.split(' ');
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return parts[0][0].toUpperCase();
    },
    goToCreatePerson() {
      this.$router.push({ name: 'contacts-create-person' });
    }
  },
  created() {
    this.fetchPersons();
  },
};
</script>

<style scoped>
:deep(.v-data-table__td),
:deep(.v-data-table__th) {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}

:deep(.v-data-table__tr) {
  height: 80px;
}
</style>
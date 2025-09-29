<template>
  <v-container fluid>
    <header-title :titulo="'Create Person'" :botaoTexto="'Save Person'" @action-button="saveNewPerson"/>

    <v-card class="pa-4">
      <v-form>
        <span class="v-label">Name *</span>

        <v-text-field
          v-model="person.name"
          variant="outlined"
          density="comfortable"
          required
        ></v-text-field>

        <span class="v-label">Emails *</span>
        <v-row v-for="(email, index) in person.emails" :key="index" no-gutters class="email-row">
          <v-col class="email-input">
            <v-text-field
              v-model="person.emails[index].value"
              variant="outlined"
              density="comfortable"
              :hide-details="true"
            ></v-text-field>
          </v-col>
          <v-col cols="1" class="d-flex align-center email-type-select-col">
            <v-select
              v-model="person.emails[index].type"
              :items="['Work', 'Home']"
              variant="outlined"
              density="comfortable"
              hide-details
            ></v-select>
          </v-col>
          <v-col cols="1" class="d-flex justify-center align-center">
            <v-icon
              v-if="person.emails.length > 1"
              @click="removeField('emails', index)"
            >
              <span class="icon icon-trash text-xl"></span>
            </v-icon>
          </v-col>
        </v-row>
        <v-btn color="primary" @click="addEmailField" class="mt-2">
          <v-icon left>fa-solid fa-plus</v-icon>
          Add More
        </v-btn>

        <span class="v-label mt-4">Contact Numbers</span>
        <v-row v-for="(contact, index) in person.contactNumbers" :key="index" no-gutters class="contact-row">
          <v-col class="contact-input">
            <v-text-field
              v-model="person.contactNumbers[index].value"
              variant="outlined"
              density="comfortable"
              :hide-details="true"
            ></v-text-field>
          </v-col>
          <v-col cols="1" class="d-flex align-center contact-type-select-col">
            <v-select
              v-model="person.contactNumbers[index].type"
              :items="['Work', 'Home', 'Mobile']"
              variant="outlined"
              density="comfortable"
              hide-details
            ></v-select>
          </v-col>
          <v-col cols="1" class="d-flex justify-center align-center">
            <v-icon
              v-if="person.contactNumbers.length > 1"
              @click="removeField('contactNumbers', index)"
            >
              <span class="icon icon-trash text-xl"></span>
            </v-icon>
          </v-col>
        </v-row>
        <v-btn color="primary" @click="addContactField" class="mt-2">
          <v-icon left>fa-solid fa-plus</v-icon>
          Add More
        </v-btn>

        <v-text-field
          v-model="person.jobTitle"
          label="Job Title"
          variant="outlined"
          density="comfortable"
          class="mt-4"
        ></v-text-field>


    <v-select
      v-model="person.sales_owner_user_id"
      label="Sales Owner"
      :items="usersList"
      item-title="name"
      item-value="id"
      variant="outlined"
      density="comfortable"
      clearable
    ></v-select>

    <v-select
      v-model="person.organization_id"
      label="Organization"
      :items="organizationsList"
      item-title="name"
      item-value="id"
      variant="outlined"
      density="comfortable"
      clearable
    ></v-select>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import HeaderTitle from '../../Layout/HeaderTitle.vue';
import axios from "@/services/axios";

export default {
  name: "CreatePerson",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      person: {
        name: '',
        emails: [{ value: '', type: 'Work' }],
        contactNumbers: [{ value: '', type: 'Work' }],
        jobTitle: '',
        sales_owner_user_id: null, 
        organization_id: null,
      },
      usersList: [],
      organizationsList: [],
    };
  },
  methods: {
    addEmailField() {
      this.person.emails.push({ value: '', type: 'Work' });
    },
    addContactField() {
      this.person.contactNumbers.push({ value: '', type: 'Work' });
    },
    removeField(fieldName, index) {
      this.person[fieldName].splice(index, 1);
    },
    async fetchDependencies() {
      const apiUrl = process.env.VUE_APP_API_URL;
      
      try {
        const [usersRes, orgsRes] = await Promise.all([
          axios.get(`${apiUrl}/users`),
          axios.get(`${apiUrl}/organizations`)
        ]);

        this.usersList = usersRes.data;
        this.organizationsList = orgsRes.data;
      } catch (error) {
        console.error("Erro ao carregar dependências:", error);
      }
    },
    async saveNewPerson() {
     const payload = this.person;
    console.log("Payload de Envio:", payload);
      try {
        const response = await axios.post("/persons", payload);
        console.log("pessoa salva", response.data);
        alert("salvou");
        this.$router.push({ name: 'contacts-persons' });
      } catch (error) {
        console.error("Erro ao salvar", error.response?.data || error.message);
        alert("Erro ao salvar pessoa");
      }
    }
  },
    mounted() {
    this.fetchDependencies();
  },
};
</script>

<style scoped>
.v-label {
  font-size: 0.75rem;
  opacity: 1;
  color: rgba(0, 0, 0, 0.6);
  display: block;
}

.email-row, .contact-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-top: 10px;
}

.email-input, .contact-input {
  padding-right: 8px; 
}

.email-type-select-col, .contact-type-select-col {
  padding-right: 0 !important;
}
</style>
<template>
  <v-container fluid>
    <header-title :titulo="'Create Person'" :botaoTexto="'Save Person'" :rota="'contacts-create-person'"/>

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
          <v-col cols="1" class="d-flex  justify-center align-center">
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
          <v-col cols="1" class="d-flex  justify-center align-center">
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
          v-model="person.salesOwner"
          label="Sales Owner"
          :items="['Click to add']"
          variant="outlined"
          density="comfortable"
        ></v-select>

        <v-select
          v-model="person.organization"
          label="Organization"
          :items="['Click to add']"
          variant="outlined"
          density="comfortable"
        ></v-select>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import HeaderTitle from '../../Layout/HeaderTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
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
        salesOwner: null,
        organization: null,
      },
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
    saveNewPerson(){
      console.log(this.person)
    }
  },
});
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
  padding-right: 0 !important; /* Remove o padding da coluna do select */
}
</style> 
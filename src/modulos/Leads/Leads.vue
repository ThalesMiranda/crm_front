<template>
  <v-container fluid>
    <header-title :titulo="'Leads'" :botaoTexto="'Novo Lead'" />
    <v-card class="pa-4 bg-grayFix">
      <div class="kanban-container">
        <div class="kanban-column">
          <v-card-title class="kanban-title">New</v-card-title>
          <div class="kanban-list">
            <v-card
              class="lead-card"
              elevation="0"
            >
              <div class="d-flex align-center">
                <v-avatar color="blue-lighten-2" size="40" class="mr-3">
                  <span class="text-h8  white--text">BJ</span>
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title class="pa-0  text-subtitle-1">Billy James</v-card-title>
                  <v-card-subtitle class="pa-0 text-caption text-grey-darken">SentinelSecure</v-card-subtitle>
                </div>
                <v-icon icon="fa-solid fa-warning" color="red"></v-icon>
              </div>
              
              <v-card-text class="pa-0 mt-3 font-weight-bold text-body-2">
                Enquiry: ProjectPulse Enterprise Solution
              </v-card-text>
              
              <div class="chip-container mt-3">
                <v-chip size="small" class="mr-2">Example</v-chip>
                <v-chip size="small" class="mr-2">$10,000.00</v-chip>
                <v-chip size="small" class="mr-2">Phone</v-chip>
                <v-chip size="small" class="mr-2">New Business</v-chip>
                <v-chip size="small" class="bg-yellow-lighten-5 text-yellow-darken-3">Enquiry</v-chip>
              </div>
            </v-card>
          </div>
        </div>
        <div class="kanban-column">
          <v-card-title class="kanban-title">Follow Up</v-card-title>
          <div class="kanban-list">
            <v-card
              class="lead-card"
              elevation="0"
            >
              <div class="d-flex align-center">
                <v-avatar color="blue-lighten-2" size="40" class="mr-3">
                  <span class="text-h8  white--text">BJ</span>
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title class="pa-0  text-subtitle-1">Billy James</v-card-title>
                  <v-card-subtitle class="pa-0 text-caption text-grey-darken">SentinelSecure</v-card-subtitle>
                </div>
                <v-icon icon="fa-solid fa-warning" color="red"></v-icon>
              </div>
              
              <v-card-text class="pa-0 mt-3 font-weight-bold text-body-2">
                Enquiry: ProjectPulse Enterprise Solution
              </v-card-text>
              
              <div class="chip-container mt-3">
                <v-chip size="small" class="mr-2">Example</v-chip>
                <v-chip size="small" class="mr-2">$10,000.00</v-chip>
                <v-chip size="small" class="mr-2">Phone</v-chip>
                <v-chip size="small" class="mr-2">New Business</v-chip>
                <v-chip size="small" class="bg-yellow-lighten-5 text-yellow-darken-3">Enquiry</v-chip>
              </div>
            </v-card>
          </div>
        </div>
        <div class="kanban-column">
          <v-card-title class="kanban-title">Prospect</v-card-title>
          <div class="kanban-list">
            <v-card
              class="lead-card"
              elevation="0"
            >
              <div class="d-flex align-center">
                <v-avatar color="blue-lighten-2" size="40" class="mr-3">
                  <span class="text-h8  white--text">BJ</span>
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title class="pa-0  text-subtitle-1">Billy James</v-card-title>
                  <v-card-subtitle class="pa-0 text-caption text-grey-darken">SentinelSecure</v-card-subtitle>
                </div>
                <v-icon icon="fa-solid fa-warning" color="red"></v-icon>
              </div>
              
              <v-card-text class="pa-0 mt-3 font-weight-bold text-body-2">
                Enquiry: ProjectPulse Enterprise Solution
              </v-card-text>
              
              <div class="chip-container mt-3">
                <v-chip size="small" class="mr-2">Example</v-chip>
                <v-chip size="small" class="mr-2">$10,000.00</v-chip>
                <v-chip size="small" class="mr-2">Phone</v-chip>
                <v-chip size="small" class="mr-2">New Business</v-chip>
                <v-chip size="small" class="bg-yellow-lighten-5 text-yellow-darken-3">Enquiry</v-chip>
              </div>
            </v-card>
          </div>
        </div>
        <div class="kanban-column">
          <v-card-title class="kanban-title">Negotiation</v-card-title>
          <div class="kanban-list">
            <v-card
              class="lead-card"
              elevation="0"
            >
              <div class="d-flex align-center">
                <v-avatar color="blue-lighten-2" size="40" class="mr-3">
                  <span class="text-h8  white--text">BJ</span>
                </v-avatar>
                <div class="flex-grow-1">
                  <v-card-title class="pa-0  text-subtitle-1">Billy James</v-card-title>
                  <v-card-subtitle class="pa-0 text-caption text-grey-darken">SentinelSecure</v-card-subtitle>
                </div>
                <v-icon icon="fa-solid fa-warning" color="red"></v-icon>
              </div>
              
              <v-card-text class="pa-0 mt-3 font-weight-bold text-body-2">
                Enquiry: ProjectPulse Enterprise Solution
              </v-card-text>
              
              <div class="chip-container mt-3">
                <v-chip size="small" class="mr-2">Example</v-chip>
                <v-chip size="small" class="mr-2">$10,000.00</v-chip>
                <v-chip size="small" class="mr-2">Phone</v-chip>
                <v-chip size="small" class="mr-2">New Business</v-chip>
                <v-chip size="small" class="bg-yellow-lighten-5 text-yellow-darken-3">Enquiry</v-chip>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import HeaderTitle from '../Layout/HeaderTitle.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Leads",
  components: {
    HeaderTitle,
  }
});
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
  padding-bottom: 0;
  height: 100%;
}

.kanban-column {
  flex: 0 0 300px;
  max-width: 300px;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.kanban-title {
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 8px;
  margin-bottom: 16px;
}

.kanban-list {
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 16px;
}

.lead-card {
  border-radius: 8px;
  padding: 16px;
  background-color: #f5f5f5;
  margin-bottom: 16px;
}

.chip-container .v-chip {
  height: 24px;
  font-size: 0.75rem;
}
</style>
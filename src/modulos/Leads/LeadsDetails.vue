<template>
  <v-container fluid>
    <header-title :titulo="lead.title || 'Detalhes do Lead'" :botao-texto="'Editar'"/>
    
    <div v-if="loading" class="text-center pa-10">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <p class="mt-2">Carregando detalhes do lead...</p>
    </div>

    <v-card v-if="!loading && lead" class="pa-6">
      
      <h3 class="text-h6 mb-4">Informações Básicas</h3>
      <v-divider class="mb-4"></v-divider>

      <v-row>
        <v-col cols="12" sm="6" md="4">
          <span class="v-label">Status do Pipeline</span>
          <v-chip size="small" :color="getStatusColor(lead.pipeline_status)" class="mt-1">
            {{ lead.pipeline_status }}
          </v-chip>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <span class="v-label">Valor do Lead</span>
          <p class="font-weight-bold text-subtitle-1">${{ formatCurrency(lead.lead_value) }}</p>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <span class="v-label">Fonte</span>
          <p class="text-body-1">{{ lead.source || 'N/A' }}</p>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <span class="v-label">Fechamento Esperado</span>
          <p class="text-body-1">{{ formatDate(lead.expected_close_date) }}</p>
        </v-col>
      </v-row>

      <h3 class="text-h6 mt-6 mb-4">Relacionamentos</h3>
      <v-divider class="mb-4"></v-divider>

      <v-row>
        <v-col cols="12" sm="6" md="4">
          <span class="v-label">Proprietário (Sales Owner)</span>
          <p class="text-body-1 font-weight-medium">{{ lead.sales_owner ? lead.sales_owner.name : 'N/A' }}</p>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <span class="v-label">Pessoa de Contato</span>
          <p class="text-body-1">{{ lead.contact_person ? lead.contact_person.name : 'N/A' }}</p>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <span class="v-label">Organização</span>
          <p class="text-body-1">{{ lead.contact_person && lead.contact_person.organization ? lead.contact_person.organization.name : 'N/A' }}</p>
        </v-col>
      </v-row>

      <h3 class="text-h6 mt-6 mb-4">Descrição e Produtos</h3>
      <v-divider class="mb-4"></v-divider>

      <v-row>
        <v-col cols="12">
          <span class="v-label">Descrição Completa</span>
          <v-card variant="outlined" class="pa-3 text-body-2" style="min-height: 80px;">
            {{ lead.description || 'Nenhuma descrição fornecida.' }}
          </v-card>
        </v-col>

        <v-col cols="12">
          <span class="v-label">Produtos Associados ({{ lead.products.length }})</span>
          <v-chip-group column class="pt-2">
            <v-chip v-for="product in lead.products" :key="product.id" size="small" color="primary" variant="tonal">
              {{ product.name }} (R$ {{ formatCurrency(product.price) }})
            </v-chip>
          </v-chip-group>
          <p v-if="lead.products.length === 0" class="text-caption text-grey-darken-1">Nenhum produto associado.</p>
        </v-col>
      </v-row>

    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
import HeaderTitle from '../Layout/HeaderTitle.vue';

export default {
  name: 'LeadsDetails',
  components: {
    HeaderTitle,
  },
  data() {
    return {
      lead: {},
      loading: true,
    };
  },
  methods: {
    async fetchLeadDetails() {
      this.loading = true;
      const leadId = this.$route.params.id;
      const apiUrl = `${process.env.VUE_APP_API_URL}/leads/${leadId}`;

      try {
        const response = await axios.get(apiUrl);
        this.lead = response.data;
      } catch (error) {
        console.error("Erro ao buscar detalhes do lead:", error);
      } finally {
        this.loading = false;
      }
    },
    formatCurrency(value) {
      const num = parseFloat(value);
      if (isNaN(num)) return '0.00';
      return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(num);
    },
    getStatusColor(status) {
      switch (status) {
        case 'Won': return 'success';
        case 'Lost': return 'error';
        case 'New': return 'info';
        case 'Negotiation': return 'warning';
        case 'Prospect': return 'primary';
        case 'Follow Up': return 'blue-grey';
        default: return 'grey';
      }
    },
    formatDate(dateString) {
        if (!dateString) return 'N/A';
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    }
  },
  mounted() {
    this.fetchLeadDetails();
  },
  watch: {
    '$route.params.id': 'fetchLeadDetails'
  }
};
</script>

<style scoped>
/* Estilo para imitar o rótulo acima do campo (v-label no formulário) */
.v-label {
  font-size: 0.75rem;
  opacity: 1;
  color: rgba(0, 0, 0, 0.6);
  display: block;
  margin-bottom: 4px;
}
</style>
<template>
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
      v-model="selected"
      :headers="headers"
      :items="quotes"
      :search="search"
      :items-per-page="itemsPerPage"
      :page="page"
      hide-default-footer
      item-value="id"
      show-select
      density="comfortable"
      class="elevation-0"
    >
      <template #item.person="{ item }">
        <a href="#" class="text-primary font-medium">
          {{ item.person }}
        </a>
      </template>

      <template #item.createdAt="{ item }">
        {{ formatDate(item.createdAt) }}
      </template>

      <template #item.actions="{ item }">
        <div class="d-flex align-center ga-2">
          <v-icon size="small" class="me-2">
            <span class="icon icon-edit "></span>
          </v-icon>
          <v-icon size="small" class="me-2">
            <span class="icon icon-print text-xl"></span>
          </v-icon>
          <v-icon size="small">
            <span class="icon icon-trash text-xl"></span>
          </v-icon>
        </div>
      </template>
    </v-data-table>

    <!-- Rodapé customizado -->
    <v-row class="pa-3" align="center" justify="space-between">
      <v-col cols="auto">
        <span>
          {{ startItem }} - {{ endItem }} of {{ quotes.length }}
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
          :disabled="page * itemsPerPage >= quotes.length"
          @click="page++"
        >
          <v-icon>fa-solid fa-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "QuotesTable",
  data() {
    return {
      search: "",
      itemsPerPage: 10,
      page: 1,
      selected: [],
      headers: [
        { title: "Subject", key: "subject", align: "start", width: "180px" },
        { title: "Sales Person", key: "salesPerson", width: "160px" },
        { title: "Person", key: "person", width: "160px" },
        { title: "Subtotal", key: "subtotal", width: "140px" },
        { title: "Discount", key: "discount", width: "140px" },
        { title: "Tax", key: "tax", width: "120px" },
        { title: "Adjustment", key: "adjustment", width: "140px" },
        { title: "Grand Total", key: "grandTotal", width: "160px" },
        { title: "Expired At", key: "expiredAt", width: "160px" },
        { title: "Created At", key: "createdAt", width: "180px" },
        { title: "Actions", key: "actions", sortable: false, width: "140px", align: "center" },
      ],
      quotes: [
        {
          id: 1,
          subject: "SecureShield 360 - Best Solution for Cyber Security product Delivery",
          salesPerson: "Example",
          person: "Sasha Calle",
          subtotal: "$1,320,000.00",
          discount: "$0.00",
          tax: "$0.00",
          adjustment: "$0.00",
          grandTotal: "$1,320,000.00",
          expiredAt: "28 Mar 2025",
          createdAt: "2025-03-21T08:10:00",
        },
        {
          id: 2,
          subject: "Quotation For Urgent Purchase of Products by Edward",
          salesPerson: "Example",
          person: "Carol Denvers",
          subtotal: "$1,125,000.00",
          discount: "$0.00",
          tax: "$0.00",
          adjustment: "$0.00",
          grandTotal: "$1,125,000.00",
          expiredAt: "31 Jan 2025",
          createdAt: "2025-01-17T06:57:00",
        },
        {
          id: 3,
          subject: "Quotation for BreachWatch",
          salesPerson: "Custom Admin",
          person: "Carol Denvers",
          subtotal: "$149,500.00",
          discount: "$0.00",
          tax: "$0.00",
          adjustment: "$0.00",
          grandTotal: "$149,500.00",
          expiredAt: "19 Sep 2024",
          createdAt: "2024-08-30T11:59:00",
        },
      ],
    };
  },
  computed: {
    startItem() {
      return (this.page - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      return Math.min(this.page * this.itemsPerPage, this.quotes.length);
    },
  },
  methods: {
    formatDate(dateStr) {
      const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      return new Date(dateStr).toLocaleDateString("en-GB", options);
    },
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
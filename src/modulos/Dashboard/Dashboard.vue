<template>
  <v-container fluid>
    <h1 class="mb-6">Dashboard</h1>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <div class="d-flex justify-space-between align-center">
            <div>
              <h3 class="text-subtitle-1">Won Revenue</h3>
              <h2 class="text-success">${{ wonRevenue.toLocaleString() }}</h2>
              <span class="text-success">↑ 120.93%</span>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <div class="d-flex justify-space-between align-center">
            <div>
              <h3 class="text-subtitle-1">Lost Revenue</h3>
              <h2 class="text-error">${{ lostRevenue.toLocaleString() }}</h2>
              <span class="text-success">↑ 0%</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <apexchart
            type="bar"
            height="250"
            :options="revenueChartOptions"
            :series="revenueSeries"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3 class="mb-4">Open Leads By Stages</h3>
          <apexchart
            type="bar"
            height="250"
            :options="funnelOptions"
            :series="funnelSeries"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3>Average Lead Value</h3>
          <h2>${{ avgLeadValue }}</h2>
          <span class="text-success">↑ 204.16%</span>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3>Total Leads</h3>
          <h2>{{ totalLeads }}</h2>
          <span class="text-error">↓ 27.78%</span>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3>Average Leads Per Day</h3>
          <h2>{{ avgLeadsPerDay }}</h2>
          <span class="text-error">↓ 27.78%</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3>Total Quotations</h3>
          <h2>{{ totalQuotations }}</h2>
          <span class="text-error">↓ 71.43%</span>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3>Total Persons</h3>
          <h2>{{ totalPersons }}</h2>
          <span class="text-error">↓ 100%</span>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4">
          <h3>Total Organizations</h3>
          <h2>{{ totalOrganizations }}</h2>
          <span class="text-error">↓ 100%</span>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="mb-4">Revenue By Sources</h3>
          <apexchart
            type="donut"
            height="300"
            :options="donutOptions"
            :series="donutSeries"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "Dashboard",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      wonRevenue: 1900000,
      lostRevenue: 35000,
      avgLeadValue: 246538.46,
      totalLeads: 13,
      avgLeadsPerDay: 0.04,
      totalQuotations: 2,
      totalPersons: 0,
      totalOrganizations: 0,

      revenueSeries: [
        {
          name: "Won Revenue",
          data: [1900000],
        },
        {
          name: "Lost Revenue",
          data: [35000],
        },
      ],
      revenueChartOptions: {
        chart: { stacked: true, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: false } },
        xaxis: { categories: ["Revenue"] },
        colors: ["#28a745", "#dc3545"],
      },

      funnelSeries: [
        {
          data: [3, 1, 1],
        },
      ],
      funnelOptions: {
        chart: { type: "bar", toolbar: { show: false } },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            barHeight: "50%",
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (val, opt) => {
            const labels = ["New", "Prospect", "Negotiation"];
            return `${labels[opt.dataPointIndex]}: ${val}`;
          },
          style: {
            colors: ["#000"],
          },
        },
        xaxis: {
          categories: ["New", "Prospect", "Negotiation"],
        },
        colors: ["#66d9ef", "#33cfff", "#00bcd4"],
      },

      donutSeries: [70, 15, 15],
      donutOptions: {
        labels: ["Direct", "Referral", "Social"],
        colors: ["#28a745", "#6f42c1", "#fd7e14"],
        legend: { position: "bottom" },
      },
    };
  },
};
</script>

<style scoped>
h2 {
  font-weight: 700;
}
</style>

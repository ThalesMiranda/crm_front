<template>
  <v-card class="lead-card" elevation="0">
    <div class="d-flex align-center">
      <v-avatar color="blue-lighten-2" size="40" class="mr-3">
        <span class="text-h8 white--text">{{ lead.avatar }}</span>
      </v-avatar>
      <div class="flex-grow-1">
        <v-card-title class="pa-0 text-subtitle-1">{{ lead.name }}</v-card-title>
        <v-card-subtitle class="pa-0 text-caption text-grey-darken">{{ lead.company }}</v-card-subtitle>
      </div>
      <v-icon icon="fa-solid fa-warning" color="red"></v-icon>
    </div>
    <v-card-text class="pa-0 mt-3 font-weight-bold text-body-2">
      {{ lead.description }}
    </v-card-text>
    <div class="chip-container mt-3">
      <v-chip
        v-for="(chip, index) in lead.chips"
        :key="index"
        size="small"
        class="mr-2"
        :class="chip.color ? chip.color : ''"
      >
        {{ chip.text }}
      </v-chip>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'LeadCard',
  props: {
    lead: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
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
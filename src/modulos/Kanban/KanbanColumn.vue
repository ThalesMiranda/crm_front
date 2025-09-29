<template>
  <div class="kanban-column">
    <v-card-title class="kanban-title">{{ title }}</v-card-title>
    <draggable
      :list="leads"
      group="leads"
      item-key="id"
      class="kanban-list"
      @change="onLeadMove" 
    >
      <template #item="{ element }">
        <LeadCard :lead="element" />
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import LeadCard from './LeadCard.vue';

export default {
  name: 'KanbanColumn',
  components: { draggable, LeadCard },
  props: {
    title: {
      type: String,
      required: true,
    },
    leads: {
      type: Array,
      required: true,
    },
  },
  emits: ['lead-updated'], // Declara o evento que será emitido
  methods: {
    onLeadMove(event) {
      // O evento 'added' ocorre quando um card é solto nesta coluna vindo de outra.
      if (event.added) {
        const movedLead = event.added.element;
        const newStatus = this.title;

        // Emitimos os dados do lead movido e o novo status para o componente pai
        this.$emit('lead-updated', {
          id: movedLead.id,
          new_pipeline_status: newStatus,
        });
      }
    }
  }
};
</script>

<style scoped>
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
</style>
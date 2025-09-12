<template>
  <v-container fluid>
    <header-title :titulo="'Leads'" :botaoTexto="'Novo Lead'" />
    <v-card class="pa-4 bg-grayFix d-flex flex-column">
      <div class="kanban-container flex-grow-1">
        <KanbanColumn
          v-for="column in columns"
          :key="column.id"
          :title="column.title"
          :leads="column.leads"
        />
      </div>
    </v-card>
  </v-container>
</template>

<script>
import KanbanColumn from '../Kanban/KanbanColumn.vue';
import HeaderTitle from '../Layout/HeaderTitle.vue';

export default {
  name: 'Leads',
  components: {
    HeaderTitle,
    KanbanColumn,
  },
data() {
  return {
    columns: [
      {
        id: 'new',
        title: 'New',
        leads: [
          {
            id: 1,
            avatar: "LM",
            name: "Lucy Mark",
            company: "ShieldGuard Security",
            description: "Requirement: Milestone360 for Goal Tracking",
            chips: [
              { text: "Example" },
              { text: "$1,260,000.00" },
              { text: "Direct" },
              { text: "Small Market Business" },
              { text: "VIP Client", color: "bg-green-lighten-5 text-green-darken-3" }
            ],
          },
          {
            id: 2,
            avatar: "E",
            name: "Example",
            company: "ShieldGuard Security",
            description: "Urgent Requirement: DataVault for Data Encryption",
            chips: [
              { text: "Example" },
              { text: "$5,000.00" },
              { text: "Direct" },
              { text: "Small Market Business" },
            ],
          },
          {
            id: 3,
            avatar: "Sa",
            name: "Sasha Calle",
            company: "ShieldGuard Security",
            description: "Need to know about Milestone360 Product",
            chips: [
              { text: "Example" },
              { text: "$15,000.00" },
              { text: "Direct Service Business" },
            ],
          },
          
        ],
      },
      {
        id: 'follow-up',
        title: 'Follow Up',
        leads: [
          {
            id: 4,
            avatar: "BJ",
            name: "Billy James",
            company: "SentinelSecure",
            description: "Enquiry: ProjectPulse Enterprise Solution",
            chips: [
              { text: "Example" },
              { text: "$10,000.00" },
              { text: "Phone" },
              { text: "New Business" },
              { text: "Enquiry", color: "bg-yellow-lighten-5 text-yellow-darken-3" }
            ],
          },
          {
            id: 5,
            avatar: "EC",
            name: "Eddy Collins",
            company: "VigilerTech",
            description: "Urgent Requirement: TaskMaster Pro Implementation",
            chips: [
              { text: "Urgent Requirement" },
              { text: "Example" },
              { text: "$50,000.00" },
              { text: "Email" },
              { text: "Urgent Sale", color: "bg-red-lighten-5 text-red-darken-3" },
              { text: "Super Priority", color: "bg-red-lighten-5 text-red-darken-3" }
            ],
          },
          {
            id: 6,
            avatar: "OQ",
            name: "Oliver Queen",
            company: "QG",
            description: "New Business",
            chips: [
              { text: "New Business" },
              { text: "Enquiry", color: "bg-yellow-lighten-5 text-yellow-darken-3" }
            ],
          },
        ],
      },
      {
        id: 'prospect',
        title: 'Prospect',
        leads: [
          {
            id: 7,
            avatar: "SC",
            name: "Sasha Calle",
            company: "ShieldGuard Security",
            description: "Need more information about Product → CyberGuard Pro",
            chips: [
              { text: "Example" },
              { text: "$100,000.00" },
              { text: "Phone" },
              { text: "New Business" },
              { text: "Requirement", color: "bg-green-lighten-5 text-green-darken-3" },
              { text: "VIP Client", color: "bg-green-lighten-5 text-green-darken-3" }
            ],
          },
          {
            id: 8,
            avatar: "LM",
            name: "Lucy Mark",
            company: "ShieldGuard Security",
            description: "Sales Opportunity: CyberGuard Pro for Network Security",
            chips: [
              { text: "Example" },
              { text: "$150,000.00" },
              { text: "Referral" },
              { text: "Large Market Business" }
            ],
          },
          {
            id: 9,
            avatar: "EC",
            name: "Eddy Collins",
            company: "ShieldGuard Security",
            description: "Need to know about Milestone360 Product",
            chips: [
              { text: "Example" },
              { text: "$10,000.00" },
              { text: "Direct" },
              { text: "Service Business" }
            ],
          },
        ],
      },
      {
        id: 'negotiation',
        title: 'Negotiation',
        leads: [
          {
            id: 10,
            avatar: "SJ",
            name: "Shelly Josh",
            company: "InnSoft Defense",
            description: "Sales Opportunity: TeamTrack for Agile Development",
            chips: [
              { text: "Custom Admin" },
              { text: "$150,000.00" },
              { text: "Web Form" },
              { text: "Existing Business" },
              { text: "Immediate Action", color: "bg-red-lighten-5 text-red-darken-3" }
            ],
          },
          {
            id: 11,
            avatar: "SC",
            name: "Sasha Calle",
            company: "ShieldGuard Security",
            description: "Need to know about Milestone360 Product",
            chips: [
              { text: "Custom Admin" },
              { text: "$10,000.00" },
              { text: "Direct" },
              { text: "Service Business" }
            ],
          },
        ],
      },
      {
        id: 'won',
        title: 'Won',
        leads: [
          {
            id: 12,
            avatar: "WF",
            name: "Wilson Fisk",
            company: "ShieldGuard Security",
            description: "Urgent Requirement of Product → TaskMaster Pro - Advanced Project Management Tool",
            chips: [
              { text: "Example" },
              { text: "$2,760,000.00" },
              { text: "Web" },
              { text: "Existing Business" },
              { text: "Urgent Sale", color: "bg-red-lighten-5 text-red-darken-3" },
              { text: "Super Priority", color: "bg-red-lighten-5 text-red-darken-3" }
            ],
          },
          {
            id: 13,
            avatar: "SC",
            name: "Sasha Calle",
            company: "ShieldGuard Security",
            description: "Urgent Sales Required for Task Master Pro",
            chips: [
              { text: "Example" },
              { text: "$150,000.00" },
              { text: "Existing Business" }
            ],
          },
        ],
      },
    ],
  };
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
</style>
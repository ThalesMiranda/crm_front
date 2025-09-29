<template>
  <v-breadcrumbs :items="items" class="mb-2">
    <template v-slot:divider>
      /
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "Breadcrumbs",
  computed: {
    items() {
      const route = this.$route
      const crumbs = [{ title: "Dashboard", to: "/" }]

      switch (route.name) {
        case "leads_view":
          crumbs.push({ title: "Leads", to: "/leads/leads_view" })
      
          break;
        case "leads_details":
          crumbs.push({ title: "Leads", to: "/leads" })
          crumbs.push({ title: "Details", to: "/leads/leads_details" })
          break
        case "quotes":
          crumbs.push({ title: "Quotes", to: "/quotes" })
          break
        case "activities":
          crumbs.push({ title: "Activities", to: "/activities" })
          break
        case "contacts-persons":
          crumbs.push({ title: "Contact", to: "/contacts" })
          crumbs.push({ title: "Persons", to: "/contacts/persons" })
          break
        case "contacts-organizations":
          crumbs.push({ title: "Contact", to: "/contacts" })
          crumbs.push({ title: "Organizations", to: "/contacts/organizations" })
          break
        case "contacts-create-person":
          crumbs.push({ title: "Contact", to: "/contacts" })
          crumbs.push({ title: "Persons", to: "/contacts/persons" })
          crumbs.push({ title: "Create", to: "/contacts/persons/create-person" })

          break
        case "settings":
          crumbs.push({ title: "Settings", to: "/settings" })
          break
        case "configuration":
          crumbs.push({ title: "Configuration", to: "/configuration" })
          break
        case "mail-inbox":
          crumbs.push({ title: "Mail", to: "/mail" })
          crumbs.push({ title: "Inbox", to: "/mail/inbox" })
          break
        case "mail-draft":
          crumbs.push({ title: "Mail", to: "/mail" })
          crumbs.push({ title: "Draft", to: "/mail/draft" })
          break
        case "mail-outbox":
          crumbs.push({ title: "Mail", to: "/mail" })
          crumbs.push({ title: "Outbox", to: "/mail/outbox" })
          break
        case "mail-sent":
          crumbs.push({ title: "Mail", to: "/mail" })
          crumbs.push({ title: "Sent", to: "/mail/sent" })
          break
      }

      return crumbs
    }
  }
}
</script>

import { createRouter, createWebHistory } from 'vue-router'
import Leads from '@/modulos/Leads/Leads.vue'
import Dashboard from '@/modulos/Dashboard/Dashboard.vue'
import Quotes from '@/modulos/Quotes/Quotes.vue'
import Configuration from '@/modulos/Configuration/Configuration.vue'
import Settings from '@/modulos/Settings/Settings.vue'
import Activities from '@/modulos/Activities/Activities.vue'
import MailInbox from '@/modulos/Mail/Inbox/MailInbox.vue'
import MailDraft from '@/modulos/Mail/Draft/MailDraft.vue'
import MailOutbox from '@/modulos/Mail/Outbox/MailOutbox.vue'
import MailSent from '@/modulos/Mail/Sent/MailSent.vue'
import ContactsPersons from '@/modulos/Contacts/Persons/ContactsPersons.vue'
import ContactsOrganizations from '@/modulos/Contacts/Organizations/ContactsOrganizations.vue'
import CreatePerson from '@/modulos/Contacts/Persons/CreatePerson.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/leads',
    name: 'leads',
    component: Leads
  },

  {
    path: '/quotes',
    name: 'quotes',
    component: Quotes
  },

  {
    path: '/activities',
    name: 'activities',
    component: Activities
  },

  {
    path: '/contacts',
    name: 'contacts',
    redirect:'/contacts/persons',
    children:[
      {
        path: 'persons',
        name: 'contacts-persons',
        component: ContactsPersons
      },
      {
        path: 'organizations',
        name: 'contacts-organizations',
        component: ContactsOrganizations
      },
      {
        path: 'create-person',
        name: 'contacts-create-person',
        component: CreatePerson
      },
    ]
  },
  {
    path: '/mail',
    name: 'mail',
    redirect: '/mail/inbox', 
    children: [
      {
        path: 'inbox',
        name: 'mail-inbox',
        component: MailInbox
      },
      {
        path: 'draft',
        name: 'mail-draft',
        component: MailDraft
      },
      {
        path: 'outbox',
        name: 'mail-outbox',
        component: MailOutbox
      },
      {
        path: 'sent',
        name: 'mail-sent',
        component: MailSent
      }
    ]
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },

  {
    path: '/configuration',
    name: 'configuration',
    component: Configuration
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

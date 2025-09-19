<template>
  <v-navigation-drawer
    permanent
    expand-on-hover
    rail
    rail-width="60"
    class="pt-5"
  >
    <v-list density="default" nav>

      <v-list-item to="/" title="Dashboard">
        <template #prepend>
          <span class="icon icon-dashboard text-xl mr-7"></span>
        </template>
      </v-list-item>

      <v-list-item to="/leads" title="Leads">
        <template #prepend>
          <span class="icon icon-leads text-xl mr-7"></span>
        </template>
      </v-list-item>

      <v-list-item to="/quotes" title="Quotes">
        <template #prepend>
          <span class="icon icon-quotes text-xl mr-7"></span>
        </template>
      </v-list-item>

    <v-list-group value="mail">
      <template #activator="{ props }">
        <v-list-item v-bind="props" title="Mail">
          <template #prepend>
            <span class="icon icon-mail text-xl mr-7"></span>
          </template>
        </v-list-item>
      </template>

      <v-list-item to="/mail/inbox" title="Inbox"></v-list-item>
      <v-list-item to="/mail/draft" title="Draft"></v-list-item>
      <v-list-item to="/mail/outbox" title="Outbox"></v-list-item>
      <v-list-item to="/mail/sent" title="Sent"></v-list-item>
    </v-list-group>

    <v-list-item to="/activities" title="Activities">
      <template #prepend>
        <span class="icon icon-activities text-xl mr-7"></span>
      </template>
    </v-list-item>

    <v-list-group value="contacts">
      <template #activator="{ props }">
        <v-list-item v-bind="props" title="Contacts">
          <template #prepend>
            <span class="icon icon-contacts text-xl mr-7"></span>
          </template>
        </v-list-item>
      </template>
      <v-list-item to="/contacts/persons" title="Persons"></v-list-item>
      <v-list-item to="/contacts/organizations" title="Organizations"></v-list-item>
    </v-list-group>

      <v-list-item to="/settings" title="Settings">
        <template #prepend>
          <span class="icon icon-settings text-xl mr-7"></span>
        </template>
      </v-list-item>

      <v-list-item to="/configuration" title="Configuration">
        <template #prepend>
          <span class="icon icon-configuration text-xl mr-7"></span>
        </template>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<style>
.icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width:  16px;
  height: 16px;
}

/* padding custom */
.v-list-item {
  padding-top:    12px !important;
  padding-bottom: 12px !important;
  padding-left:   12px !important;
  padding-right:  24px !important;
}

.v-list-item-title {
  font-size: 14px !important;
  color: rgb(75 85 99);
}



.v-list-item--active {
  background-color: rgb(11, 133, 255);
  color:white;
}

.v-list-item--active .v-list-item-title,
.v-list-item--active .v-icon,
.v-list-item--active .icon {
  color: white !important;
  fill: white !important;
}
</style>

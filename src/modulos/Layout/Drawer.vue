<template>
  <v-navigation-drawer
    permanent
    expand-on-hover
    rail
    rail-width="80"
    class="pt-2"
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

      <v-list-item to="/mail" title="Mail">
        <template #prepend>
          <span class="icon icon-mail text-xl mr-7"></span>
        </template>
      </v-list-item>

      <v-list-item to="/activities" title="Activities">
        <template #prepend>
          <span class="icon icon-activities text-xl mr-7"></span>
        </template>
      </v-list-item>

      <v-list-item to="/contacts" title="Contacts">
        <template #prepend>
          <span class="icon icon-contacts text-xl mr-7"></span>
        </template>
      </v-list-item>

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
  width: 24px;
  height: 24px;
}

/* padding custom */
.v-list-item {
  padding-top: 18px !important;
  padding-bottom: 18px !important;
  padding-left: 18px !important;
  padding-right: 18px !important;
}

.v-list-item-title {
  font-size: 18px !important;
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

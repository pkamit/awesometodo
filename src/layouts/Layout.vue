<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <!--  <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />-->

        <q-toolbar-title class="absolute-center">Awesome Todo</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.id"
          :to="nav.to"
          :name="nav.label"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      :width="250"
      :breakpoint="767"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigations</q-item-label>
        <q-item v-for="nav in navs" :key="nav.id" :to="nav.to" class="text-grey-4" exact clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          id: 0,
          label: "Todo",
          icon: "list",
          to: "/"
        },
        {
          id: 1,
          label: "Settings",
          icon: "settings",
          to: "/settings"
        },
        {
          id: 2,
          label: "About",
          icon: "info",
          to: "/about"
        },
        {
          id: 3,
          label: "Test",
          icon: "info",
          to: "/test"
        }
      ]
    };
  }
};
</script>
<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-drawer .q-router-link--exact-active {
  color: white !important;
}
</style>

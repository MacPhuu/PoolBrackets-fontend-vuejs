<template>
  <q-layout view="lHh Lpr lFf" class="row">
    <q-tabs
      v-model="selectedTab"
      dense
      vertical
      class="bg-no-5 col"
      style="height: 100vh; max-width: 100px"
      indicator-color="primary"
    >
      <NavBarComponent
        v-for="(tab, index) in tabs"
        :key="index"
        :tabName="tab.tabName"
        :tabLabel="tab.tabLabel"
        :tabDes="tab.tabDes"
        :tabIcon="tab.tabIcon"
        style="padding-top: 15px; padding-bottom: 15px"
        class="text-white"
      />
    </q-tabs>
    <q-page-container class="col">
      <router-view class="bg-no-4" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBarComponent from 'components/NavBarComponent.vue'

const tabs = ref([
  {
    tabName: '/host/profile',
    tabLabel: 'General',
    tabDes: '/host/profile',
    tabIcon: 'account_circle',
  },
  {
    tabName: '/host/profile/events',
    tabLabel: 'Your Events',
    tabDes: '/host/profile/events',
    tabIcon: 'event',
  },
])

const selectedTab = ref('/host/profile')
</script>

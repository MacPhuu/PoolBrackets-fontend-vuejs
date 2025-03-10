<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="column items-center text-weight-bold text-h3 q-my-lg">
          PoolBrackets
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs v-model="selectedTab">
        <NavBarComponent
          v-for="(tab, index) in tabs"
          :key="index"
          :tabName="tab.tabName"
          :tabLabel="tab.tabLabel"
          :tabDes="tab.tabDes"
        />
      </q-tabs>
    </q-header>
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title class="column items-center text-caption">
          <span>Copyright <q-icon name="copyright" /> by macphu2801@gmail.com</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import NavBarComponent from 'components/NavBarComponent.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = ref([
  { tabName: '/host/infor', tabLabel: 'Infor', tabDes: '/host/infor' },
  { tabName: '/news', tabLabel: 'News', tabDes: '/news' },
  { tabName: '/live-scores', tabLabel: 'Live Scores', tabDes: '/live-scores' },
  { tabName: '/players', tabLabel: 'Players', tabDes: '/players' },
  { tabName: '/rankings', tabLabel: 'Rankings', tabDes: '/rankings' },
  { tabName: '/events', tabLabel: 'Events', tabDes: '/events' },
])

const selectedTab = ref(route.path)

watch(route, (newRoute) => {
  selectedTab.value = newRoute.path
})
</script>

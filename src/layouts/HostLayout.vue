<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="column items-center text-weight-bold text-h3 q-my-lg">
          ShotSync Ranking
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs v-model="selectedTab">
        <NavBarComponent
          v-for="(tab, index) in tabs"
          :key="index"
          :tabName="tab.tabName"
          :tabLabel="tab.tabLabel"
          :tabDes="tab.tabDes"
          tabIcon=""
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
  { tabName: '/host/profiles', tabLabel: 'Profiles', tabDes: '/host/profiles' },
  { tabName: '/host/your_events', tabLabel: 'Your Events', tabDes: '/host/your_events' },
])

const selectedTab = ref(route.path)

watch(route, (newRoute) => {
  selectedTab.value = newRoute.path
})
</script>

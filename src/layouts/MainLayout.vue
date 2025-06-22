<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="column items-center text-weight-bold text-h3 q-my-lg">
          ShotSync Ranking
        </q-toolbar-title>
      </q-toolbar>
      <div style="position: absolute; top: 20px; right: 50px">
        <q-btn flat round dense icon="logout" class="q-mr-xs" @click="logout" />
        <q-btn flat round dense icon="account_circle" />
      </div>
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

    <!-- Confirmation Dialog -->
    <q-dialog v-model="confirmLogoutDialog" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Are you sure you want to leave now?</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Logout" color="negative" @click="confirmLogout" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title class="column items-center text-caption">
          <span>Copyright <q-icon name="copyright" /> by shotsync.com</span>
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
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const userRole = localStorage.getItem('role')

const selectedTab = ref(route.path)
watch(route, (newRoute) => {
  selectedTab.value = newRoute.path
})

const tabs = ref([
  ...(userRole === '1'
    ? [{ tabName: '/host/profile/', tabLabel: 'Profile', tabDes: '/host/profile/' }]
    : []),
  { tabName: '/news', tabLabel: 'News', tabDes: '/news' },
  { tabName: '/players', tabLabel: 'Players', tabDes: '/players' },
  { tabName: '/rankings', tabLabel: 'Rankings', tabDes: '/rankings' },
  { tabName: '/events', tabLabel: 'Events', tabDes: '/events' },
])

const confirmLogoutDialog = ref(false)

const logout = () => {
  confirmLogoutDialog.value = true
}

const confirmLogout = async () => {
  localStorage.removeItem('Token')
  localStorage.removeItem('role')
  localStorage.removeItem('eventId')
  localStorage.removeItem('userInfor')
  localStorage.removeItem('userName')
  confirmLogoutDialog.value = false
  await router.push('/login')
}
</script>

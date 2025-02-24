<template>
  <q-tab :name="tabName" :label="tabLabel" @click="NavBarComponentHandle" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

export interface NavBarComponentProps {
  tabName: string
  tabLabel: string
  tabDes: string
}

const props = withDefaults(defineProps<NavBarComponentProps>(), {
  tabName: 'newtab',
  tabDes: '#',
  tabLabel: 'New Tab',
})

async function NavBarComponentHandle() {
  await router.push(props.tabDes)
}
</script>

<template>
  <q-page>
    <div class="row q-pt-lg">
      <div class="col"></div>
      <div class="col-10">
        <PlayerComponent
          class="text-white"
          v-for="(player, index) in players"
          :key="index"
          :playerNumber="index + 1"
          :playerName="player.name"
          :playerNation="player.nation"
          :playerPoint="player.point"
          :playerPortrait="player.portrait || defaultPortrait"
        />
      </div>
      <div class="col"></div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PlayerComponent from 'components/PlayerComponent.vue'
import type { Player } from '../components/models'
import api from 'src/services/api'

const defaultPortrait =
  'https://storage.googleapis.com/wnt-cm-public/media/players/generic-profile_mini_dcryfs.webp'
const players = ref<Player[]>([])

const fetchPlayers = async () => {
  try {
    const response = await api.get('/players')

    const data = await response.data;
    players.value = data
  } catch (error) {
    console.error('Error fetching players:', error)
  }
}

onMounted(async () => {
  await fetchPlayers()
})
</script>

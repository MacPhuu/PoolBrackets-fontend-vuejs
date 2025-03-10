<template>
  <q-page class="row justify-center">
    <div class="col justify-center items-center" v-if="loading">
      <div class="row justify-center items-center" style="height: 60vh">
        <q-spinner-cube color="orange" size="5.5em" />
      </div>
    </div>
    <div class="column col" v-if="!loading">
      <div
        class="event-infor-component w-100 bg-no-2 q-my-sm row"
        style="height: auto; border-radius: 20px; width: 100%"
      >
        <div class="col column justify-center items-center">
          <div
            class="row bg-primary text-white text-h6 justify-center"
            style="height: 40px; width: 30%; border-radius: 0 0 10px 10px"
          >
            PLAYER LIST
          </div>
          <div class="row q-my-lg justify-center bg-no-2" style="width: 95%">
            <PlayerCardComponent
              v-for="(player, index) in players"
              :key="index"
              :playerName="player.name"
              :playerNation="player.nation"
              :playerPortrait="player.portrait || defaultPortrait"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import PlayerCardComponent from 'components/PlayerCardComponent.vue'
import { ref, onMounted } from 'vue'
import type { Player, Event } from '../../components/models'
import api from 'src/services/api'
import { useEventStore } from 'src/stores/event';

const route = useRoute()

const eventStore = useEventStore()

const eventName = route.params.eventName
const eventNameStr = Array.isArray(eventName) ? eventName[0] : eventName || 'error'

const loading = ref(true)

const defaultPortrait =
  'https://storage.googleapis.com/wnt-cm-public/media/players/generic-profile_mini_dcryfs.webp'

const players = ref<Player[]>([])
const event = ref<Event>({
  id: 0,
  name: '',
  venue: '',
  location: '',
  date: '',
  isHappen: false,
})

const fetchData = async () => {
  try {
    const [eventResponse, playersResponse] = await Promise.all([
      api.get(`/events/${eventNameStr}`),
      api.get('/players'),
    ])
    event.value = eventResponse.data
    players.value = playersResponse.data
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  console.log(eventStore.getEventId)
  await fetchData()
})
</script>

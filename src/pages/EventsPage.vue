<template>
  <q-page class="row items-center justify-evenly">
    <div class="row q-pt-lg">
      <div class="col"></div>
      <div class="col-10 q-py-md">
        <div class="row justify-center q-gutter-sm">
          <TournamentComponent
            v-for="(tournament, index) in tournaments"
            :key="index"
            :tournamentName="tournament.name"
            :tournamentLoc="tournament.location"
            :tournamentTime="dateFormater(tournament.date)"
            :tournamentVenue="tournament.venue"
            :tournamentIsHappening="tournament.is_happen"
            @click="handleTournamentClick(tournament.name)"
          />
        </div>
      </div>
      <div class="col"></div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TournamentComponent from 'components/TournamentComponent.vue'
import { ref, onMounted } from 'vue'
import type { Event } from '../components/models'
import { dateFormater } from '../helper/DateFormater'
import { useRouter } from 'vue-router'
import api from 'src/services/api'
const router = useRouter()

const tournaments = ref<Event[]>([])

const fetchEvents = async () => {
  try {
    const response = await api.get('/events')

    const data = await response.data;
    tournaments.value = data
  } catch (error) {
    console.error('Error fetching players:', error)
  }
}

const handleTournamentClick = async (event: string) => {
  await router.push({ name: 'EventDetailPage', params: { eventName: event } })
}

onMounted(async () => {
  await fetchEvents()
})
</script>

<style lang="sass"></style>

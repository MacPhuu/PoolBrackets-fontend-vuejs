<template>
  <q-page class="row q-pt-lg justify-evenly">
    <div class="row items-center justify-center" style="width: 100%" v-if="loading">
      <q-spinner-cube color="orange" size="5.5em" />
    </div>
    <div class="col-1" style="max-width: 100px"></div>
    <div class="col" v-if="!loading">
      <div style="width: 23%;">
          <q-card flat class="q-ma-sm" style="background-color:rgba(0, 0, 0, 0.0); ">
            <div class="row items-center" style="height: 150px;" >
              <q-btn round class="q-pa-md" color="secondary" icon="add" >
                <q-tooltip class="bg-primary" anchor="center right" self="center start" style="font-size: 14px;">Create Tournament</q-tooltip>
              </q-btn>
            </div>
          </q-card>
        </div>
      <div class="row q-gutter-sm">
        <EventComponent
          v-for="(event, index) in events"
          :key="index"
          :eventName="event.name"
          :eventLoc="event.location"
          :eventTime="dateFormater(event.date)"
          :eventVenue="event.venue"
          :eventIsHappening="event.isHappen"
          @click="handleEventClick(event.name, event.id)"
        />
        
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import EventComponent from 'components/HostEventComponent.vue'
import { ref, onMounted } from 'vue'
import type { Event } from 'components/models'
import { dateFormater } from 'src/helper/DateFormater'
import { useRouter } from 'vue-router'
import { useEventStore } from 'src/stores/event'
import api from 'src/services/api'

const router = useRouter()

const eventStore = useEventStore()

const loading = ref(true)

const events = ref<Event[]>([])

const fetchEvents = async () => {
  try {
    const response = await api.get('/events')

    const data = await response.data
    events.value = data
  } catch (error) {
    console.error('Error fetching players:', error)
  } finally {
    loading.value = false
  }
}

const handleEventClick = async (event: string, id: number) => {
  eventStore.setEventId(id)
  await router.push({ name: 'EventDetailPage', params: { eventName: event } })
}

onMounted(async () => {
  await fetchEvents()
})
</script>

<style lang="sass" scoped>

</style>

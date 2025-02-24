<template>
  <q-page class="row justify-center">
    <div class="col"></div>
    <div class="col-10 q-py-md column">
      <div
        class="event-infor-component w-100 bg-no-2 q-my-lg row"
        style="height: auto; border-radius: 20px; width: 100%"
      >
        <div class="col column justify-center items-center">
          <div
            class="row bg-primary text-white text-h6 justify-center"
            style="height: 40px; width: 30%; border-radius: 0 0 10px 10px"
          >
            EVENT INFOR
          </div>
          <div
            class="row text-h3 text-weight-medium text-italic text-uppercase text-primary q-py-lg q-my-lg"
          >
            CPBA 99 Tournament 2025
          </div>
          <div class="row text-white justify-around" style="width: 100%">
            <div class="column items-center justify-center q-ma-lg">
              <span class="row items-center text-h6"
                ><q-icon name="calendar_today" class="q-mr-sm" /> Date</span
              >
              <span class="text-h6 text-primary">Jan 15 - 19, 2025</span>
            </div>
            <div class="column items-center justify-center">
              <span class="row items-center text-h6"
                ><q-icon name="location_on" class="q-mr-sm" />Venue</span
              >
              <span class="text-h6 text-primary">99 Billiards Club</span>
            </div>
            <div class="column items-center justify-center">
              <span class="row items-center text-h6"
                ><q-icon name="public" class="q-mr-sm" />Location</span
              >
              <span class="text-h6 text-primary">Hanoi, Vietnam</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Part 2 -->
      <div
        class="event-infor-component w-100 bg-no-2 q-my-sm row"
        style="height: auto; border-radius: 20px; width: 100%"
      >
        <div class="col column justify-center items-center">
          <div
            class="row bg-primary text-white text-h6 justify-center"
            style="height: 40px; width: 30%; border-radius: 0 0 10px 10px"
          >
            LIVE SCORES
          </div>
          <div class="row q-my-lg justify-center" style="width: 95%">
            <LiveScoreComponent
              v-for="(match, index) in matchs"
              :key="index"
              :table="match.table"
              :firstPlayerName="match.firstPlayer"
              :secondPlayerName="match.secondPlayer"
              :firstPoint="match.firstPlayerPoint"
              :secondPoint="match.secondPlayerPoint"
              :isFinish="match.isFinish"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col"></div>
  </q-page>
</template>

<script setup lang="ts">
//import { useRoute } from 'vue-router'

// Sử dụng useRoute để lấy thông tin về route hiện tại
//const route = useRoute()

// Truy xuất eventSlug từ params của route
//const eventSlug = route.params.eventSlug

import LiveScoreComponent from 'components/LiveScoreComponent.vue'
import { ref } from 'vue'

const matchs = ref([
  {
    table: 'T1',
    firstPlayer: 'Fedor Gorst',
    secondPlayer: 'Johan Chua',
    firstPlayerPoint: 8,
    secondPlayerPoint: 10,
    isFinish: true,
  },
  {
    table: 'T1',
    firstPlayer: 'Fedor Gorst',
    secondPlayer: 'Johan Chua',
    firstPlayerPoint: 8,
    secondPlayerPoint: 10,
    isFinish: true,
  },
  {
    table: 'T1',
    firstPlayer: 'Fedor Gorst',
    secondPlayer: 'Johan Chua',
    firstPlayerPoint: 8,
    secondPlayerPoint: 10,
    isFinish: true,
  },
  {
    table: 'T1',
    firstPlayer: 'Fedor Gorst',
    secondPlayer: 'Johan Chua',
    firstPlayerPoint: 8,
    secondPlayerPoint: 10,
    isFinish: true,
  },
  {
    table: 'T1',
    firstPlayer: 'Fedor Gorst',
    secondPlayer: 'Johan Chua',
    firstPlayerPoint: 8,
    secondPlayerPoint: 10,
    isFinish: false,
  },
  {
    table: 'T1',
    firstPlayer: 'Fedor Gorst',
    secondPlayer: 'Johan Chua',
    firstPlayerPoint: 8,
    secondPlayerPoint: 10,
    isFinish: true,
  },
])
</script>

<template>
  <q-page class="row justify-center">
    <div class="col-12 q-py-md column">
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

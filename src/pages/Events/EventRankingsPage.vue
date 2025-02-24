<template>
  <q-page class="row justify-center">
    <div class="col-12 q-py-md column">
      <div
        class="event-infor-component w-100 bg-no-1 q-my-lg row"
        style="height: auto; border-radius: 20px; width: 100%"
      >
        <div class="col column justify-center items-center">
          <div class="row q-my-lg text-white" style="width: 100%">
            <div class="col text-left self-center q-pl-xl text-h2 text-bold">#1</div>

            <div class="col-9 text-left self-center">
              <div class="row">
                <div class="col">
                  <img
                    :src="players[0]?.portrait || defaultPortrait"
                    alt="My Image"
                    width="270"
                    height="240"
                  />
                </div>
                <div class="col-9 text-left self-center">
                  <div
                    class="player-name text-h3 text-weight-medium text-italic font-roboto-condensed text-uppercase"
                  >
                    {{ players[0]?.name }}
                  </div>
                  <div class="player-nation text-h6 text-uppercase">{{ players[0]?.nation }}</div>
                </div>
              </div>
            </div>
            <div class="col-2 text-right self-center q-pr-xl text-h4 text-italic">
              {{ players[0]?.point }}
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
          <div class="column q-my-lg" style="width: 90%">
            <PlayerComponent
              class="bg-white text-primary"
              v-for="(player, index) in players.slice(1)"
              :key="index"
              :playerNumber="index + 2"
              :playerName="player.name"
              :playerNation="player.nation"
              :playerPoint="player.point"
              :playerPortrait="player.portrait || defaultPortrait"
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
import { ref, onMounted } from 'vue'
import PlayerComponent from 'components/PlayerComponent.vue'
import type { Player } from '../../components/models'

const defaultPortrait =
  'https://storage.googleapis.com/wnt-cm-public/media/players/generic-profile_mini_dcryfs.webp'

const players = ref<Player[]>([])

const fetchPlayers = async () => {
  try {
    const response = await fetch('http://localhost:3000/players', {
      method: 'GET', // hoặc 'POST', 'PUT', 'DELETE', tùy vào yêu cầu của API
      headers: {
        'Content-Type': 'application/json', // Đặt kiểu dữ liệu là JSON
      },
    })

    const data = await response.json()
    players.value = data
  } catch (error) {
    console.error('Error fetching players:', error)
  }
}

onMounted(async () => {
  await fetchPlayers()
})
</script>

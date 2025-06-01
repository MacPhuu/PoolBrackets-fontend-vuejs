<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 500px; margin: auto">
      <q-input
        filled
        type="textarea"
        v-model="playerInput"
        label="Nhập danh sách người chơi (mỗi dòng 1 tên)"
        autogrow
      />
      <q-btn label="Tạo Bracket" color="primary" @click="generateBracket" />
    </div>

    <div v-if="players.length > 1" class="q-my-xl">
      <h5 class="text-center">Vòng Winner Bracket</h5>
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <q-list bordered>
            <q-item v-for="(match, idx) in winnerBracket" :key="idx">
              <q-item-section>
                <span v-if="match.p2"> {{ match.p1 }} <b>vs</b> {{ match.p2 }} </span>
                <span v-else> {{ match.p1 }} <i>(bye)</i> </span>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <h5 class="text-center q-mt-xl">Vòng Loser Bracket (khởi tạo)</h5>
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <q-list bordered>
            <q-item v-for="(match, idx) in loserBracket" :key="idx">
              <q-item-section>
                <span v-if="match.p2"> {{ match.p1 }} <b>vs</b> {{ match.p2 }} </span>
                <span v-else> {{ match.p1 }} <i>(bye)</i> </span>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const playerInput = ref('')
const players = ref<string[]>([])
const winnerBracket = ref<{ p1: string; p2?: string }[]>([])
const loserBracket = ref<{ p1: string; p2?: string }[]>([])

function generateBracket() {
  // Tách từng dòng, loại bỏ dòng trống, trim khoảng trắng
  players.value = playerInput.value
    .split('\n')
    .map((name) => name.trim())
    .filter((name) => name.length > 0)

  // Reset brackets
  winnerBracket.value = []
  loserBracket.value = []

  // Ghép cặp cho winner bracket vòng đầu
  for (let i = 0; i < players.value.length; i += 2) {
    const p1 = players.value[i]!
    const p2 = players.value[i + 1]
    if (p2) {
      winnerBracket.value.push({ p1, p2 })
    } else {
      winnerBracket.value.push({ p1 }) // bye
    }
  }
}
</script>

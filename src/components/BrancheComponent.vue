<template>
  <div class="player-component bg-no-2 q-my-sm row" style="height: 100px; border-radius: 20px">
    <div class="col-5 text-right self-center q-pl-md text-h4 text-bold">{{ firstPlayerName }}</div>
    <div class="col text-center self-center q-pl-md text-h4 text-bold">
      <div style="position: relative" v-if="!isFinish">
        <q-btn
          style="position: absolute; top: -25px; left: 35px"
          round
          size="8px"
          color="primary"
          icon="add"
          @click="plusFirstPlayerPoint"
        />
        <q-btn
          style="position: absolute; top: 40px; left: 35px"
          size="8px"
          round
          color="primary"
          icon="remove"
          @click="minusFirstPlayerPoint"
        />
      </div>
      <span :class="{ 'text-red': isFinish && firstPlayerPoint > secondPlayerPoint }">{{
        firstPlayerPoint
      }}</span>
      -

      <span :class="{ 'text-red': isFinish && firstPlayerPoint < secondPlayerPoint }">{{
        secondPlayerPoint
      }}</span>
      <div style="position: relative" v-if="!isFinish">
        <q-btn
          style="position: absolute; top: -65px; right: 35px"
          round
          size="8px"
          color="primary"
          icon="add"
          @click="plusSecondPlayerPoint"
        />
        <q-btn
          style="position: absolute; top: 0px; right: 35px"
          size="8px"
          round
          color="primary"
          icon="remove"
          @click="minusSecondPlayerPoint"
        />
      </div>
    </div>
    <div
      class="col-5 text-left self-center q-pr-md text-h4 text-bold"
      :class="{ 'text-red': secondPlayerName === 'Unknown' }"
    >
      {{ secondPlayerName }}
    </div>
    <div style="position: relative" v-if="!isFinish">
      <q-btn
        style="position: absolute; top: 12px; left: -130px; width: 120px"
        rounded
        color="primary"
        @click="plusFirstPlayerPoint"
        label="Update Point"
      />
      <q-btn
        style="position: absolute; top: 53px; left: -130px; width: 120px"
        rounded
        color="primary"
        @click="plusFirstPlayerPoint"
        label="Finish Match"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
export interface BrancheComponentProps {
  firstPlayerName: string
  firstPlayerPoint: number
  secondPlayerName: string
  secondPlayerPoint: number
  isFinish: boolean
}

const props = withDefaults(defineProps<BrancheComponentProps>(), {
  firstPlayerName: '',
  firstPlayerPoint: 0,
  secondPlayerName: '',
  secondPlayerPoint: 0,
  isFinish: false,
})

const firstPlayerPoint = ref(props.firstPlayerPoint)
const secondPlayerPoint = ref(props.secondPlayerPoint)

const plusFirstPlayerPoint = () => {
  firstPlayerPoint.value += 1
}

const minusFirstPlayerPoint = () => {
  firstPlayerPoint.value -= 1
}

const plusSecondPlayerPoint = () => {
  secondPlayerPoint.value += 1
}

const minusSecondPlayerPoint = () => {
  secondPlayerPoint.value -= 1
}
</script>
<style lang="scss">
.text-red {
  color: red;
}
</style>

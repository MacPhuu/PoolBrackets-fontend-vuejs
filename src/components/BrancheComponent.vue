<template>
  <div
    class="player-component bg-no-2 q-my-sm row"
    style="height: 100px; border-radius: 20px"
  >
    <div class="col text-center self-center q-pl-md text-h4 text-bold">{{ firstPlayerName }}</div>
    <div class="col text-center self-center q-pl-md text-h4 text-bold"><span :class="{'text-red': isFinish && firstPlayerPoint>secondPlayerPoint}">{{ firstPlayerPoint }}</span> - <span :class="{'text-red': isFinish&& firstPlayerPoint<secondPlayerPoint}">{{ secondPlayerPoint }}</span></div>
    <div class="col text-center self-center q-pr-md text-h4 text-bold" :class="{'text-red': secondPlayerName === 'Unknown'}">{{ secondPlayerName }}</div>
  </div>
</template>
<script setup lang="ts">
export interface BrancheComponentProps{
    firstPlayerName: string
    firstPlayerPoint: number
    secondPlayerName: string
    secondPlayerPoint: number
    isFinish: boolean
}

withDefaults(defineProps<BrancheComponentProps>(), {
    firstPlayerName: '',
    firstPlayerPoint: 0,
    secondPlayerName:'',
    secondPlayerPoint: 0,
    isFinish: false,
})

</script>
<style lang="scss">
.text-red {
  color: red;
}
</style>

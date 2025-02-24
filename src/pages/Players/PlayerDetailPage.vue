<template>
  <q-page class="row q-pt-lg q-mt-lg justify-evenly">
    <div class="column col-12">
      <div class="row justify-center" style="aspect-ratio: 1">
        <div class="column col-6 bg-no-1 img-part q-pa-md" style="aspect-ratio: 1">
          <img
            src="https://storage.googleapis.com/wnt-cm-public/media/players/fedor-gorst_premium_wpm424.webp"
            class="contain fit"
          />
        </div>
        <div class="column col-4 bg-no-3 inf-part q-pt-xl q-pl-xl q-mx-lg">
          <div
            class="text-h2 text-secondary text-weight-medium text-italic font-roboto-condensed text-uppercase"
          >
            Fedor Gorst
          </div>
          <div
            class="text-h4 text-gray text-weight-medium text-italic font-roboto-condensed text-uppercase"
          >
            USA
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Player } from '../../components/models'

const player = ref<Player>({
  name: '',
  nation: '',
  portrait: '',
  point: '',
})

console.log(player)
</script>

<style lang="sass" scoped>
.inf-part
    height: 40vw
    max-height: 650px
    border-radius: 0 20px 20px 0
.img-part
    height: 40vw
    max-height: 650px
    max-width: 650px
    border-radius: 20px 0 0 20px
</style>

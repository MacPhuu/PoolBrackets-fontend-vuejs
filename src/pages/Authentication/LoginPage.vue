<template>
  <q-layout class="bg-no-1 window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row items-center justify-center">
        <div class="text-h3 text-secondary text-bold">PoolBrackets.</div>
      </div>
      <div class="row items-center justify-center">
        <div class="text-h6 text-white q-mb-lg">
          Welcome to the <span class="text-secondary">PoolBrackets.</span> live scoring.
        </div>
      </div>
      <div class="row">
        <q-form class="q-gutter-md" @submit="onSubmit">
          <q-card square bordered class="q-pa-md shadow-1">
            <q-card-section>
              <div class="text-h5 text-primary text-bold q-pb-md">Login</div>
              <q-input
                class="q-my-md"
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="email"
              />
              <q-input
                class="q-my-md"
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="password"
              />
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                unelevated
                size="lg"
                class="full-width bg-primary text-white"
                type="submit"
                label="Login"
              />
            </q-card-actions>
            <q-card-section class="text-center q-pa-none">
              <p class="text-grey-6">Not reigistered? Created an Account</p>
            </q-card-section>
          </q-card>
        </q-form>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import api from 'src/services/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const onSubmit = async () => {
  const loginInfor = {
    email: email.value,
    password: password.value,
  }
  const loginInforJson = JSON.stringify(loginInfor)
  try {
    const response = await api.post('/login', loginInforJson)

    console.log('Login successful:', response.data)
    localStorage.setItem('userName', response.data.userName)
    localStorage.setItem('role', response.data.role)
    localStorage.setItem('Token', response.data.token)
    await router.push('/news')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>

<style>
.q-card {
  width: 450px;
}
</style>

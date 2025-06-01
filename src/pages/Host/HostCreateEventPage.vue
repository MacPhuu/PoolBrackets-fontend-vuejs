<template>
  <q-page class="q-pa-md row justify-center">
    <q-form @submit.prevent="submitForm" class="q-gutter-md col-8">
      <q-input v-model="form.tournamentName" label="Tên giải đấu" outlined required />

      <q-input v-model="form.slogan" type="textarea" label="Slogan(Optional)" outlined autogrow />

      <q-input v-model="form.venue" label="Tên câu lạc bộ" outlined required />

      <q-input v-model="form.location" label="Địa chỉ tổ chức" outlined required />

      <q-input v-model="form.date" label="Ngày tổ chức" outlined type="date" required />

      <q-input v-model="form.time" label="Giờ bắt đầu" outlined type="time" required />

      <q-select
        v-model="form.format"
        :options="formats"
        label="Thể thức thi đấu"
        outlined
        required
      />

      <q-input
        v-model.number="form.fee"
        type="number"
        label="Lệ phí tham gia (VNĐ)"
        outlined
        required
      />

      <q-input
        v-model.number="form.profit"
        type="number"
        label="Tổng giải thưởng (VNĐ)"
        outlined
        required
      />

      <q-input
        v-model.number="form.maxParticipants"
        type="number"
        label="Số lượng người tham gia tối đa"
        outlined
        required
      />

      <q-editor v-model="form.description" min-height="5rem" />

      <div class="row justify-end">
        <q-btn label="Tạo giải đấu" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  tournamentName: '',
  slogan: '',
  venue: '',
  location: '',
  date: '',
  time: '',
  format: '',
  fee: null,
  profit: null,
  maxParticipants: null,
  description: 'Nhập mô tả về giải đấu...',
})

const formats = [
  'Single Elimination',
  'Double Elimination',
  'Round Robin',
  'Swiss',
  ' Free for all',
  'Leaderboard',
]

function submitForm() {
  // Xử lý logic submit ở đây (gửi API hoặc lưu local)
  console.log('Thông tin giải đấu:', form.value)
}
</script>

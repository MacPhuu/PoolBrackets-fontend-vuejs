<template>
  <q-page class="q-pa-md row justify-center">
    <q-form @submit.prevent="submitForm" class="q-gutter-md col-8">
      <q-input v-model="form.tournamentName" label="Tên giải đấu" outlined required />

      <q-input v-model="form.description" type="textarea" label="Mô tả" outlined autogrow />

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
        v-model.number="form.maxParticipants"
        type="number"
        label="Số lượng người tham gia tối đa"
        outlined
        required
      />

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
  description: '',
  venue: '',
  location: '',
  date: '',
  time: '',
  format: '',
  fee: null,
  maxParticipants: null,
})

const formats = ['Đơn loại trực tiếp', 'Đơn vòng tròn', 'Đôi loại trực tiếp', 'Đôi vòng tròn']

function submitForm() {
  // Xử lý logic submit ở đây (gửi API hoặc lưu local)
  console.log('Thông tin giải đấu:', form.value)
}
</script>

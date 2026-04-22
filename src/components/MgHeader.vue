<script setup>
import { useCounterStore } from '../stores/useCounterStore.js';



const  counterStore = useCounterStore();
</script>

<template>
  <div class="header">
    <h1>Meerketgram {{counterStore.cnt}}</h1>
    <div class="hearder-btn-box">
      <button type="button" class="btn btn-small btn-gray">Sing In</button>
      <button type="button" class="btn btn-small btn-white">Sing Up</button>
    </div>
  </div>
  <hr>
</template>

<style scoped>
.header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.hearder-btn-box {
  display: flex;
  gap: 10PX;
}
</style>
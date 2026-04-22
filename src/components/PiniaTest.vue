<script setup>
import { useCounterStore } from '../stores/useCounterStore.js';

const counterStore = useCounterStore();

</script>

<template>
  <h1>피니아 테스트 {{ counterStore.cnt }}</h1>
  <h1>카운처 게터 {{ counterStore.getOnePlusCnt }}</h1>

  <button type="button" @click="counterStore.addCnt(10)">액션</button>
</template>

<style scoped>

</style>
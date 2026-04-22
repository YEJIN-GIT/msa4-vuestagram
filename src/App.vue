<script setup>
import MgHeader from './components/MgHeader.vue';
import MgList from './components/MgList.vue';
import MgDetail from './components/MgDetail.vue';
import { RouterView } from 'vue-router';


</script>

<template>
  <MgHeader />
  <div class="main">
    <!-- RouterView: 현재 라우트 컴포넌트를 어디에 렌더링 할지 위치를 지정해주는 컴포넌트 -->
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

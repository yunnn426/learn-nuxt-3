<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
console.log(nuxtApp);

// vue application instance
// nuxtApp.vueApp.component() 전역 컴포넌트 등록
// nuxtApp.vueApp.directive() 디렉티브 정의
// nuxtApp.vueApp.use() Vue.js 플러그인 설치

// provide 활용
// nuxtApp.provide('hello', (msg: string) => `Hello ${msg}`);
</script>

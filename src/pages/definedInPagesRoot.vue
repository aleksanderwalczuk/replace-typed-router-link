<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router/auto';
const router = useRouter();
const route = useRoute();
</script>

<template>
  <h1>Root defined Page</h1>
  <p>meta: {{ route.meta }}</p>
  <router-link to="/"> go to main page</router-link>
</template>
<route>
{
name: "Root defined page",
meta: {
sidebar: {
  enabled: true,
  weight: 5
},
}
}
</route>

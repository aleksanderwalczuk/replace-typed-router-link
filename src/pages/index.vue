<template>
  <h1>Main Page</h1>
  <router-link to="/nested"> go to nested page</router-link>
  <ButtonLink to="/nested"></ButtonLink>
</template>
<script setup lang="ts">
import ButtonLink from "../components/ButtonLink.vue"
</script>
<route>
{
  name: "Dashboard",
  meta: {
    sidebar: {
      enabled: true,
      weight: -10
    },
  }
}
</route>

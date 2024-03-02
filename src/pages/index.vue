<template>
  <h1>Main Page</h1>
  <div>
    <!-- router-link is overrode with AppLink.vue in main.ts  -->
  <router-link to="/nested">change url to non existent - no error</router-link>
</div>

  <ButtonLink to="/nested">change url to non existent - works as expected</ButtonLink>
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

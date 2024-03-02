<script lang="ts" setup>
import { RouteNamedMap } from "vue-router/auto/routes";
import { RouterLinkProps } from "vue-router";

const props = defineProps<
  RouterLinkProps & { to: RouteNamedMap[keyof RouteNamedMap]["path"] }
>();
</script>
<template>
  <router-link
    v-bind="props"
    class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 pt-2 pb-[9px] text-xs leading-[15px] font-medium text-white shadow-sm active:bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    ><slot
  /></router-link>
</template>

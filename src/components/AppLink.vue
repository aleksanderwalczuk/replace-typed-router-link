<template>
<BaseRouterLink v-slot="{ href, navigate }" v-bind="props" custom>
  <a
    target="_top"
    v-bind="$attrs"
    :href="processHref(href)"
    @click="navigate"
  >
    <slot />
  </a>
</BaseRouterLink>
</template>

<script setup lang="ts">
import { RouterLinkProps } from "vue-router";
import { RouterLink as BaseRouterLink } from "vue-router/auto";
import type { RouteNamedMap } from "vue-router/auto/routes";

const props = defineProps<
RouterLinkProps & { to: RouteNamedMap[keyof RouteNamedMap]["path"] }
>();

function processHref(href: string) {
if (import.meta.env.SSR) {
  return href;
}

return `https://example.com/${href.replace(/^\//, "")}`;
}
</script>

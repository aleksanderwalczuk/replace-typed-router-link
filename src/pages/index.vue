<template>
  <h1>Main Page</h1>
  <router-link to="/nested"> go to nested page</router-link>
</template>
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

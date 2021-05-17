<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'project-list' }">Projects</router-link> |
      <router-link :to="{ name: 'project-details', params: { project_id: 1 } }">
        Details
      </router-link>
      |
      <router-link :to="{ name: 'project-create' }">Create</router-link>
    </div>
    <router-view />
  </div>
</template>

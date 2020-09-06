<template>
  <router-view></router-view>
</template>

<script>
import AuthComponent from './components/auth/AuthComponent.vue';
export default {
  name: 'App',
  components: {
    AuthComponent
  }
}
</script>

<template>
  <div>
    <div class="container">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>
<script>
import {RouterView} from "vue-router"
import {Navbar} from '@/components'
export default {
  components: {
    Navbar,
  }
}
</script>
<style>
  
</style>
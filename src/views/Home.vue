<template>
<!--  <LayoutA>-->
    <div class='home'>
      <router-link to='/about'>About</router-link>
      <img alt='Vue logo' src='../assets/logo.png' />
      <HelloWorld msg='Welcome to Your Vue.js App' />
    </div>
  <!--  </LayoutA>-->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import LayoutA from '@/layouts/LayoutA'

export default {
  name: 'Home',
  components: {
    // LayoutA,
    HelloWorld
  },
  created() {
    // this.$emit('update:layout', LayoutA)
  }
}
</script>

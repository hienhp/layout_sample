<template>
  <div id='app'>
    <component :is="$route.meta.layout || 'div'">
      <template v-for='slot in $route.meta.slots' v-slot:[slot.name]>
        <component :is='slot.component' :key='slot.name'></component>
      </template>
      <!--      <router-view :layout.sync='layout' />-->
      <router-view />
    </component>
  </div>
</template>
<script>
export default {
  name: 'App'
  // data() {
  //   return {
  //     layout: 'div'
  //   }
  // }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div class='sidenav'>
    <router-link to='/'>Home</router-link>
    <router-link to='/about'>About</router-link>
    <router-link to='/contact'>Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppSideBar'
}
</script>
<style>

.sidenav {
  height: 100%;
  /*width: 200px;*/
  /*position: fixed;*/
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
}

.sidenav a {
  color: white;
  padding: 16px;
  text-decoration: none;
  display: block;
}
</style>

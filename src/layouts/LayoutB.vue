<template>
  <div class='layout-b'>
    <header>
      <slot name='header'>Header</slot>
    </header>
    <aside>
      <AppSideBar></AppSideBar>
    </aside>
    <main>
      Layout B
      <slot></slot>
    </main>
    <footer>
      <slot name='footer'>This is footer</slot>
    </footer>
  </div>
</template>

<script>
import AppSideBar from '@/components/AppSideBar'

export default {
  name: 'LayoutB',
  components: { AppSideBar }
}
</script>

<style scoped>
.layout-b {
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 10vw 40vw 10vw;
  grid-gap: 1em;
}

header,
footer {
  grid-column: 1 / span 2;
}

header,
main,
footer {
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}

header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}


</style>

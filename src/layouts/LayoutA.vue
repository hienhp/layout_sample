<template>
  <div class='layout-a'>
    <header>
      <slot name='header'>Header</slot>
    </header>
    <main>
      Layout A
      <slot></slot>
    </main>
    <aside>
      <slot name='sidebar'>
        <AppSideBar></AppSideBar>
      </slot>
    </aside>
    <footer>
      <slot name='footer'>This is footer</slot>
    </footer>
  </div>
</template>

<script>
import AppSideBar from '@/components/AppSideBar'

export default {
  name: 'LayoutA',
  components: { AppSideBar }
}
</script>

<style scoped>
.layout-a {
  display: grid;
  grid-template-columns: 75% 25%;
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

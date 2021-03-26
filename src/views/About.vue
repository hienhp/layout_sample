<template>
<!--  <LayoutB>-->
    <div class='about'>
      <h1>This is an about page</h1>
      <h2>{{ msg }}</h2>
    </div>
  <!--  </LayoutB>-->
</template>

<script>
import LayoutB from '@/layouts/LayoutB.vue'

export default {
  name: 'About',
  // components: { LayoutB },
  data() {
    return {
      msg: ''
    }
  },
  created() {
    this.$emit('update:layout', LayoutB)

    setTimeout(() => {
      this.msg = 'hello from about'
    }, 2000)
  }
}
</script>

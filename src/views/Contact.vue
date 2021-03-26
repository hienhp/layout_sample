<template>
  <LayoutB>
    <h1>Hello from contact</h1>
  </LayoutB>
</template>

<script>
import LayoutB from '@/layouts/LayoutB.vue'

export default {
  name: 'Contact',
  components: { LayoutB },
  created() {
    console.log('abc')
  }
}
</script>

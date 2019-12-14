<template>
  <div>
    <router-view/>
     <Index/>
  </div>
</template>
<script>
import Index from '@/views/Index.vue'
export default {
  components:{
     Index
  }
}
</script>
<style lang="less">

</style>

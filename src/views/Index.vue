<template>
   <div>
    <HeadNav/>
    {{userInfo.nickname}}
  </div>
</template>

<script>
// @ is an alias to /src
 import {mapState} from 'vuex'
 import HeadNav from '@/components/HeadNav.vue'
  export default {
    computed: {
      ...mapState(['userInfo'])
    },
    components: {
      HeadNav
    },
  }
</script>
<style lang="less" scoped>

</style>

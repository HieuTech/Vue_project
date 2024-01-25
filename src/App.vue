<template>
  <the-header>
    
  </the-header>

  <router-view/>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from "@/components/TheFooter.vue";

export default{
  components:{
  TheHeader,
  TheFooter
},
}
</script>

<style lang="scss">

</style>

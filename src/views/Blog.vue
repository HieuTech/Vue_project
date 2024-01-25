<template>
  <div id="wrapper">
    <!-- Titlebar
================================================== -->
          <TheBlogTitleBar></TheBlogTitleBar>


    <!-- Content
================================================== -->
        <TheBlogContent></TheBlogContent>
  </div>
</template>

<script>
import TheBlogTitleBar from '@/components/TheBlogTitleBar.vue';
import TheBlogContent from "@/components/TheBlogContent.vue"
export default {
    components:{
        TheBlogTitleBar,
        TheBlogContent,
    }

};
</script>

<style></style>

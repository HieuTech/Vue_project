<template>
  <div id="wrapper">

<!-- Header Container
================================================== -->

<!-- Header Container / End -->


<!-- Banner
================================================== -->
<TheBanner></TheBanner>

<!-- Content
================================================== -->
<TheCategory></TheCategory>
<!-- Category Boxes / End -->




<!-- Fullwidth Section -->
<ThePlaces></ThePlaces>
<!-- Fullwidth Section / End -->

<TheReviews></TheReviews>



<!-- Info Section -->
<ThePlan></ThePlan>
<!-- Info Section / End -->


<!-- Recent Blog Posts -->
<TheBlog></TheBlog>
<!-- Recent Blog Posts / End -->


<!-- Footer
================================================== -->

<!-- Footer / End -->


<!-- Back To Top Button -->


</div>
</template>

<script>
// @ is an alias to /src

import TheBanner from '@/components/TheBanner.vue';
import TheCategory from '@/components/TheCategories.vue';
import ThePlaces  
from '@/components/ThePlaces.vue';
import TheReviews from '@/components/TheReviews.vue';
import ThePlan from "@/components/ThePlan.vue";
import TheBlog from "@/components/TheBlog.vue";
export default {
  name: 'HomeView',
  components: {
    TheBanner,
    TheCategory,
    ThePlaces,
    TheReviews,
    ThePlan,
    TheBlog,

  }
}
</script>

<template>
  <div class="main-search-container centered" data-background-image="images/main-search-background-01.jpg">
	<div class="main-search-inner">

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2>
						Find Nearby 
						<!-- Typed words can be configured in script settings at the bottom of this HTML file -->
						<span class="typed-words"></span>
					</h2>
					<h4>Expolore top-rated attractions, activities and more</h4>
                    <TheMainSearchInput></TheMainSearchInput>
					
				</div>
			</div>
			
			<!-- Features Categories -->
			
			<!-- Featured Categories - End -->

		</div>

	</div>
</div>

</template>

<script>
import TheMainSearchInput from './TheMainSearchInput.vue';
export default {
    components:{
        TheMainSearchInput,
    }
}

</script>

<style>
</style>

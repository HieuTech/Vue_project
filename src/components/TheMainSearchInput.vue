<template>
  <div class="main-search-input">


    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input id="autocomplete-input"  type="text" placeholder="Location"
        v-model="keyword"
        />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
      <ul v-if="locationList.length >0 && keyword " class="list-location" >
          
        <li v-for="(location, index) in locationList" :key="index">
            <span class="im im-icon-Location-2"></span>
            {{ console.log(location.name)
             }}
            <span class="location-item-title">{{ location.name }}</span>
        </li>
          <li>
            <span class="im im-icon-Location-2"></span>
         
            <span class="location-item-title">{{ locationList }}</span>
        </li>
     
      </ul>
    </div>

    

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>


<script>
import { computed,ref,watch } from "vue";
import { useStore } from "vuex";
export default {
    setup(){
        const store = useStore();
        const keyword = ref("")

        watch(keyword,(newValue)=>{
            store.dispatch("/location/getLocationListAction",newValue)
            console.log(keyword, "new Value" , newValue);
        })

       
        // store.dispatch('location/getLocationListAction')

       const locationList = computed(()=>{
        return store.state.location.locationList
       })
       console.log(locationList);
       return{
        locationList,
        keyword
       }
    },
    //computed cập nhật lại dữ liệu và tính toán
   



};
</script>

<style lang="scss">
.main-search-input-item{
    position: relative;
}
.list-location{
    position: absolute;
    top:150%;
    list-style: none;
    background-color: #f3f1f1;
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    li{
        margin: 5px 10px;
        &:hover{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            background-color: #f7f7f7;
            cursor: pointer;
        }
    }
}
</style>

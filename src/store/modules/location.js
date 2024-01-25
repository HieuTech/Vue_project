import { getLocationList } from "@/apis/location.js"


const state = ()=>{
    return{
        locationList: [],
    }
}

const mutations = {
    setLocationMutation(state,payload){
        state.locationList = payload
    }
}

const actions = {
    async getLocationListAction(context){
        //truyen keyword vào api để gọi
       const data =  await getLocationList();
       console.log(data);
       context.commit("setLocationMutation", data);
    }
}

export  default {
    namespaced: true,
    state,
    mutations,
    actions
}

import axiosAPI from ".";
export const getLocationList = async (nameLocation) => {
   return axiosAPI.get(`/api/locations?location=${nameLocation}`);
  
};

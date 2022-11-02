const SET_MAP = "SET-MAP";
const CHANGE_REGION_DATA = "CHANGE-REGION-DATA";
const REMOVE_REGION_DATA = "REMOVE-REGION-DATA";

let initialState = {
  data: {
    title: "",
    area: "",
    population: "",
    capital: "",
    image: "",
  },
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP:
      return {
        ...state,
      };
    case CHANGE_REGION_DATA:
      return {
        ...state,
        data: {
          title: action.data.title,
          area: action.data.area,
          population: action.data.population,
          capital: action.data.capital,
          image: action.data.image,
        },
      };
    case REMOVE_REGION_DATA:
      return {
        ...state,
        data: {},
      };
    default:
      return state;
  }
};

export let setMap = () => ({ type: SET_MAP });
export let changeRegionData = (data) => ({
  type: CHANGE_REGION_DATA,
  data: data,
});
export let removeRegionData = () => ({ type: REMOVE_REGION_DATA });
export default mapReducer;

const INITIAL_STATE = {
  item: [],
};

const servicesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_SERVICES":
      return { ...state, items: action.services };
    default:
      return state;
  }
};

export default servicesReducer;

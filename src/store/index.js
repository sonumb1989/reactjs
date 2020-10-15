import { createStore, combineReducers } from "redux";
import servicesReducer from 'reducers'
//action | action creators
//dispatch
//reducers
//connect

const addLoggerToDispatch = store => {
  const dispatch = store.dispatch
  return (action) => {
    console.group(action.type)
    console.log('prev state', store.getState())
    console.log('action', action)

    const returnValue = dispatch(action)
    console.log('next state', store.getState)
    console.groupEnd(action.type)
    return returnValue
  }
}

const initStore = () => {
  const servicesApp = combineReducers({
    service: servicesReducer
  });

  const browserSupport =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(servicesApp, browserSupport);
  store.dispatch = addLoggerToDispatch(store)

  return store;
};

export default initStore;

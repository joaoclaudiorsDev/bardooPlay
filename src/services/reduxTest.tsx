import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => state;

const store = createStore(reducer);

const action = {
    type: 'INCREMENT_COUNTER'
};

store.dispatch(action);

store.subscribe(() => {
    store.getState();
})
import store from './store';
import {bugAdded, bugResolved} from './actions';

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 4"));
store.dispatch(bugResolved(2));



console.log(store.getState());




// subscribe to store - code executes everytime state of the store changes
// const unsubscribe = store.subscribe(() => {
//     console.log("Store has changed!");
//     console.log(store.getState());
// })

// store.dispatch({
//     type: "bugAdded",
//     payload: {
//         description: "Bug1"
//     }
// })

// unsubscribe();

// store.dispatch({
//     type: "bugRemoved",
//     payload: {
//         id: 1,
//     }
// })

// store.dispatch({
//     type: "bugAdded",
//     payload: {
//         description: "Bug2"
//     }
// })

// console.log(store.getState());
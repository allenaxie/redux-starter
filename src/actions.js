import * as actionTypes from './actionTypes';

export const bugAdded = description => ({
    type: actionTypes.BUG_ADDED,
    payload: {
        description
    }
})

export const bugResolved = id => ({
    type: actionTypes.BUG_RESOLVED,
    payload: {
        id
    }
})

// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug1"
//         }
//     }
// }
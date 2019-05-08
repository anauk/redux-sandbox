import {createStore} from 'redux';
const reducer =(state=0, action)=>{

    switch(action.type){
        case 'INC': return state+1;
        default: return state;
    }
};
const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState(), 'subscribe');
})
console.log(store.getState(),'console1');
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
console.log(store.getState(),'console2');

/* 1-case
const initialState = 0;
const reducer = (state, action) =>{
    if(action.type ==='INC'){
        return state+1;
    }
    return 0;
};
let state = reducer(initialState,{type:'INC'});
console.log(state);
state=reducer(state, {type:'INC'});
console.log(state);
state=reducer(state, {type:'INC'});
console.log(state);*/
/*2-case
const initialState = 0;
const reducer =(state=0, action)=>{

    switch(action.type){
        case 'INC': return state+1;
        default: return state;
    }
};
let state = reducer(initialState, {type:'INC'});
console.log(state);
state = reducer(state, {ype:'INC'});
console.log(state);*/

//3-case- когда нет state и не знаем каое действие
const reducer =(state=0, action)=>{

    switch(action.type){
        case 'INC': return state+1;
        default: return state;
    }
};
let state = reducer(undefined, {});
state = reducer(state, {type:'INC'});
console.log(state);
state = reducer(state, {ype:'INC'});
console.log(state);
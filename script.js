
// const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buyCake () {
    return {
        type: BUY_CAKE,
        info : 'this is a cake'
    }
}

const initState = {
    numOfCake : 10 ,
}

const reducer = (state = initState , action) =>{
    console.log(action)
    switch(action.type){
        case BUY_CAKE : return {
            ...noOfCake , numOfCake : state.numOfCake - 1
        } 
    }
}

const store = createStore(reducer)

store.dispatch(buyCake())

console.log("radhikanarayana")
import {createStore} from 'redux';

const initialValue={
    count:0
}
function appReducer(prevState=initialValue,action){
    switch (action.type) {
        case 'increment':
            
            return {
                ...prevState,
                count:prevState.count+1
            }
            case 'decrement':
            
            return {
                ...prevState,
                count:prevState.count-1
            }
    
        default:
            return prevState
    }
}

const store= createStore(appReducer)

export default store
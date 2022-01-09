const defaultState={
    loading:false,
    data:[]
}

const DataListReducer=(state=defaultState,action)=>{
    switch(action.type){
         case "DATA_LIST_LOADING":
             return {
                 ...state,loading:true,
                 errorMsg:""
             }
        case "DATA_LOADING_SUCCESS":
            return {
                ...state,
                loading:false,
                data:action.payload,
                errorMsg:""
            }
        case "DATA_LIST_LOADING_FAIL":
            return {
                ...state,
                loading:true,
                errMsg:"unable to get data"
            }
         default:
            return state
    }
}

export default DataListReducer
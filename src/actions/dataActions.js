import axios from "axios"

export const GetDataList = (page,data)=>async dispatch =>{
    try{
        dispatch({
            type:"DATA_LIST_LOADING",
        })
        const res = await axios.get(`https://www.anapioficeandfire.com/api/${data}?page=${page}&pageSize=9`);
        dispatch({
            type:"DATA_LOADING_SUCCESS",
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:"DATA_LIST_LOADING_FAIL"
        })
    }
}

export const GetData = (data,id)=> async dispatch =>{
    try{
        dispatch({
            type:"DATA_LIST_LOADING",
        })
        const res = await axios.get(`https://www.anapioficeandfire.com/api/${data}/${id}`);
        dispatch({
            type:"DATA_LOADING_SUCCESS",
            payload:res.data
        })
    }catch(err){

    }
}
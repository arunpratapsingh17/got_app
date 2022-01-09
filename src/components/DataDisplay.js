import React, { useEffect } from 'react'
import './DataDisplay.css'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash"
import { GetData } from '../actions/dataActions';
import BookComponent from '../DataDIsplayComponents/BookComponent';
import CharacterComponent from '../DataDIsplayComponents/CharacterComponent';
import HouseComponent from '../DataDIsplayComponents/HouseComponent';
const DataDisplay = () => {
    const {dataList,dataID} = useParams()
    // console.log(dataList,dataID);
    const dispatch = useDispatch();
    const datas = useSelector(state => state.DataList)
    const fetchdata=()=>{
        dispatch(GetData(dataList,dataID))
    }
    useEffect(()=>{
        fetchdata()
    },[])
    const showData = ()=>{
        if(!_.isEmpty(datas.data)){
            // console.log(datas.data);
            
        }
        if(datas.loading){
            return <p>Loading ...</p>
        }
        if(datas.errorMsg !== ""){
            return <p>{datas.errorMsg}</p>
        }
    }
    return (
        <div className='DataDisplay'>
            {showData()}
            {datas.data&&dataList=='books'? <BookComponent data={datas.data}/>:datas.data&&dataList=='characters'? <CharacterComponent data={datas.data}/>:datas.data&&dataList=='houses'? <HouseComponent data={datas.data} />:null}
        </div>
    )
}

export default DataDisplay

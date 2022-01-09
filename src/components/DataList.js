import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from "lodash"
import { GetDataList } from '../actions/dataActions';
import { useParams } from 'react-router-dom';
import DataListMenu from './DataListMenu';
import './DataList.css'
const DataList = () => {
    let { dataList } = useParams();
    const dispatch = useDispatch();
    const datas = useSelector(state => state.DataList)
    const fetchdata=()=>{
        dispatch(GetDataList(1,dataList))
    }
    useEffect(()=>{
        fetchdata()
    },[dataList])
    const showData = ()=>{
        
        if(datas.loading){
            return <p>Loading ...</p>
        }
        if(datas.errorMsg !== ""){
            return <p>{datas.errorMsg}</p>
        }
    }
    return (
        <div className='DataList'>
            {showData()}
            <DataListMenu datas={datas.data}/>
        </div>
    )
}

export default DataList

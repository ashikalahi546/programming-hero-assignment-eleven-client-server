import React, { useContext, useEffect, useState } from 'react';
import Assignment from './Assignment';
import axios from 'axios';
const Assignments = () => {
    const [allData,setData] = useState([])

    useEffect(()=>{
        (async()=>{
            const res = await axios.get(`${import.meta.env.VITE_APP_URL}/create`)
            const data = res.data
            setData(data)
        })()
        // fetchData()
    },[])
    // const fetchData =()=>{
    //     fetch(`${import.meta.env.VITE_APP_URL}/create`)
    //     .then(res=>res.json())
    //     .then(data=> setData(data))
    // }

    return (
        <div className='grid xl:grid-cols-2  xl:w-9/12 lg:w-10/12 mx-auto lg:px-0 px-5 gap-5'>
            {
                allData.map((assignment,id)=><Assignment assignment={assignment} key={id}></Assignment>)
            }
        </div>
    );
};

export default Assignments;
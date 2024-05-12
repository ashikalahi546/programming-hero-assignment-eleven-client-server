import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Assignment from './Assignment';

const Assignments = () => {
    const [allData,setData] = useState([])

    useEffect(()=>{
        fetch('public/fakeData.json')
        .then(res=>res.json())
        .then(data=> setData(data))
    })
    return (
        <div>
            {
                allData.map((assignment,id)=><Assignment assignment={assignment} key={id}></Assignment>)
            }
        </div>
    );
};

export default Assignments;
import React, { useContext, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Assignment from './Assignment';
// import { AuthContext } from '../auth/AuthProvider';

const Assignments = () => {
    // const {user} = useContext(AuthContext)
    const [allData,setData] = useState([])
//       // const [travelars, setTravelars] = useState([]);
//   const assignments = allData?.filter(
//     (ass) => ass?.email == user?.email
//   );

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_APP_URL}/create`)
        .then(res=>res.json())
        .then(data=> setData(data))
    })
    return (
        <div className='grid xl:grid-cols-2  xl:w-9/12 lg:w-10/12 mx-auto lg:px-0 px-5 gap-5'>
            {
                allData.map((assignment,id)=><Assignment assignment={assignment} key={id}></Assignment>)
            }
        </div>
    );
};

export default Assignments;
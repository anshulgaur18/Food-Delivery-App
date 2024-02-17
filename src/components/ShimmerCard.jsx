import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "../App.css";


const ShimmerCard = ()=>{
    return(
        <div className="w-64 mx-14 my-4 shadow-lg bg-gray-100">
        <img src="https://img.freepik.com/premium-photo/plaster-background-stucco-wall_75922-243.jpg" alt="grey" />
        <h3><Skeleton/></h3>
        <h3><Skeleton/></h3>
        <h3><Skeleton/></h3>
 
 
        </div>
       
    )
}

export default ShimmerCard;
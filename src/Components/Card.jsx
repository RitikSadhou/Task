import React, { useEffect, useState } from 'react'
import TitleCard from './TitleCard';
const Card = () => {
    const [data, setData]=useState([]);
 useEffect(()=>{
    
    fetch('https://child.onrender.com/api/sciencefiction')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setData(data);
        
    });
    
    
},[])




  return (
    <>
       <div className='img-container'>
        <div className='image'>{

            data && data.map((item, i)=>{

                <img key={i} src={item.Image} alt="" width={200} height={200} style={{marginLeft:50 , marginTop:10}} /> 
                
            })
        }
        
        
        </div>

        <div className='content'>
            
        {data && data.map((item, index) => (
                    <TitleCard key={index} title={item.Title} />
                ))}
        </div>
        <div className='btn'></div>
         <button>New</button>
       </div>
     
    </>
  )
}

export default Card
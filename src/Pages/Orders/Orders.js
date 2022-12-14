import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    
    const {user} = useContext(AuthContext);
    const [order,setOrder] =useState({})

    
       useEffect(()=>{
       fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
   },[user?.email])
   return (

       <div>
         <h2>You have{order.length}order</h2>
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
           <label>
             <input type="checkbox" className="checkbox" />
           </label>
        </th>
       <th>Name</th>
        <th>Job</th>
       <th>Favorite Color</th>
        <th></th>
      </tr>
     </thead>
     <tbody>
        {/* {
            order.map(order=><OrderRow
           key ={order._id}
            order= {order}
            ></OrderRow>)
     } */}
    
     </tbody>
    
   </table>
        </div> 
            
         </div>
     );
};

export default Orders;
// Table.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../restaurant.css';

const DiningTableButton = ({ name, imageUrl, dinning_id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/orders'); // Navigate to the /orders page with dinning_id as a parameter
    //navigate('/orders')
  };

  return (
    <button className="dining-table-button" onClick={handleClick}>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
    </button>
  );
};

function Table() {
  return (
    <div className="Upp">
      <h1>Dining Tables</h1>
      <div className="dining-tables">
        <DiningTableButton name="Table 1" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={101}/>
        <DiningTableButton name="Table 2" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={102} />
        <DiningTableButton name="Table 3" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={103}/>
      </div>
    </div>
  );
}

export default Table;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getBill } from '../services/bill'; // Import the function you defined

// function Table() {
//   const [billData, setBillData] = useState(null);

//   useEffect(() => {
//     const fetchBillData = async () => {
//       try {
//         const response = await getBill(/* Pass parameters here */);
//         setBillData(response.data);
//       } catch (error) {
//         console.error('Error fetching bill data:', error);
//         // Redirect to an error page or handle error appropriately
//       }
//     };

//     fetchBillData();
//   }, []);

  
//     return (
//       <div>
//         {billData ? (
//           <div>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Bill ID</th>
//                   <th>Customer ID</th>
//                   <th>Dinning ID</th>
//                   <th>Total Bill</th>
//                   <th>Bill Status</th>
//                   <th>Bill Date Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{billData.bill_id}</td>
//                   <td>{billData.customer_id}</td>
//                   <td>{billData.dinning_id}</td>
//                   <td>{billData.total_bill}</td>
//                   <td>{billData.bill_status}</td>
//                   <td>{billData.bill_datetime}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p>Loading bill data...</p>
//         )}
//         <Link to="/table">Go back to tables</Link>
//       </div>
//     );
//   }

// export default Table;

// // import React from 'react';
// // import '../restaurant.css';
// // import DiningTableButton from './Dinningtable';

// // function Table() {
// //   return (
// //     <div className="Upp">
// //       <h1>Dining Tables</h1>
// //       <div className="dining-tables">
// //         <DiningTableButton name="Table 1" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={101}/>
// //         <DiningTableButton name="Table 2" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={102} />
// //         <DiningTableButton name="Table 3" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={103}/>
        
// //       </div>
      
// //     </div>
// //   );
// // }

// // export default Table;
// // Tables.js
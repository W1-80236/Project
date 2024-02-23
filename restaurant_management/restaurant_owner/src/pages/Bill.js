// Bill.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBill } from '../services/bill'; // Import the function to fetch bill data

function Bill() {
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    const fetchBillData = async () => {
      try {
        // Fetch bill data using the getBill function
        const response = await getBill();
        console.log("get bill:::::"+response)
        setBillData(response);
      } catch (error) {
        console.error('Error fetching bill data:', error);
      }
    };

    fetchBillData();
  }, []);

  return (
    
    <div>
    {billData ? (
      <div>
        <p><strong>Bill ID:</strong> {billData.bill_id}</p>
        <p><strong>Customer ID:</strong> {billData.customer_id}</p>
        <p><strong>Dinning ID:</strong> {billData.dinning_id}</p>
        <p><strong>Total Bill:</strong> {billData.total_bill}</p>
        <p><strong>Bill Status:</strong> {billData.bill_status}</p>
        <p><strong>Bill Date Time:</strong> {billData.bill_datetime}</p>
      </div>
    ) : (
      <p>Loading bill data...</p>
    )}
    <Link to="/table">Go back to tables</Link>
  </div>
  
      );
    }

export default Bill;


// import React, { useState } from 'react';
// import '../restaurant.css';
// import DiningTableButton from './DiningTableButton';
// import Table from './Table'; // Assuming this is where you want to display the bill data
// //import { useNavigate } from 'react-router-dom';

// function Bill() {
//   const [showBill, setShowBill] = useState(false); // State to control whether to show the bill data

//   // Function to handle click on DiningTableButton
//   const handleDiningTableButtonClick = () => {
//     // Set showBill state to true to display the bill data
//     alert("Bill Displayed")
    
//     setShowBill(true);
//   };

//   return (
//     <div className="App">
//       {/* Render the dining tables */}
//       {!showBill ? (
//         <div className="Upp">
//           <h1>Dining Tables</h1>
//           <div className="dining-tables">
//             <DiningTableButton name="Table 1" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={101} onClick={handleDiningTableButtonClick} />
//             <DiningTableButton name="Table 2" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={102} onClick={handleDiningTableButtonClick} />
//             <DiningTableButton name="Table 3" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={103} onClick={handleDiningTableButtonClick} />
//           </div>
//         </div>
//       ) : (
//         // Render the bill data
//         <Table />
//       )}
//     </div>
//   );
// }

// export default Bill;

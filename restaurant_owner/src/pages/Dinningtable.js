// // DiningTableButton.js
// import React from 'react';

// const DiningTableButton = ({ name, imageUrl }) => {
//   const handleClick = () => {
//     alert("Bill displayed")
//  }


//   return (
//     <button className="dining-table-button" onClick={handleClick}>
//       <img src={imageUrl} alt={name} />
      
    
//       <span>{name}</span>
//     </button>
//   );
// };

// export default DiningTableButton;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DiningTableButton = ({ name, imageUrl,}) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    alert("Bill displayed")
    try {
      // Fetch data from the server for the specific tableId
      const response = await fetch(`/order_tb/get?dinning_id=1`);
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      //const ordersData = await response.json();

      // Navigate to the '/orders' page with ordersData as state
      navigate('/orders');
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <button className="dining-table-button" onClick={handleClick}>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
    </button>
  );
};


export default DiningTableButton


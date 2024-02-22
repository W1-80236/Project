import React from 'react';
import './Table3.css'; // Import your CSS file for styling

const Table3 = () => {
  // Sample data for the table
  const tableData = [
    { customerId: '001', customerName: 'John Doe', orderDate: '2024-02-20', orderTime: '12:30 PM', status: 'Delivered', paymentMode: 'Credit Card' },
    // Add more rows as needed
  ];

  return (
    <div className="table3-container">
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Order Time</th>
            <th>Status</th>
            <th>Mode of Payment</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.customerId}</td>
              <td>{row.customerName}</td>
              <td>{row.orderDate}</td>
              <td>{row.orderTime}</td>
              <td>{row.status}</td>
              <td>{row.paymentMode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table3;

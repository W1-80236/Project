// App.js
import React from 'react';
import '../restaurant.css';
import DiningTableButton from './Dinningtable';

function Table() {
  return (
    <div className="Upp">
      <h1>Dining Tables</h1>
      <div className="dining-tables">
        <DiningTableButton name="Table 1" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={1}/>
        <DiningTableButton name="Table 2" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={2} />
        <DiningTableButton name="Table 3" imageUrl="https://www.shutterstock.com/shutterstock/photos/2312555707/display_1500/stock-vector-vector-dining-table-with-chairs-illustration-modern-furniture-round-dining-table-and-seats-2312555707.jpg" dinning_id={3}/>
        
      </div>
      
    </div>
  );
}

export default Table;

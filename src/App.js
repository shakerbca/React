import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


const App = () => {
    let expenses = [
        {
            id: 'e1',
            title: 'School Fee',
            amount: 250,
            date: new Date(2022, 8, 11)
        },
        {
            id: 'e2',
            title: 'Books',
            amount: 240,
            date: new Date(2022, 12, 10)
        },
        {
            id: 'e3',
            title: 'House Rent',
            amount: 11000,
            date: new Date(2022, 11, 7)
        },
        {
            id: 'e4',
            title: 'Food',
            amount: 1050,
            date: new Date(2022, 12, 1)
        }
    ];


    return (
       <div>
        <NewExpense />
        <Expenses item={expenses}/>
     
        </div>

        );
}


export default App;
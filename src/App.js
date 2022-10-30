import ExpenseItem from './components/ExpenseItem';

function App(){
    let expenses = [
        {
            id: 'e1',
            title: 'school Fee',
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
        <h2>Let's get started</h2>
        <ExpenseItem 
        date={ expenses[0].date }
        title={ expenses[0].title }
        amount={ expenses[0].amount }>
        </ExpenseItem>

        <ExpenseItem date={ expenses[1].date }
        title={ expenses[1].title }
        amount={ expenses[1].amount }>
        </ExpenseItem>

        <ExpenseItem date={ expenses[2].date }
        title={ expenses[2].title }
        amount={ expenses[2].amount }>
        </ExpenseItem>

        <ExpenseItem date={ expenses[3].date }
        title={ expenses[3].title }
        amount={ expenses[3].amount }>
        </ExpenseItem>
        </div>

        );
}


export default App;
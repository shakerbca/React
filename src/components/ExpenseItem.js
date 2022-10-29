import './ExpenseItem.css';

function ExpenseItem(){
    let title = "Car Insurence";
    return (
        <div className="expense-item">
            <div>March 29th 2022</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$200</div>
            </div>
        </div>

    );

}

export default ExpenseItem;
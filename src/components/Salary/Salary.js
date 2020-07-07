import React from "react";

function Salary (props) {
    const taxes = props.salary * 0.25;
    let afterTaxes = props.salary - taxes;
    document.title = Math.round(props.salary * 100) / 100 + " kr";
    return (
        <div>
            <h1>Before Taxes: {Math.round(props.salary * 100) / 100} kr</h1>
            <h1>After Taxes (25%): {Math.round(afterTaxes * 100) / 100} kr</h1>
        </div>
    )
}

export default Salary;
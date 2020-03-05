function billTotal(){
    const bill_total = document.getElementById("bill_total"); 
    const tip_percentage = document.getElementById("tip_percentage");
    const calculate_btn = document.getElementById("calculate_btn");
    const grand_total = document.getElementById("grand_total");

    bill_total1 = Number(bill_total.value);

    let tax = bill_total1 * 0.055;
    let taxed_Total = bill_total1 +tax;
    let tip_Amount = bill_total1 * tip_percentage.value/100;
    let end_Total = (taxed_Total + tip_Amount);

    grand_total.innerHTML = `Grand Total: $${end_Total}`;
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }
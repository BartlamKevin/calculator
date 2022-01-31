window.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues(){
  return {
    amount: +(document.getElementById("loan-amount").value), //
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues(){
  const defaults =  {amount: 10000, years: 10, rate: 2.5};
  const amountInput = document.getElementById("loan-amount"); //principle P
  const yearsInput = document.getElementById("loan-years");//total years n needs to be multiplied by 12
  const rateInput = document.getElementById("loan-rate"); //part of periodic interst rate i which needes to be divided by 100 then 12
  amountInput.value = defaults.amount;
  yearsInput.value = defaults.years;
  rateInput.value = defaults.rate;
} 

// Get the current values from the UI
// Update the monthly payment
function update(){
  const getInput = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(getInput));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values){
  const i = (values.rate/100)/12;
  const n = Math.floor(values.years * 12);
  const p = values.amount;
  return (
    (p*i)/(1 - Math.pow((1+ i), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly){
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
}

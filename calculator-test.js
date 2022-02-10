
it("should calculate the monthly rate correctly", function () {
  // ...
  const values ={
    amount: 9001,
    years: 7,
    rate:12
  };
  expect(calculateMonthlyPayment(values)).toEqual("158.89");
});


it("should return payment amount with two zeros", function() {
  // ..
  const values ={
    amount: 20099,
    years: 16,
    rate: 2.8
  };
  expect(calculateMonthlyPayment(values)).toEqual("130.00");
});

it("should return a payment amount with high interset and two zeros", function() {
  // ..
  const values ={
    amount: 1000,
    years: 1,
    rate: 100
  };
  expect(calculateMonthlyPayment(values)).toEqual("135.00");
});

/// etc

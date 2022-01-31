
it('should calculate the monthly rate correctly', function () {
  // ...
  const values ={
    amount: 9001,
    years: 7,
    rate:12
  };
  expect(calculateMonthlyPayment.(values).toEqual(158.89));
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values ={
    amount: 12000,
    years: 10,
    rate: 5.5
  };
  expect(calculateMonthlyPayment.(values).toEqual(130.23));
});

/// etc

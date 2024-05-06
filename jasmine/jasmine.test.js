it('should calculate the monthly rate correctly', function() {
    // ...
    const values = {
      amount: 10000,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('130.44');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });
  
  it("should handle very low amount of loan", function() {
    const values = {
      amount: 50,
      years: 3,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('82.50');
  });
  
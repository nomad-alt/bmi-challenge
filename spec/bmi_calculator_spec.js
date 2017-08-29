describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    person_imperial = new Person({weight_lbm: 160, height_feets: 5, height_inches: 10});
    calculator = new BMICalculator();
    calculator_imp = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator_imp.imperial_bmi(person_imperial);
    expect(person_imperial.bmiValue).toEqual(22.96);
  });
});

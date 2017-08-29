function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.weight_lbm = attr.weight_lbm;
  this.height_feets = attr.height_feets;
  this.height_inches = attr.height_inches;
}

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};

Person.prototype.calculate_imperial_bmi = function() {
  calculator_imp = new BMICalculator();
  calculator_imp.imperial_bmi(this);
};

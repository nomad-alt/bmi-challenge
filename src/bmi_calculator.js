function BMICalculator(){
}

BMICalculator.prototype.metric_bmi = function(obj) {
    var weight = obj.weight;
    var height = obj.height;
    if (weight > 0 && height > 0) {
      var finalBmi = weight / (height / 100 * height/ 100);
      obj.bmiValue = parseFloat(finalBmi.toFixed(2));
      setBMIMessage(obj);
    }
};

function setBMIMessage (obj){
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight";
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal";
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight";
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = "Obese";
  }
}

BMICalculator.prototype.imperial_bmi = function(obj) {
  var weight_lbm = obj.weight_lbm;
  var height_feets = obj.height_feets;
  var height_inches = obj.height_inches;
  if (weight_lbm > 0 && height_feets > 0 && height_inches > 0) {
    var finalBMI = (weight_lbm * 703) / (((height_feets * 12) + height_inches) * ((height_feets * 12) + height_inches));
    obj.bmiValue = parseFloat(finalBMI.toFixed(2));
    setBMIMessage(obj);
  }
};

function setBMIMessage (obj){
  if (obj.bmiValue > 18.5) {
    obj.bmiMessage = "Underweight";
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal";
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight";
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = "Obese";
  }
}

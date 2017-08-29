describe("Person", function() {
  var person;

    beforeEach(function() {
      person = new Person({weight: 90, height: 186});
      person_imperial = new Person({weight_lbm: 160, height_feets: 5, height_inches: 10});
    });

    it("should have weight of 90", function() {
      expect(person.weight).toEqual(90);
    });

    it("should have height of 186", function() {
      expect(person.height).toEqual(186);
    });

    it("should calculate metric BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01);
    });

    it("should have a BMI Message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight");
    });

    it("should have weight of 160 pounds", function() {
      expect(person_imperial.weight_lbm).toEqual(160);
    });

    it("should have height of 5 feets", function() {
      expect(person_imperial.height_feets).toEqual(5);
    });

    it("should have height of 10 inches", function() {
      expect(person_imperial.height_inches).toEqual(10);
    });

    it("should calculate imperial BMI value", function() {
    person_imperial.calculate_imperial_bmi();
    expect(person_imperial.bmiValue).toEqual(22.96);
    });

    it("should have a BMI Message", function() {
      person_imperial.calculate_imperial_bmi();
      expect(person_imperial.bmiMessage).toEqual("Normal");
    });
  });

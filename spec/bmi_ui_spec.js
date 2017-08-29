describe('BMI_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#weight').val('90');
        $('#height').val('186');
        $('#weight_lbm').val('160');
        $('height_feets').val('5');
        $('height_inches').val('10');
        $('#calculate').trigger('click');
        $('#calculate_i').trigger('click');
    });

    it("displays metric BMI Value", function() {
        expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
        expect($('#display_message').text()).toBe('and you are Overweight');
    });

    it("displays imperial BMI Value", function() {
      expect($('#display_value_i').text()).toBe('Your BMI is 22.96');
    });

    it("displays BMI Message", function() {
      expect($('#display_message_i').text()).toBe('and you are Normal');
    });
});

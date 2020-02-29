describe('price calculator', function(){
	
	it('should calc price right', function(){
		var userType = 1;
		var productType = 0;
		var price = 1;
		var publishedDate = new Date();

		var expected = 11;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right', function(){
		var userType = 0;
		var productType = 0;
		var price = 10;
		var publishedDate = new Date('2019-06-11');

		var expected = 35;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});
	it('should calc price right', function(){
		var userType = 1;
		var productType = 0;
		var price = 100;
		var publishedDate = new Date();

		var expected = 110;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

});
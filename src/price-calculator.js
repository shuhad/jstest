// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product
var calculatePrice = function (userType, productType, price, publishedDate) {
	const publishedTodayRebate = 10;
	const normalUserRebate = 0;
	const companyUserRebate = 5;
	const productTypeNew = 25;
	const productTypeOld = 35;
	const endDateDiscount = 0;
	try	{
		switch (userType) {
		case 0: // normal
			if (productType == 0) { // new product
				
				if (publishedDate.toDateString() == new Date().toDateString()) endDateDiscount = publishedTodayRebate;
				return price + productTypeNew - endDateDiscount;
			} else if (productType == 1) { // old product
				return price + productTypeOld - normalUserRebate;
			}
			break;
		case 1: // company
			if (productType == 0) { // new product
				if (publishedDate.toDateString() === new Date().toDateString()) {
						return price + productTypeNew - (publishedTodayRebate + companyUserRebate);// Enddate discount and company discount
				}

				return price + productTypeNew - companyUserRebate;// Only company discount
			} else if (productType == 1) { // old product
				return price + productTypeOld - companyUserRebate;
			}
			break;
		}
	}	catch (ex)	{
			console.log(ex);
	}
	return 0;
}
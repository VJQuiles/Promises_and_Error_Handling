"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiSimulator_1 = require("./apiSimulator");
const customErrors_1 = require("./customErrors");
function fetchProductDetails() {
    return Promise.all([
        (0, apiSimulator_1.fetchProductCatalog)(),
        (0, apiSimulator_1.fetchProductReviews)(2),
        (0, apiSimulator_1.fetchSalesReport)()
    ])
        .then(([productCatalog, productReviews, salesReport]) => {
        console.log(productCatalog);
        console.log(productReviews);
        console.log(salesReport);
    })
        .catch((error) => {
        if (error instanceof customErrors_1.NetworkError) {
            console.error("Network Error:", error.message);
        }
        else if (error instanceof customErrors_1.DataError) {
            console.error("Data Error", error.message);
        }
    })
        .finally(() => console.log('All API calls have been attempted'));
}
fetchProductDetails();

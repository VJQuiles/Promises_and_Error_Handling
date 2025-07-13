import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";
import { NetworkError, DataError } from "./customErrors";

function fetchProductDetails() {
    return Promise.all([
        fetchProductCatalog(),
        fetchProductReviews(2),
        fetchSalesReport()
    ])
        .then(([productCatalog, productReviews, salesReport]) => {
            console.log(productCatalog)
            console.log(productReviews)
            console.log(salesReport)
        })
        .catch((error) => {
            if (error instanceof NetworkError) {
                console.error("Network Error:", error.message)
            }
            else if (error instanceof DataError) {
                console.error("Data Error", error.message)
            }
        })
        .finally(() => console.log('All API calls have been attempted'))
}

fetchProductDetails()
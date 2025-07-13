import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";

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
        .catch((error) => console.error("Error:", error))
        .finally(() => console.log('All API calls have been attempted'))
}

fetchProductDetails()
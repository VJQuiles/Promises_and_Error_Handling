export const fetchProductCatalog = (productId: number): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ])
            }
            else {
                reject(`failed to fetch product catalog for Product ID ${productId}`)
            }
        }, 1000)
    })
}

export const fetchProductReviews = (productId: number): Promise<{ id: number, name: string, review: string }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9 || Math.random() > 0.5) {
                resolve([
                    { id: 1, name: "Laptop", review: "This is a review of the laptop." },
                    { id: 2, name: "Headphones", review: "This is a review of the headphones." }
                ])
            }
            else {
                reject(`failed to fetch reviews for Product ID ${productId}`)
            }
        }, 1500)
    })
}

export const fetchSalesReport = (productId: number): Promise<{ id: number, name: string, salesReport: string }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve([
                    { id: 1, name: "Laptop", salesReport: "This is a sales for the laptop" },
                    { id: 2, name: "Headphones", salesReport: "This is a sales report for the headphones" }
                ])
            }
            else {
                reject(`failed to fetch sales report for Product Id ${productId}`)
            }
        })
    })
}
class NetworkError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "NetworkError"
    }
}

function validateNetwork() {
    if (Math.random() < 0.5) {
        throw new NetworkError("There is a network error")
    }
}

class DataError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "DataError"
    }
}

function validateData() {
    if (Math.random() < 0.5) {
        throw new DataError("There is a data error")
    }
}
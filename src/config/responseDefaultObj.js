class baseReponseModule {
    constructor(message, isSuccess, status) {
        this.message = message;
        this.isSuccess = isSuccess;
        this.status = status;
    }

    toJSON() {
        return {
            message: this.message,
            isSuccess: this.isSuccess,
            status: this.status,
        };
    }
}


// const response = new baseReponseModule('Hello, world!', true, 200);
// console.log(response.toJSON()); // { message: 'Hello, world!', isSuccess: true, status: 200 }

export default baseReponseModule;
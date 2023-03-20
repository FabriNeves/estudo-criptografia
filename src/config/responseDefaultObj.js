class baseReponseModule {
    constructor(message, isSuccess, status,auth) {
        this.message = message;
        this.isSuccess = isSuccess;
        this.status = status;
        this.auth = auth;
    }

    toJSON() {
        return {
            message: this.message,
            isSuccess: this.isSuccess,
            status: this.status,
            auth: this.auth,
        };
    }
}


// const response = new baseReponseModule('Hello, world!', true, 200);
// console.log(response.toJSON()); // { message: 'Hello, world!', isSuccess: true, status: 200 }

export default baseReponseModule;
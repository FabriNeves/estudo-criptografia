

class methodsHTTP {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(newUrl) {
        const url = newUrl || this.baseURL ;
        try {
            const response = await fetch(url);
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async post(item,newUrl) {
        const url = newUrl || this.baseURL ;
        console.log(url);
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            });
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async put(id,item,newUrl) {
        const url = newUrl || this.baseURL ;
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            });
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async delete(id,newUrl) {
        const url = newUrl || this.baseURL ;
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "DELETE",
            });
            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

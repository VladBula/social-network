import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bfa7db01-d291-4b43-9a1d-5cdebab39351"
    }
});

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(baseUrl + `users?count=${pageSize}&page=${currentPage}`, {}).then(response => {
            return response.data
        })
    }
}


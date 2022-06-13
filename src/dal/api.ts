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
    getUsers( currentPage: number, pageSize: number) {
        return instance.get(baseUrl + `users?count=${pageSize}&page=${currentPage}`, {}).then(response => {
            return response.data
        })
    },
    follow(id:number){
        return instance.post(`follow/${id}`)
    },
    unfollow(id:number){
      return instance.delete(`follow/${id}`)
    },
}

export const profileAPI = {
    getProfile(userId:string | undefined){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId:string | undefined){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)

    },
    login(email:string, password:string, rememberMe:boolean = false){
        return instance.post(`auth/login`, {email, password, rememberMe})

    },
    logout(){
        return instance.delete(`auth/login`)

    }
}


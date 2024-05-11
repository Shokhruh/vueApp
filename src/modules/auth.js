import { setItem } from "@/helpers/persistanceStorage";
import AuthService from "@/services/auth"

const state = {
    isLoading: false,
    user: null,
    errors: null,
}

const mutations = {
    registerStart(state) {
        state.isLoading =  true,
        state.user = null,
        state.errors = null
    },
    registerSuccess(state, payload) { 
        state.isLoading =  false,
        // state.user = payload
        console.log("Success", payload);
    },
    registerFailure(state, payload) { 
        state.isLoading =  false,
        // state.errors = payload
        console.log("Error", payload);
    },
}

const actions = {
    register (context, user) {
        return new Promise((resolve, reject) => {
            context.commit("registerStart")
            AuthService.register(user).then(response => {
                context.commit("registerSuccess")
                setItem('token', response.data.user.token)
                resolve(response.data.user)
            }).catch(error => {
                context.commit("registerFailure")
                reject(error.response.data)
            })
        })
    },
}

export default {
    state,
    mutations,
    actions,
}
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
        state.user = payload
    },
    registerFailure(state, payload) { 
        state.isLoading =  false,
        state.errors = payload
    },
}

const actions = {
    register (context, user) {
        return new Promise((resolve, reject) => {
            context.commit("registerStart")
            AuthService.register(user).then(response => {
                // console.log("Success", response.data.user);
                context.commit("registerSuccess")
                resolve(response.data.user)
            }).catch(error => {
                // console.log("Error", error.response.data);
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
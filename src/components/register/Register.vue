<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

            <Input v-model="username" :label="'Name'" :type="'text'" :placeholder="'Name'" :id="'floatingInput1'" />

            <Input v-model="email" :label="'Email address'" :type="'email'" :placeholder="'Email address'" :id="'floatingInput2'" />
            
            <Input v-model="password" :label="'Password'" :type="'password'" :placeholder="'Password'" :id="'floatingPassword3'" />

            <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
        </form>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                email: '',
                password: '',
            }
        },
        computed: {
            isLoading() {
                return this.$store.state.auth.isLoading
            },
        },
        methods: {
            submitHandler(e) {
                e.preventDefault()
                const data = {
                    "username": this.username,
                    "email": this.email,
                    "password": this.password,
                }
                this.$store
                    .dispatch('register', data)
                    .then(user => { 
                        console.log(user),
                        this.$router.push({
                            path: '/',
                            name: 'home',
                            component: () => import('@/views/HomeView.vue'),
                        },)
                    })
                    .catch(error => { console.log("Error", error) })
            },
        },
    }
</script>

<style>
    
</style>
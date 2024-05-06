<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

            <Input :label="'Name'" :type="'text'" :placeholder="'Name'" :id="'floatingInput'" />

            <Input :label="'Email address'" :type="'email'" :placeholder="'Email address'" :id="'floatingInput'" />
            
            <Input :label="'Password'" :type="'password'" :placeholder="'Password'" :id="'floatingPassword'" />

            <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
        </form>
    </main>
</template>

<script>
    export default {
        computed: {
            isLoading() {
                return this.$store.state.auth.isLoading
            }
        },
        methods: {
            submitHandler(e) {
                e.preventDefault()
                const data = {
                    "username": "sasdsasa",
                    "email": "sakjadss@gmail.com",
                    "password": "1232sd3h3",
                }
                this.$store.dispatch('register', data)
            },
        }
    }
</script>

<style>
    
</style>
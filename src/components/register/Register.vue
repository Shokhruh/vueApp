<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

            <Input :label="'Name'" :type="'text'" :placeholder="'Name'" :id="'floatingInput1'" />

            <Input :label="'Email address'" :type="'email'" :placeholder="'Email address'" :id="'floatingInput2'" />
            
            <Input :label="'Password'" :type="'password'" :placeholder="'Password'" :id="'floatingPassword3'" />

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
                    "username": "sassdaddddsasa",
                    "email": "sakjadsdddsdss@gmail.com",
                    "password": "1232sd3h3",
                }
                this.$store
                    .dispatch('register', data)
                    .then(user => { console.log(user) })
                    .catch(error => { console.log("Error", error) })
            },
        }
    }
</script>

<style>
    
</style>
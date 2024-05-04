<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

            <Input :label="'Name'" :type="'text'" :placeholder="'Name'" :id="'floatingInput'" />

            <Input :label="'Email address'" :type="'email'" :placeholder="'Email address'" :id="'floatingInput'" />
            
            <Input :label="'Password'" :type="'password'" :placeholder="'Password'" :id="'floatingPassword'" />

            <Button type="submit">Register</Button>
        </form>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style>
    
</style>
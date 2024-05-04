<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <Input :label="'Email address'" :type="'email'" :placeholder="'Email address'" :id="'floatingInput'" />
            
            <Input :label="'Password'" :type="'password'" :placeholder="'Password'" :id="'floatingPassword'" />

            <Button type="submit">Login</Button>
        </form>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style>
    
</style>
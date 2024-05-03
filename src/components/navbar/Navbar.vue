<template>
    <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
        <router-link class="d-flex align-items-center link-body-emphasis text-decoration-none" :to="{name: 'home'}">
            <img :src="logo" alt="Logo">
        </router-link>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <router-link class="me-3 py-2 link-body-emphasis text-decoration-none" :to="{name: 'login'}">Login</router-link>
        <router-link class="me-3 py-2 link-body-emphasis text-decoration-none" :to="{name: 'register'}">Register</router-link>
    </nav>
    </div>
</template>

<script>
    import { logo } from "@/constants"
    export default {
        data() {
            return {
                logo,
            }
        },
    }

</script>

<style>
    
</style>
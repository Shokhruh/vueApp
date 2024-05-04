<template>
    <div>
        <h1>Count: {{ $store.state.count }}</h1>
        <button class="btn btn-success" @click="increaseHandler">Add</button>
        <button class="btn btn-danger" @click="decreaseHandler">Remove</button>
    </div>
</template>
<script>
export default {
    methods: {
        increaseHandler() {
            this.$store.commit('increment')
        },
        decreaseHandler() {
            this.$store.commit('decrement')
        }
    }
}
</script>
<style>
    
</style>
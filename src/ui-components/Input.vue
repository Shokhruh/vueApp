<template>
    <div class="form-floating mb-2">
        <input :type="type" class="form-control" :id="id" :placeholder="placeholder" @input="updateInput" :value="modelValue">
        <label :for="id">{{ label }}</label>
    </div>
</template>
<script>
export default {
    name: "Input",

    props: {
        label: String,
        type: String,
        placeholder: String,
        id: String,
        modelValue: [String, Number],
    },

    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        },
    }
}
</script>
<style>
    
</style>
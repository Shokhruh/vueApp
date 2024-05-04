<template>
    <div class="form-floating mb-2">
        <input :type="type" class="form-control" :id="id" :placeholder="placeholder">
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
    },
}
</script>
<style>
    
</style>
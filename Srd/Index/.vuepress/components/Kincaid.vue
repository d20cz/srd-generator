<template>
    <span class="component-kincaid">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'Kincaid',
        props: [],
        data() {
            return {};
        }
    }
</script>


<style lang="scss">
    .component-kincaid {
        color: red;
    }
</style>
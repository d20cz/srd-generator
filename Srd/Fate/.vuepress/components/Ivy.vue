<template>
    <span class="component-ivy">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'Ivy',
        props: [],
        data() {
            return {};
        }
    }
</script>


<style lang="scss">
    .component-ivy {
        color: blue;
    }
</style>
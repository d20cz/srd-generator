<template>
    <div class="component-comment">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Comment',
        props: [],
        data() {
            return {};
        }
    }
</script>


<style lang="scss">
    .component-comment {
        border-left: 0.25rem solid blueviolet;
        padding-left: 1rem;
        color: blueviolet;
    }
</style>
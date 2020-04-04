<template>
    <div class="component-sticky-note">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'StickyNote',
        props: [],
        data() {
            return {};
        }
    }
</script>


<style scoped lang="scss">
    .component-sticky-note {
        text-decoration:none;
        color:#000;
        background:#ffc;
        display:block;
        min-height:10em;
        width:20em;
        padding: 0.1em 1em;
        box-shadow: 5px 5px 7px rgba(33,33,33,.7);
        margin: auto;
        -webkit-transform:rotate(-2deg);
        -o-transform:rotate(-2deg);
        -moz-transform:rotate(-2deg);
    }
    .component-sticky-note .component-ivy,
    .component-sticky-note .component-kincaid
    {
        display: block;
    }
</style>
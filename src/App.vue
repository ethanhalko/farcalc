<template>
    <div id="app">
        <conversion-form></conversion-form>
    </div>
</template>

<script>
    import ConversionForm from './components/conversion-form.vue';

    export default {
        name: 'App',
        components: {
            'conversion-form': ConversionForm
        }
    }
</script>

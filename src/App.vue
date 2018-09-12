<template>
    <div id="app">
        <div class="row pt-4">
            <div class="col">
                <p class="text-center">
                    <router-link :to="{ name: 'Calculator' }">Calculator</router-link>
                </p>
            </div>
            <div class="col">
                <p class="text-center">
                    <router-link :to="{ name: 'About' }">About</router-link>
                </p>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
    };
</script>
<style lang="scss" type="text/scss" scoped>
    a {
        color: #000;
        text-decoration: none;
        &:hover {
            color: #839bc1;
        }
        .router-link-active {
            border-bottom: 1px black solid;
        }
    }
</style>

<template>
    <div id="app">
        <div class="row pt-4">
            <div class="col-6">
                <p class="text-center">
                    <router-link :to="{ name: 'Calculator' }">Calculator</router-link>
                </p>
            </div>
            <div class="col-6">
                <p class="text-center">
                    <router-link :to="{ name: 'About' }">About</router-link>
                </p>
            </div>
        </div>
        <transition name="fade" :key="" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                transitionKey: 'Calculator'
            }
        },
        watch: {
            '$route' (to, from) {
                this.key = to.name;
            }
        }
    };
</script>
<style lang="scss" type="text/scss" scoped>
    a {
        color: #000;
        text-decoration: none;
        border-bottom: none;
        &:hover {
            color: #839bc1;
        }
        &.router-link-exact-active {
            border-bottom: 1px black solid;
        }
    }
    .fade-enter-active, 
    .fade-leave-active {
        transition: opacity 0.2s;
        
    }
    .fade-enter, 
    .fade-leave-to {
        opacity: 0;
    }

</style>

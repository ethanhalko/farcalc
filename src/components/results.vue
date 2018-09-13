<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-8">
                    <ul class="list-group list-group-flush val-list">
                        <transition-group name="fade">
                            <li class="list-group-item text-center" v-for="(value, index) in items" :key="index">
                                {{value.value }}{{ value.key }}F
                            </li>
                        </transition-group>
                    </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Results',
        props: {
            'items' : {
                type: [Array, Object],
                required: true
            }
        },
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .fade-enter-active, 
    .fade-leave-active {
        transition: opacity 0.5s;
        
    }
    .fade-enter, 
    .fade-leave-to {
        opacity: 0;
    }
    .val-list {
        border-bottom: 1px solid rgba(0, 0, 0, .125) !important;
    }
</style>
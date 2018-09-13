<template>
    <div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <p>
                        This exists because the creator can't convert between farad units in their head 
                        and sometimes a BOM will call for <code>10000nF</code> and they ordered <code>10uF</code>... or something. 
                    </p>
                    <p>
                        Currently this only works with metric notation such as <code>1u1</code> or <code>0p4</code> representing <code>1.1uF</code> and <code>0.4pF</code> respectively.
                    </p> 
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <p>
                        For more information, to report a bug or to contribute:
                    </p>
                    <h1 class="text-center">
                        <a href="http://github.com/ethanhalko/farcalc" target="_blank">
                            <i class="fab fa-github-square"></i>
                        </a>
                    </h1>
                </div>
            </div>
            <div class="row justify-content-center pt-5">
                <div class="col-md-6">
                    <p class="text-center">
                        For everything else there's <a href="http://ethanhalko.com">ethanhalko.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'About',
    }
</script>
<style lang="scss" type="text/scss" scoped>
    
</style>
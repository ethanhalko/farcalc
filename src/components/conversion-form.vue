<template>
    <div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-8">
                    <ul class="list-group list-group-flush val-list">
                        <li class="list-group-item text-center" v-for="value in preInput">
                            {{value.value }}{{ value.key }}F
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="form-group mb-0">
                        <input type="text" class="form-control text-center" v-model="input" @input="parseInput">
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <transition name="slide">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-center" v-for="value in postInput">
                                {{value.value }}{{ value.key }}F
                            </li>
                        </ul>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import conversionValues from '../assets/conversions.json'
    import Vue from 'vue';

    export default {
        data() {
            return {
                input: '',
                explodedString: {
                    preDecimal: null,
                    postDecimal: null,
                    unit: null
                },
                convertedValues: [],
                preInput: [],
                postInput: []
            }
        },
        methods: {
            parseInput() {
                let chars = this.input.split(""),
                    self  = this;

                this.explodedString = {
                    preDecimal: null,
                    postDecimal: null,
                    unit: null
                };

                let pre  = '',
                    post = '',
                    unit = '';

                _.each(chars, function (ch) {
                    if (!isNaN(ch)) {
                        if (!_.isNull(self.explodedString.unit)) {
                            post = post.concat(ch);
                            self.explodedString.postDecimal = parseInt(post);
                        } else {
                            pre = pre.concat(ch);
                            self.explodedString.preDecimal = parseInt(pre);
                        }
                    } else {
                        unit = unit.concat(ch);
                        self.explodedString.unit = unit;
                    }
                });

                this.convert(this.normalize());
            },
            normalize() {
                let unit        = _.isNull(this.explodedString.unit) ? '' : this.unit,
                    denominator = parseInt(conversionValues['capacitance'][unit]),
                    numerator   = this.capacitanceValue;

                return numerator / denominator;
            },
            convert(normalizedInput) {
                let self = this;

                this.convertedValues = [];

                _.each(conversionValues['capacitance'], function (value, key) {
                    if (isNaN(normalizedInput) || normalizedInput == 0) {
                        return false;
                    }

                    let convertedValue = value * normalizedInput;

                    convertedValue = convertedValue < 1 ? self.roundValue(convertedValue) : Math.round(convertedValue);

                    self.convertedValues.push({
                        key: key,
                        value: convertedValue
                    });
                });

                this.generateDisplayedLines();
            },
            generateDisplayedLines() {
                let self          = this,
                    postInputFlag = false;

                this.preInput = [];
                this.postInput = [];

                _.each(this.convertedValues, function (value) {
                    if (value.key !== self.unit && !postInputFlag) {
                        self.preInput.push(value);
                        if (self.preInput.length > 3) {
                            self.preInput.shift();
                        }
                    } else {
                        let postInputLength = 6 - self.preInput.length;
                        postInputFlag = true;
                        if (value.key !== self.unit && self.postInput.length < postInputLength) {
                            self.postInput.push(value);
                        }
                    }
                });
            },
            roundValue(val) {
                let precision = Math.round(Math.log10(val));

                if (precision < 0) {
                    precision *= -1;
                }

                return val.toFixed(Math.min(precision, 20));
            }
        },
        computed: {
            capacitanceValue() {
                return parseFloat(this.explodedString.preDecimal + '.' + this.explodedString.postDecimal);
            },
            unit() {
                return this.explodedString.unit ? this.explodedString.unit.replace(/(?!^)[F]/, '') : null;
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .form-group {

        input {
            border: none !important;
            border-radius: 0;
            border-bottom: 1px solid rgba(0, 0, 0, .125) !important;
            line-height: 1.5 !important;
            padding: .75rem 1.25rem;
        }

        input:focus {
            outline-width: 0 !important;
            border: none !important;
        }

    }

    .val-list {
        border-bottom: 1px solid rgba(0, 0, 0, .125) !important;
    }
</style>
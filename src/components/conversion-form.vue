<template>
    <div>
        <input class="vertical-middle" type="text" v-model="input" @input="parseInput">
        {{ label }}
        <ul>
            <li v-for="conversion in convertedValues">{{ conversion }}</li>
        </ul>
    </div>
</template>

<script>
    import conversionValues from '../assets/conversions.json'
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

                let normalizedInput = this.normalize();
                this.convert(normalizedInput);
            },
            normalize() {
                let unit        = _.isNull(this.explodedString.unit) ? '' : this.explodedString.unit.replace(/(?!^)[F]/, ''),
                    denominator = parseInt(conversionValues['capacitance'][unit]),
                    numerator   = this.capacitanceValue;

                return numerator / denominator;
            },
            convert(normalizedInput) {
                let self = this;
                self.convertedValues = [];
                _.each(conversionValues['capacitance'], function (value, key) {
                    if (isNaN(normalizedInput)) {
                        return false;
                    }
                    self.convertedValues.push(value * normalizedInput + key + (key === 'F' ? '' : 'F'));
                });
            }
        },
        computed: {
            label() {
                let chars = [
                    this.explodedString.preDecimal,
                    this.explodedString.unit,
                    _.defaultTo(this.explodedString.postDecimal, ''),
                ];

                return chars.join("");
            },
            capacitanceValue() {
                return parseFloat(this.explodedString.preDecimal + '.' + this.explodedString.postDecimal);
            },
        }
    }
</script>
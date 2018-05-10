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
                    unit: 'F'
                },
                convertedValues: [],
            }
        },
        methods: {
            parseInput() {
                let chars = this.input.split(""),
                        self = this;

                this.explodedString = {
                    preDecimal: null,
                    postDecimal: null,
                };

                var val = '';
                _.each(chars, function (ch) {
                    if (!isNaN(ch)) {
                        val = val.concat(ch);
                        self.explodedString.preDecimal = parseInt(val);
                    } else {
                        self.explodedString.unit = ch;
                        return false;
                    }
                });

                let normalizedInput = this.normalize();
                this.convert(normalizedInput);
            },
            normalize() {
                let denominator = parseInt(conversionValues['capacitance'][this.explodedString.unit]),
                        numerator = parseInt(this.explodedString.preDecimal);

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
                    _.defaultTo(this.explodedString.postDecimal, ''),
                    this.explodedString.unit
                ];

                return chars.join("");
            }
        }
    }
</script>
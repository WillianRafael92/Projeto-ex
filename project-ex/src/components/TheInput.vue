<template>
    <div :class="`mt-3 ${divClass}`">
        <TheLabel :label="label" :required="required"/>
        <input 
            v-model="inputValue"
            :ref="ref"
            type="text" 
            class="form-control" 
            @input="updateValue()"
        />
    </div>
</template>

<script>
    import TheLabel from '@/components/TheLabel.vue'
    import { defineComponent } from 'vue'

    export default defineComponent({

        components: { TheLabel,},

        props: {
            divClass: String,
            label: String,
            required: Boolean
        },
        
        data: () => ({
            inputValue: '',
        }),

        methods: {
            update() { this.$emit('update:modelValue', this.inputValue)},
            updateValue() {
                this.inputValue,
                this.required,
                this,
                this.update()
            }
        },

        emmits: ["update:modelValue"],

        created() { this.inputValue = this.modelValue },

        watch: {
            inputValue() {this.update},

            modelValue() {
                if (this.modelValue != this.inputValue) {
                    this.inputValue = this.modelValue
                }
            }
        }
    })
</script>
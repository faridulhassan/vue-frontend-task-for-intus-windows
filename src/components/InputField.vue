<template lang="">
    <div :class="`relative  ${classes}`">
        <label v-if="label" :for="`input-field-${id}`" class="block mb-1 text-base">{{ label }}</label>
        <div class="flex items-center text-right">
            <input
                :type="type"
                name=""
                :id="id"
                :value="modelValue"
                @input="onInput"
                :class="{ 'border-red-600 hover:border-red-600 focus:border-red-600 focus-visible:border-red-600': error?.length, 'hover:border-black border-transparent': !error?.length }"
                class="w-full block border-2 bg-gray-100 rounded pl-2 pr-3 py-2 flex-1 focus:bg-white focus:placeholder-transparent"
                :placeholder="placeholder"
                autocomplete="nope"
            />
            <span v-if="required" class="pl-1 block text-red-600">*</span>
        </div>
        <div class="error-message text-red-600 text-sm ml-3 mt-1.5 leading-none" v-if="error">{{ error }}</div>
    </div>
</template>
<script>
import { uid } from "../utils";
export default {
    name: "InputField",
    props: {
        type: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: ""
        },
        required: Boolean,
        classes: {
            type: String,
            default: ""
        },
        modelValue: String,
        error: String
    },
    setup(props, { emit }) {
        /* 
        ====================
        Methods
        ====================
        */
        const onInput = (e) => {
            emit("update:modelValue", e.target.value);
        };
        return {
            id: `input-field-${uid()}`,
            onInput
        };
    }
};
</script>

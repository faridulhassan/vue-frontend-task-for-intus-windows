<template lang="">
    <button :class="`text-base leading-none text-center px-2 py-4  sm:py-3 md:py-5 bg-lime hover:bg-lime transition-all text-gray-100 rounded w-[200px] ${classes}`">
        {{ text }}
    </button>
</template>
<script>
export default {
    name: "Button",
    props: {
        text: {
            type: String,
            default: "Click"
        },
        classes: {
            type: String,
            default: ""
        }
    }
};
</script>

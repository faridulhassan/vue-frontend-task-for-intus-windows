<template lang="">
    <div :class="`rounded-3xl bg-white drop-shadow-md outline-gray-100 outline-1 ${paddingClass}`">
        <slot />
    </div>
</template>
<script>
export default {
    name: "Card",
    props: {
        paddingClass: {
            type: String,
            default: "p-8"
        }
    }
};
</script>

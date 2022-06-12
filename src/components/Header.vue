<template lang="">
    <div :class="`p-3 md:py-5 bg-white shadow-md w-full z-50 top-0 left-0 ${position}`">
        <h2 class="text-base md:text-2xl lg:text-3xl text-center font-normal">
            <slot />
        </h2>
    </div>
</template>
<script>
export default {
    name: "Header",
    props: {
        position: {
            type: String,
            default: "relative"
        }
    }
};
</script>

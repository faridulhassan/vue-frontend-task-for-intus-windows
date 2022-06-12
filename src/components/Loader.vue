<template lang="">
    <div :class="`flex items-start justify-center w-full h-full z-10 left-0 top-0 overflow-hidden ${position} ${classes}`">
        <div class="bg-black bg-opacity-40 absolute left-0 top-0 w-full h-full"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="relative top-12 z-2 inline w-14 h-1w-14 m-0 text-gray-200 animate-spin dark:text-gray-600 fill-lime" viewBox="0 0 100 101">
            <path fill="currentColor" d="M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919z"></path>
            <path fill="currentFill" d="M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0041.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0144.131 25.769c.902 2.34 3.361 3.802 5.787 3.165z"></path>
        </svg>
    </div>
</template>
<script>
export default {
    props: {
        position: {
            type: String,
            default: "absolute"
        },
        classes: {
            type: String,
            default: ""
        }
    }
};
</script>

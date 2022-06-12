<template>
    <div class="container mx-auto" v-show="isOpen">
        <div class="flex justify-center">
            <div @click.self="closeModal" class="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
                <div class="max-w-2xl min-w-[250px] mx-4 p-6 bg-white rounded-md shadow-xl relative text-center">
                    <svg @click="closeModal" xmlns="http://www.w3.org/2000/svg" :class="type === 'error' ? 'text-red-700' : 'text-gray-900'" class="w-8 h-8 cursor-pointer absolute right-2 top-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 class="text-2xl">{{ title }}</h3>
                    <div class="mt-4">
                        <div class="text-sm">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Modal",
    props: {
        title: "",
        isOpen: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "success"
        }
    },
    emits: ["close"],
    setup(props, { emit }) {
        /* 
        ====================
        Methods
        ====================
        */
        const closeModal = () => {
            emit("close");
        };
        return { closeModal };
    }
};
</script>

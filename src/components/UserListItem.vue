<template lang="">
    <Card padding-class="px-2 md:px-8 pt-5 md:pt-8 pb-8 md:pb-14">
        <div class="relative mb-4">
            <h3 class="text-center font-normal text-2xl text-gray-800">User #{{ user?.id }}</h3>
            <div class="delete-icon inline-block absolute right-0 top-1 cursor-pointer text-black hover:text-red-600 transition-colors overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" @click="handleDeleteClick">
                    <g stroke="currentColor" strokeWidth="1.5" clipPath="url(#clip0_7_611)">
                        <path d="M2.98 16.528L2.373 4.316h15.128l-.607 12.212a3.25 3.25 0 01-3.246 3.088H6.226a3.25 3.25 0 01-3.246-3.088zM6.511 4.29h6.853V3a2.25 2.25 0 00-2.25-2.25H8.76A2.25 2.25 0 006.511 3v1.29z"></path>
                        <path strokeLinecap="round" d="M.75 4.29h18.375M12.443 9.447v4.2M7.432 9.447v4.2"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_7_611">
                            <path fill="#fff" d="M0 0H20V20H0z"></path>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        <div class="flex flex-wrap justify-center">
            <div class="w-full sm:w-11/12 md:w-10/12">
                <div class="mt-4 mb-2">
                    <table class="table-fixed w-full">
                        <tbody>
                            <tr>
                                <th class="text-left py-1 text-sm text-gray-400 font-normal">Name</th>
                                <td class="text-right py-1">
                                    <span class="font-medium text-base">
                                        {{ name }}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th class="text-left py-1 text-sm text-gray-400 font-normal">Color</th>
                                <td class="text-right py-1">
                                    <span class="font-medium text-base">
                                        {{ user?.color || "--" }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="text-center">
            <Button text="Generate color" @click="handleGenerateColorClick" />
        </div>
    </Card>
</template>
<script>
import { computed } from "vue";
import Button from "./Button.vue";
import Card from "./Card.vue";
export default {
    name: "UserListItem",
    components: {
        Card,
        Button
    },
    props: {
        user: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ["generateColor", "deleteUser"],
    setup(props, { emit }) {
        /* 
        =================================
        Refs, Reactive and Computed props
        =================================
		*/
        const name = computed(() => `${props.user.first_name} ${props.user.last_name || ""}`);

        /* 
        ====================
        Methods
        ====================
        */
        const handleGenerateColorClick = (evt) => {
            evt.preventDefault();
            emit("generateColor", props.user);
        };
        const handleDeleteClick = (evt) => {
            evt.preventDefault();
            emit("deleteUser", props.user.id);
        };
        return {
            name,
            handleGenerateColorClick,
            handleDeleteClick
        };
    }
};
</script>

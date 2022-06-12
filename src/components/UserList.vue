<template lang="">
    <div class="grid grid-cols-1 gap-5 md:gap-10">
        <div v-show="!users.length" class="text-center text-xl">Empty...</div>

        <transition-group>
            <UserListItem v-for="user in users" :key="user.id" :user="user" v-bind="$attrs" />
        </transition-group>
    </div>
</template>
<script>
import UserListItem from "./UserListItem.vue";
export default {
    name: "UserList",
    components: { UserListItem },
    props: {
        users: {
            type: Array,
            default: []
        }
    }
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>

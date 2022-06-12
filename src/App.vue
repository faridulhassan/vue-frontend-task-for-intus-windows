<template>
    <div class="pt-14 md:pt-24">
        <Header position="fixed">User Management</Header>
        <div class="container mx-auto max-w-[730px] px-4 py-5 relative">
            <UserAdministration />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import UserAdministration from "./views/UserAdministration.vue";
export default {
    name: "App",
    components: {
        Header,
        UserAdministration
    }
};
</script>

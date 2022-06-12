<template>
    <div>
        <Loader v-show="isLoading" classes="rounded-3xl" />
        <Modal :isOpen="modalConfig.isOpen" :type="modalConfig.type" :title="modalConfig.title" @close="closeModal">
            {{ modalConfig.content }}
        </Modal>
        <div class="grid grid-cols-1">
            <CreateUserForm @createUser="handleCreateUserFormSubmit" ref="createUserFormRef" />
        </div>
        <div class="mt-16 md:mt-24 min-h-[200px]">
            <UserList :users="users" @generateColor="generateColor" @deleteUser="handleDeleteUser" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed, reactive } from "vue";
import { useStore } from "vuex";

import { api } from "../api";
import { randomColor } from "../utils";
import CreateUserForm from "../components/CreateUserForm.vue";

import UserList from "../components/UserList.vue";
import Loader from "../components/Loader.vue";
import Modal from "../components/Modal.vue";
export default {
    name: "UserAdministration",
    components: {
        CreateUserForm,
        UserList,
        Loader,
        Modal
    },
    setup() {
        /* 
        ====================
        Store
        ====================
        */
        const store = useStore();

        /* 
        =================================
        Refs, Reactive and Computed props
        =================================
        */
        const users = computed(() => store.state.users);

        const isLoading = ref(false);
        const setLoading = (loading) => (isLoading.value = loading);
        const color = ref("");
        const createUserFormRef = ref(null);

        const modalInitialConfig = {
            type: "",
            title: "",
            isOpen: false,
            content: ""
        };
        const modalConfig = reactive({ ...modalInitialConfig });

        /* 
        ====================
        Methods
        ====================
        */
        const setModalConfig = (config) => {
            modalConfig.title = config.title;
            modalConfig.content = config.content;
            modalConfig.isOpen = config.isOpen;
            modalConfig.type = config.type;
        };
        const closeModal = () => {
            modalConfig.isOpen = false;
        };
        const generateColor = (user) => {
            color.value = randomColor();
            store.dispatch("updateUser", { id: user.id, color: color.value });
        };
        /* Add user */
        const addUser = async (user) => {
            const apiConfig = {
                headers: {
                    accept: "*/*",
                    "content-type": "application/json"
                }
            };
            setLoading(true);
            try {
                const data = await api.post("/users", JSON.stringify(user), apiConfig);
                setLoading(false);
                const userData = data.data;
                const nameSplit = userData.name.split(" ");
                userData.first_name = nameSplit[0];
                userData.last_name = nameSplit.slice(1).join(" ");
                store.dispatch("addUser", userData);
                createUserFormRef.value?.resetForm();
            } catch (e) {
                setLoading(false);
                setModalConfig({
                    isOpen: true,
                    title: "Oops...",
                    content: e.message,
                    type: "error"
                });
            }
        };
        /* Fetch users */
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const data = await api.get("/users?per_page=5");
                setLoading(false);
                store.dispatch("fetchUsers", data.data.data);
            } catch (e) {
                setLoading(false);
                setModalConfig({
                    isOpen: true,
                    title: "Oops...",
                    content: e.message,
                    type: "error"
                });
            }
        };

        const handleDeleteUser = (userId) => {
            store.dispatch("deleteUser", userId);
        };
        const handleCreateUserFormSubmit = (user) => {
            addUser(user);
        };
        /* 
        ====================
        Lifecycle Events
        ====================
        */
        onMounted(() => {
            fetchUsers();
        });
        return {
            color,
            users,
            isLoading,
            modalConfig,
            createUserFormRef,
            closeModal,
            handleCreateUserFormSubmit,
            generateColor,
            handleDeleteUser
        };
    }
};
</script>

import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            users: []
        };
    },
    actions: {
        addUser({ commit }, user) {
            commit("addUser", user);
        },
        updateUser({ commit }, userData) {
            commit("updateUser", userData);
        },
        deleteUser({ commit }, userId) {
            commit("deleteUser", userId);
        },
        fetchUsers({ commit }, users) {
            commit("fetchUsers", users);
        }
    },
    mutations: {
        addUser(state, user) {
            state.users.push(user);
        },
        updateUser(state, userData) {
            let targetUser = state.users.find((user) => user.id === userData.id);
            if (targetUser) {
                targetUser.color = userData.color;
            }
        },
        deleteUser(state, userId) {
            let targetUserIndex = state.users.findIndex((user) => user.id === userId);
            if (targetUserIndex > -1) {
                state.users.splice(targetUserIndex, 1);
            }
        },
        fetchUsers(state, users) {
            state.users = users;
        }
    }
});

export default store;

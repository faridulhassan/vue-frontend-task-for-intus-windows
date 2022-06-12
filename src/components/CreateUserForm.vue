<template lang="">
    <Card class="relative" padding-class="px-8 py-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full sm:w-11/12 md:w-10/12">
                <h2 class="text-2xl lg:text-3xl text-center font-normal mb-2 text-gray-800">Create user</h2>
                <form @submit.prevent="handleFormSubmit">
                    <InputField label="Full Name" v-model.trim="formState.name" classes="mb-4" :error="v$.name.$errors[0]?.$message" required />
                    <InputField label="Job" v-model.trim="formState.job" placeholder="leader" classes="mb-4" :error="v$.job.$errors[0]?.$message" required />
                    <div class="text-center">
                        <Button text="Submit" classes="mt-2" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    </Card>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

import Button from "./Button.vue";
import InputField from "./InputField.vue";
import Card from "./Card.vue";
import { computed, reactive, ref } from "vue";

export default {
    name: "CreateUserForm",
    components: {
        Button,
        InputField,
        Card
    },
    emit: ["createUser"],
    setup(props, { emit }) {
        /* 
        =================================
        Refs, Reactive and Computed props
        =================================
		*/
        const isFormSubmitted = ref(false);
        let formState = reactive({
            name: "",
            job: ""
        });
        const rules = computed(() => ({
            name: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(15)
            },

            job: { required, minLength: minLength(5), maxLength: maxLength(15) }
        }));

        const v$ = useVuelidate(rules, formState, { $lazy: true });

        /* 
        ====================
        Methods
        ====================
        */
        const handleFormSubmit = async (e) => {
            isFormSubmitted.value = true;
            const isFormVaild = await v$.value.$validate();

            if (!isFormVaild) {
                return;
            }
            emit("createUser", formState);
        };
        const resetForm = (e) => {
            v$.value.$reset();
            formState.name = "";
            formState.job = "";
            isFormSubmitted.value = false;
        };
        return { isFormSubmitted, formState, v$, handleFormSubmit, resetForm };
    }
};
</script>

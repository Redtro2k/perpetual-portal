<template>
  <Head title="Forgot Password" />
  <GuestLayoutVue
    :canLogin="$page.props.checkLogged.canLogin"
    :canRegister="$page.props.checkLogged.canRegister"
  >
    <template #content>
      <div class="min-h-full flex">
        <div
          class="
            flex-1 flex flex-col
            justify-center
            py-12
            px-4
            sm:px-6
            lg:flex-none lg:px-20
            xl:px-24
          "
        >
          <div class="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                class="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p class="mt-2 text-sm text-gray-600">
                Or
                {{ " " }}

              </p>
            </div>

            <div class="mt-8">
              <div>
                <div class="mt-6 relative">
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">
                      continue with
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <JetValidationErrors class="mb-4" />
                <div class="mb-4 text-sm text-gray-600">
                  Forgot your password? No problem. Just let us know your email
                  address and we will email you a password reset link that will
                  allow you to choose a new one.
                </div>
                <div
                  v-if="status"
                  class="mb-4 font-medium text-sm text-green-600"
                >
                  {{ status }}
                </div>
                <form @submit.prevent="submit" class="space-y-6">
                  <div>
                    <JetLabel for="email" value="Email" />
                    <JetInput
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="mt-1 block w-full"
                      required
                      autofocus
                    />
                  </div>

                  <div class="flex items-center justify-end mt-4">
                    <JetButton
                      :class="{ 'opacity-25': form.processing }"
                      :disabled="form.processing"
                      fullWidth
                    >
                      Email Password Reset Link
                    </JetButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
         <div class="hidden lg:block relative w-0 flex-1">
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </template>
  </GuestLayoutVue>
</template>
<script setup>
import { Head, useForm } from "@inertiajs/inertia-vue3";
import JetButton from "@/Components/Button.vue";
import JetInput from "@/Components/Input.vue";
import JetLabel from "@/Components/Label.vue";
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import GuestLayoutVue from "@/Layouts/GuestLayout.vue";

defineProps({
  status: String,
});

const form = useForm({
  email: "",
});

const submit = () => {
  form.post(route("password.email"));
};
</script>

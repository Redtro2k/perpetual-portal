<template>
  <Head title="Register" />
  <GuestLayoutVue
    :canLogin="$page.props.checkLogged.canLogin"
    :canRegister="$page.props.checkLogged.canRegister"
  >

    <template #content>
      <div class="min-h-full flex">
        <div
          class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
        >
          <div class="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                class="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                Sign Up to your account
              </h2>
              <p class="mt-2 text-sm text-gray-600">
                Or
                {{ " " }}
                <Link
                  :href="route('login')"
                  class="font-medium text-jvdgreen hover:text-jvgreen"
                >
                  already registered?
                </Link>
              </p>
            </div>
            <div class="mt-8">
              <div>
                <div class="mt-6 relative">
                  <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500"> continue with </span>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <JetValidationErrors class="mb-4" />

                <!-- <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                  {{ status }}
                </div> -->

                <form @submit.prevent="submit" class="space-y-6">
                  <!-- name -->
                  <div>
                    <JetLabel for="name" value="Name" />
                    <JetInput
                      id="name"
                      v-model="form.name"
                      type="text"
                      class="mt-1 block w-full"
                      required
                      autofocus
                      autocomplete="name"
                    />
                  </div>
                  <!-- email -->
                  <div class="mt-4">
                    <JetLabel for="email" value="Email" />
                    <JetInput
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="mt-1 block w-full"
                      required
                    />
                  </div>
                  <div class="mt-4">
                    <JetLabel for="gender" value="Gender" />
                    <simple-dropdown v-model="form.gender" :options="gender" />
                  </div>
                  <!-- password -->
                  <div class="mt-4">
                    <JetLabel for="password" value="Password" />
                    <JetInput
                      id="password"
                      v-model="form.password"
                      type="password"
                      class="mt-1 block w-full"
                      required
                      autocomplete="new-password"
                    />
                  </div>
                  <!-- password_confirmation -->
                  <div class="mt-4">
                    <JetLabel for="password_confirmation" value="Confirm Password" />
                    <JetInput
                      id="password_confirmation"
                      v-model="form.password_confirmation"
                      type="password"
                      class="mt-1 block w-full"
                      required
                      autocomplete="new-password"
                    />
                  </div>
                  <!-- terms & policy -->
                  <div
                    v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature"
                    class="mt-4"
                  >
                    <JetLabel for="terms">
                      <div class="flex items-center">
                        <JetCheckbox
                          id="terms"
                          v-model:checked="form.terms"
                          name="terms"
                        />

                        <div class="ml-2">
                          <p class="font-medium text-jvdgreen hover:text-jvgreen">
                            I agree to the
                            <Link
                              target="_blank"
                              :href="route('terms.show')"
                              class="underline"
                              >Terms of Service</Link
                            >
                            and
                            <Link
                              target="_blank"
                              :href="route('policy.show')"
                              class="underline"
                              >Privacy Policy</Link
                            >
                          </p>
                        </div>
                      </div>
                    </JetLabel>
                  </div>
                  <!-- submit button -->
                  <div class="flex items-center">
                    <JetButton
                      class="ml-4"
                      :class="{ 'opacity-25': form.processing }"
                      :disabled="form.processing"
                      fullWidth
                    >
                      Register
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
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import JetButton from "@/Components/Button.vue";
import JetInput from "@/Components/Input.vue";
import JetCheckbox from "@/Components/Checkbox.vue";
import JetLabel from "@/Components/Label.vue";
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import GuestLayoutVue from "@/Layouts/GuestLayout.vue";
import SimpleDropdown from "@/Custom/Forms/InputMenus/SimpleCustom.vue";

const form = useForm({
  name: "",
  email: "",
  username: "testing",
  password: "",
  gender: "",
  password_confirmation: "",
  terms: false,
});

const gender = [
  { id: 1, name: "male" },
  { id: 2, name: "female" },
];

const submit = () => {
  form.post(route("register"), {
    onFinish: () => form.reset("password", "password_confirmation"),
  });
};
</script>

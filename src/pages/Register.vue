<template>
  <div class="relative bg-gray-50 dark:bg-gray-900 overflow-hidden h-[calc(100vh-64px)]">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email<span class="text-red-500">*</span>
              </label>
              <input type="email" v-model="email" v-bind="emailAttrs"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com" required="true">
              <span v-if="errors.email" class="text-red-500 text-sm">
                {{ errors.email }}
              </span>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password<span class="text-red-500">*</span>
              </label>
              <input type="password" v-model="password" v-bind="passwordAttrs" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true">
              <span v-if="errors.password" class="text-red-500 text-sm">
                {{  errors.password }}
              </span>
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm Password<span class="text-red-500">*</span>
              </label>
              <input type="password" v-model="confirmPassword" v-bind="confirmPasswordAttrs" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true">
              <span v-if="errors.confirmPassword" class="text-red-500 text-sm">
                {{  errors.confirmPassword }}
              </span>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required="true">
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and
                    Conditions</a></label>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="handleCreateAccount"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <a href="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
            </p>
            <div v-if="isRegisterSuccess" class="block bg-green-500 rounded-lg w-full px-5 py-3 text-white text-medium">
              Your account was created successfully!
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as yup from 'yup'
import { useForm } from 'vee-validate'

const isRegisterSuccess = ref(false)

const schema = yup.object({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
  confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Confirm Password does not match with Password').label("Confirm Password"),
})

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword')

const failValidation = () => {
  console.log('Register failed')
}

const handleCreateAccount = handleSubmit((values) => {
  console.log('Register success', values)
  isRegisterSuccess.value = true
}, failValidation)

</script>
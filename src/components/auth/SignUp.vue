<template>
    <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
            <img class="h-28 w-auto" src="../../assets/logo-final.png" alt="Metacircle"/>
            <h2 class="text-3xl leading-9 font-bold text-gray-900">
            Sign up to create your account
            </h2>
        </div>

        <div class="mt-8">
            <div>
            <div class="mt-6">
            <form action="#" method="POST" class="space-y-6">
                <div class="flex justify-between">
                    <div>
                        <label for="firstName" class="block text-sm font-medium leading-5 text-gray-700">
                            First name
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input id="firstName" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>
                    <div>
                        <label for="lastName" class="block text-sm font-medium leading-5 text-gray-700">
                            Last name
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input id="lastName" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                    </div>
                </div>
                <div>
                <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                    Email address
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                    <input id="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                </div>

                <div>
                <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                    Password
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                    <input id="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                </div>

                <div>
                <label for="confirmPassword" class="block text-sm font-medium leading-5 text-gray-700">
                    Confirm Password
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                    <input id="confirmPassword" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                </div>
                <div>
                <span class="block w-full rounded-md shadow-sm">
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Sign up
                    </button>
                </span>
                </div>
                <div class="text-sm leading-5 text-right">
                    <span class="text-gray-900">Already have an account?</span>
                    <router-link to="/auth" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Sign in
                    </router-link>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>
<style scoped>

</style>
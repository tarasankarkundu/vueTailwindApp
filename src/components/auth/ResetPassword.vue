<template>
    <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
            <img class="h-28 w-auto" src="../../assets/logo-final.png" alt="Metacircle">
            <h2 class="text-3xl leading-9 font-bold text-gray-900">
            Reset Password
            </h2>
        </div>
        <form action="#" method="POST" class="space-y-6 pt-8">
            <div>
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                Email address
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input id="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
            </div>
            <div>
            <span class="block w-full rounded-md shadow-sm">
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Reset 
                </button>
            </span>
            </div>
            <div class="text-sm leading-5 text-right ">
                <span class="text-gray-900">Know your password? </span>
                <router-link to="/auth" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                Sign In
                </router-link>
            </div>
        </form>
        
    </div>
</template>
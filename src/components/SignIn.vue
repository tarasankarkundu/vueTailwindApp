<template>
    <div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-4 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 xl:w-6/12">
        <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
            <img class="h-28 w-auto" src="../assets/logo-final.png" alt="Metacircle">
            <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
            </h2>
        </div>

        <div class="mt-8">
            <div>
            <div>
                <p class="text-sm leading-5 font-medium text-gray-700">
                Sign in with
                </p>

                <div class="mt-1 grid grid-cols-3 gap-3">
                <div>
                    <span class="w-full inline-flex rounded-md shadow-sm">
                    <button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Facebook">
                        <svg class="w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1255.000000, -842.000000)" fill-rule="nonzero"><g transform="translate(1255.000000, 842.000000)"><g transform="translate(0.000000, 65.000000)" fill="#E01E5A"><path d="M26.4,13.2 C26.4,20.3 20.6,26.1 13.5,26.1 C6.4,26.1 0.6,20.3 0.6,13.2 C0.6,6.1 6.4,0.3 13.5,0.3 L26.4,0.3 L26.4,13.2 Z" id="Path"></path><path d="M32.9,13.2 C32.9,6.1 38.7,0.3 45.8,0.3 C52.9,0.3 58.7,6.1 58.7,13.2 L58.7,45.5 C58.7,52.6 52.9,58.4 45.8,58.4 C38.7,58.4 32.9,52.6 32.9,45.5 L32.9,13.2 Z" id="Path"></path></g><g id="Group" fill="#36C5F0"><path d="M45.8,26.4 C38.7,26.4 32.9,20.6 32.9,13.5 C32.9,6.4 38.7,0.6 45.8,0.6 C52.9,0.6 58.7,6.4 58.7,13.5 L58.7,26.4 L45.8,26.4 Z" id="Path"></path><path d="M45.8,32.9 C52.9,32.9 58.7,38.7 58.7,45.8 C58.7,52.9 52.9,58.7 45.8,58.7 L13.5,58.7 C6.4,58.7 0.6,52.9 0.6,45.8 C0.6,38.7 6.4,32.9 13.5,32.9 L45.8,32.9 Z" id="Path"></path></g><g id="Group" transform="translate(65.000000, 0.000000)" fill="#2EB67D"><path d="M32.6,45.8 C32.6,38.7 38.4,32.9 45.5,32.9 C52.6,32.9 58.4,38.7 58.4,45.8 C58.4,52.9 52.6,58.7 45.5,58.7 L32.6,58.7 L32.6,45.8 Z" id="Path"></path><path d="M26.1,45.8 C26.1,52.9 20.3,58.7 13.2,58.7 C6.1,58.7 0.3,52.9 0.3,45.8 L0.3,13.5 C0.3,6.4 6.1,0.6 13.2,0.6 C20.3,0.6 26.1,6.4 26.1,13.5 L26.1,45.8 Z" id="Path"></path></g><g id="Group" transform="translate(65.000000, 65.000000)" fill="#ECB22E"><path d="M13.2,32.6 C20.3,32.6 26.1,38.4 26.1,45.5 C26.1,52.6 20.3,58.4 13.2,58.4 C6.1,58.4 0.3,52.6 0.3,45.5 L0.3,32.6 L13.2,32.6 Z" id="Path"></path><path d="M13.2,26.1 C6.1,26.1 0.3,20.3 0.3,13.2 C0.3,6.1 6.1,0.3 13.2,0.3 L45.5,0.3 C52.6,0.3 58.4,6.1 58.4,13.2 C58.4,20.3 52.6,26.1 45.5,26.1 L13.2,26.1 Z" id="Path"></path></g></g></g></g></svg>
                    </button>
                    </span>
                </div>

                <div>
                    <span class="w-full inline-flex rounded-md shadow-sm">
                    <button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Twitter">
                        <svg class="w-5 h-5" version="1.1" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-15.000000, -15.000000)"><g transform="translate(15.000000, 15.000000)"><path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" fill="#4285F4"></path><path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" fill="#34A853"></path><path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" fill="#FBBC05"></path><path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" fill="#EA4335"></path><polygon points="0 0 18 0 18 18 0 18"></polygon></g></g></g></svg>
                    </button>
                    </span>
                </div>

                <div>
                    <span class="w-full inline-flex rounded-md shadow-sm">
                    <button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with GitHub">
                        <svg class="w-5 h-5" version="1.1" viewBox="0 0 439 439" xmlns="http://www.w3.org/2000/svg"><rect fill="#FFF" width="439" height="439"></rect><rect x="17" y="17" fill="#F35325" width="194" height="194"></rect><rect x="228" y="17" fill="#81BC06" width="194" height="194"></rect><rect x="17" y="228" fill="#05A6F0" width="194" height="194"></rect><rect x="228" y="228" fill="#FFBA08" width="194" height="194"></rect></svg>
                    </button>
                    </span>
                </div>
                </div>
            </div>

            <div class="mt-6 relative">
                <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm leading-5">
                <span class="px-2 bg-white text-gray-500">
                    Or continue with
                </span>
                </div>
            </div>
            </div>

            <div class="mt-6">
            <form action="#" method="POST" class="space-y-6">
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

                <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                    <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
                    Remember me
                    </label>
                </div>

                <div class="text-sm leading-5">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Forgot your password?
                    </a>
                </div>
                </div>

                <div>
                <span class="block w-full rounded-md shadow-sm">
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Sign in
                    </button>
                </span>
                </div>
                <div class="text-sm leading-5 text-right">
                    <span>New here?</span>
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Sign up
                    </a>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1 flex flex-col h-screen py-10 justify-between bg-indigo-600 box-border">
        <svg class="absolute top-0 left-0 transform translate-x-1 translate-y-1" width="150" height="150" fill="none" viewBox="0 0 150 150">
          <defs>
            <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" class="text-indigo-400" fill="currentColor"></circle>
            </pattern>
          </defs>
          <circle r="150" fill="url(#svg-pattern-squares-1)"></circle>
        </svg>
        <svg class="absolute bottom-0 right-0 transform translate-x-1 translate-y-1" width="200" height="100" fill="none" viewBox="0 0 200 100">
          <defs>
            <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" class="text-indigo-400" fill="currentColor"></circle>
            </pattern>
          </defs>
          <rect width="200" height="100" fill="url(#svg-pattern-squares-1)"></rect> 
        </svg>
        <div class="flex flex-col items-center p-8">
            <img class="w-80" src="../assets/images/undraw_public_discussion_btnw (1).svg" alt=""/>
            <p class="px-2 py-2 text-white">Remote Teams?</p>
        </div>
        <div class="flex flex-col items-center p-8">
            <img class="w-80" src="../assets/images/undraw_happy_announcement_ac67 (1).svg" alt=""/>
            <p class="px-2 py-2 text-white">Collaborate Seamlessly</p>
        </div>
        
        
    </div>
    </div>

</template>
<script>
export default {
    name: 'SignIn'
}
</script>
<style scoped>

</style>
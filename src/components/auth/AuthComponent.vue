<template>
    <div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-4 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 xl:w-6/12">
        <router-view></router-view>
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
            <img class="w-80" src="../../assets/images/homeImage1.svg" alt=""/>
            <p class="px-2 py-2 text-white">Remote Teams?</p>
        </div>
        <div class="flex flex-col items-center p-8">
            <img class="w-80" src="../../assets/images/homeImage2.svg" alt=""/>
            <p class="px-2 py-2 text-white">Collaborate Seamlessly</p>
        </div>
        
        
    </div>
    </div>

</template>
<script>
export default {
    name: 'AuthComponent',
    
}
</script>
<style scoped>

</style>
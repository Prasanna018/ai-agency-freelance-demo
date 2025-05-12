<template>
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <NuxtLink to="/" class="flex items-center">
                        <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-xl">AI</span>
                        </div>
                        <span class="ml-3 text-xl font-bold text-dark">AI Agency</span>
                    </NuxtLink>
                </div>

                <nav class="hidden md:flex space-x-8">
                    <NuxtLink v-for="link in links" :key="link.name" :to="link.path"
                        class="text-gray-600 hover:text-primary transition-colors" v-motion="{
                            initial: { opacity: 0, y: -20 },
                            enter: { opacity: 1, y: 0, transition: { delay: 100 * index } }
                        }">
                        {{ link.name }}
                    </NuxtLink>
                </nav>

                <button class="md:hidden focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '#services' },
    { name: 'About', path: '#about' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Contact', path: '#contact' }
]
</script>
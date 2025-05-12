<template>
    <section id="about" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                    <img src="https://placehold.co/400" alt="About AI" class="rounded-lg shadow-md w-full" v-motion="{
                        initial: { opacity: 0, x: -50 },
                        enter: { opacity: 1, x: 0 }
                    }" />
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-3xl font-bold text-dark mb-6" v-motion="{
                        initial: { opacity: 0, x: 50 },
                        enter: { opacity: 1, x: 0, transition: { delay: 100 } }
                    }">
                        About Our AI Agency
                    </h2>
                    <p class="text-gray-600 mb-6" v-motion="{
                        initial: { opacity: 0, x: 50 },
                        enter: { opacity: 1, x: 0, transition: { delay: 200 } }
                    }">
                        Founded in 2020, our AI agency brings together a team of experts in artificial intelligence,
                        machine learning, and data science. We're passionate about creating innovative solutions that
                        solve real-world problems.
                    </p>
                    <div class="space-y-4" v-motion="{
                        initial: { opacity: 0, x: 50 },
                        enter: { opacity: 1, x: 0, transition: { delay: 300 } }
                    }">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 bg-primary bg-opacity-10 p-2 rounded-lg">
                                <IconCheck class="w-5 h-5 text-primary" />
                            </div>
                            <div class="ml-4">
                                <h3 class="font-semibold text-dark">Expert Team</h3>
                                <p class="text-gray-600">PhD-level AI researchers and experienced engineers</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 bg-primary bg-opacity-10 p-2 rounded-lg">
                                <IconCheck class="w-5 h-5 text-primary" />
                            </div>
                            <div class="ml-4">
                                <h3 class="font-semibold text-dark">Custom Solutions</h3>
                                <p class="text-gray-600">Tailored AI implementations for your specific needs</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 bg-primary bg-opacity-10 p-2 rounded-lg">
                                <IconCheck class="w-5 h-5 text-primary" />
                            </div>
                            <div class="ml-4">
                                <h3 class="font-semibold text-dark">Ethical AI</h3>
                                <p class="text-gray-600">Responsible AI development with transparency and fairness</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { IconCheck } from '@tabler/icons-vue'
</script>
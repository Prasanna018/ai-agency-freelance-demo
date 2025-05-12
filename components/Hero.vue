<template>
    <section class="py-20 bg-gradient-to-r from-primary to-secondary">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-6" v-motion="{
                        initial: { opacity: 0, x: -50 },
                        enter: { opacity: 1, x: 0, transition: { delay: 100 } }
                    }">
                        Transforming Businesses with AI Solutions
                    </h1>
                    <p class="text-lg text-white mb-8" v-motion="{
                        initial: { opacity: 0, x: -50 },
                        enter: { opacity: 1, x: 0, transition: { delay: 200 } }
                    }">
                        We help businesses leverage artificial intelligence to automate processes, gain insights, and
                        enhance customer experiences.
                    </p>
                    <div v-motion="{
                        initial: { opacity: 0, x: -50 },
                        enter: { opacity: 1, x: 0, transition: { delay: 300 } }
                    }">
                        <NuxtLink to="#contact"
                            class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Started
                        </NuxtLink>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <img src="../assests/hero.webp" alt="AI Illustration" class="w-full max-w-md mx-auto rounded-lg"
                        v-motion="{
                            initial: { opacity: 0, scale: 0.8 },
                            enter: { opacity: 1, scale: 1, transition: { delay: 400 } }
                        }" />
                </div>
            </div>
        </div>
    </section>
</template>

<template>
    <section id="contact" class="py-20 bg-primary text-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                    <h2 class="text-3xl font-bold mb-6" v-motion="{
                        initial: { opacity: 0, x: -50 },
                        enter: { opacity: 1, x: 0 }
                    }">
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p class="mb-8 text-primary-100" v-motion="{
                        initial: { opacity: 0, x: -50 },
                        enter: { opacity: 1, x: 0, transition: { delay: 100 } }
                    }">
                        Contact us today to discuss how our AI solutions can help your business grow and innovate.
                    </p>
                    <div class="space-y-6" v-motion="{
                        initial: { opacity: 0, x: -50 },
                        enter: { opacity: 1, x: 0, transition: { delay: 200 } }
                    }">
                        <div class="flex items-center">
                            <div class="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                                <IconMail class="w-6 h-6" />
                            </div>
                            <div>
                                <h3 class="font-semibold">Email Us</h3>
                                <p class="text-primary-100">contact@aiagency.com</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                                <IconPhone class="w-6 h-6" />
                            </div>
                            <div>
                                <h3 class="font-semibold">Call Us</h3>
                                <p class="text-primary-100">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                                <IconMapPin class="w-6 h-6" />
                            </div>
                            <div>
                                <h3 class="font-semibold">Visit Us</h3>
                                <p class="text-primary-100">123 AI Street, Tech City, CA 94107</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <form class="bg-white rounded-xl p-8 shadow-lg" v-motion="{
                        initial: { opacity: 0, y: 50 },
                        enter: { opacity: 1, y: 0, transition: { delay: 300 } }
                    }">
                        <h3 class="text-2xl font-bold text-dark mb-6">Send Us a Message</h3>
                        <div class="space-y-4">
                            <div>
                                <label for="name" class="block text-gray-700 mb-2">Name</label>
                                <input type="text" id="name"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            </div>
                            <div>
                                <label for="email" class="block text-gray-700 mb-2">Email</label>
                                <input type="email" id="email"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            </div>
                            <div>
                                <label for="subject" class="block text-gray-700 mb-2">Subject</label>
                                <input type="text" id="subject"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            </div>
                            <div>
                                <label for="message" class="block text-gray-700 mb-2">Message</label>
                                <textarea id="message" rows="4"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                            </div>
                            <button type="submit"
                                class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-vue'
</script>
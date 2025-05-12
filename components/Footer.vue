<template>
    <footer class="bg-dark text-white py-12">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center mb-6">
                        <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-xl">AI</span>
                        </div>
                        <span class="ml-3 text-xl font-bold">AI Agency</span>
                    </div>
                    <p class="text-gray-400 mb-6">
                        We help businesses leverage artificial intelligence to automate processes, gain insights, and
                        enhance customer experiences.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <IconBrandTwitter class="w-6 h-6" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <IconBrandLinkedin class="w-6 h-6" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <IconBrandGithub class="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-6">Services</h3>
                    <ul class="space-y-3">
                        <li v-for="service in services" :key="service">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">{{ service }}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-6">Company</h3>
                    <ul class="space-y-3">
                        <li v-for="item in company" :key="item">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">{{ item }}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-6">Contact</h3>
                    <ul class="space-y-3 text-gray-400">
                        <li class="flex items-start">
                            <IconMail class="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                            <span>contact@aiagency.com</span>
                        </li>
                        <li class="flex items-start">
                            <IconPhone class="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li class="flex items-start">
                            <IconMapPin class="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                            <span>123 AI Street, Tech City, CA 94107</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 mb-4 md:mb-0">© 2023 AI Agency. All rights reserved.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">Cookies</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub, IconMail, IconPhone, IconMapPin } from '@tabler/icons-vue'

const services = [
    'Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Predictive Analytics',
    'Data Processing',
    'AI Security'
]

const company = [
    'About Us',
    'Careers',
    'Blog',
    'Press',
    'Partners',
    'Contact Us'
]
</script>
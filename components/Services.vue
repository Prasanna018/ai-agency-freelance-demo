<template>
    <section id="services" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-dark mb-4" v-motion="{
                    initial: { opacity: 0, y: 20 },
                    enter: { opacity: 1, y: 0 }
                }">
                    Our AI Services
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" v-motion="{
                    initial: { opacity: 0, y: 20 },
                    enter: { opacity: 1, y: 0, transition: { delay: 100 } }
                }">
                    We offer a comprehensive suite of AI services to help your business stay ahead of the competition.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(service, index) in services" :key="service.title"
                    class="bg-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow" v-motion="{
                        initial: { opacity: 0, y: 20 },
                        enter: { opacity: 1, y: 0, transition: { delay: 200 + (index * 100) } }
                    }">
                    <div class="w-14 h-14 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                        <div class="w-8 h-8 text-primary">
                            <component :is="service.icon" />
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
                    <p class="text-gray-600">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { IconBrain, IconRobot, IconLanguage, IconChartLine, IconDatabase, IconShieldCheck } from '@tabler/icons-vue'

const services = [
    {
        title: 'Machine Learning',
        description: 'Custom ML models to analyze data and make predictions for your business needs.',
        icon: IconBrain
    },
    {
        title: 'Computer Vision',
        description: 'Image and video analysis solutions for object detection, facial recognition, and more.',
        icon: IconRobot
    },
    {
        title: 'Natural Language Processing',
        description: 'Text analysis, sentiment detection, chatbots, and language translation services.',
        icon: IconLanguage
    },
    {
        title: 'Predictive Analytics',
        description: 'Forecast trends and behaviors to make data-driven business decisions.',
        icon: IconChartLine
    },
    {
        title: 'Data Processing',
        description: 'Clean, organize, and structure your data for optimal AI performance.',
        icon: IconDatabase
    },
    {
        title: 'AI Security',
        description: 'Protect your systems with AI-powered threat detection and prevention.',
        icon: IconShieldCheck
    }
]
</script>
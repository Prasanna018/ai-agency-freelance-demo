<template>
    <section id="portfolio" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-dark mb-4" v-motion="{
                    initial: { opacity: 0, y: 20 },
                    enter: { opacity: 1, y: 0 }
                }">
                    Our AI Projects
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" v-motion="{
                    initial: { opacity: 0, y: 20 },
                    enter: { opacity: 1, y: 0, transition: { delay: 100 } }
                }">
                    Explore some of our successful AI implementations across various industries.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(project, index) in projects" :key="project.title"
                    class="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    v-motion="{
                        initial: { opacity: 0, y: 20 },
                        enter: { opacity: 1, y: 0, transition: { delay: 200 + (index * 100) } }
                    }">
                    <img :src="project.image" :alt="project.title"
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-xl mb-2">{{ project.title }}</h3>
                            <p class="text-gray-300 mb-4">{{ project.description }}</p>
                            <span class="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm">{{
                                project.industry }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const projects = [
    {
        title: 'Retail Demand Forecasting',
        description: 'AI system that predicts product demand with 95% accuracy for a retail chain.',
        industry: 'Retail',
        image: 'https://placehold.co/400'
    },
    {
        title: 'Medical Diagnosis Assistant',
        description: 'Computer vision system that helps radiologists detect abnormalities in X-rays.',
        industry: 'Healthcare',
        image: 'https://placehold.co/400'
    },
    {
        title: 'Customer Sentiment Analysis',
        description: 'NLP platform that analyzes customer feedback across multiple channels.',
        industry: 'E-commerce',
        image: 'https://placehold.co/400'
    },
    {
        title: 'Fraud Detection System',
        description: 'Real-time ML model that identifies fraudulent transactions with 99.7% accuracy.',
        industry: 'Finance',
        image: 'https://placehold.co/400'
    },
    {
        title: 'Smart Manufacturing',
        description: 'AI-powered quality control system for a manufacturing plant.',
        industry: 'Manufacturing',
        image: 'https://placehold.co/400'
    },
    {
        title: 'Personalized Learning',
        description: 'Adaptive learning platform that customizes educational content for students.',
        industry: 'Education',
        image: 'https://placehold.co/400'
    }
]
</script>
<template>
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-dark mb-4" v-motion="{
                    initial: { opacity: 0, y: 20 },
                    enter: { opacity: 1, y: 0 }
                }">
                    What Our Clients Say
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" v-motion="{
                    initial: { opacity: 0, y: 20 },
                    enter: { opacity: 1, y: 0, transition: { delay: 100 } }
                }">
                    Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(testimonial, index) in testimonials" :key="testimonial.name"
                    class="bg-white p-8 rounded-xl shadow-sm" v-motion="{
                        initial: { opacity: 0, y: 20 },
                        enter: { opacity: 1, y: 0, transition: { delay: 200 + (index * 100) } }
                    }">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-semibold">{{ testimonial.name }}</h4>
                            <p class="text-gray-600 text-sm">{{ testimonial.position }}</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">{{ testimonial.quote }}</p>
                    <div class="flex text-yellow-400">
                        <IconStar v-for="i in 5" :key="i" class="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { IconStar } from '@tabler/icons-vue'

const testimonials = [
    {
        name: 'Sarah Johnson',
        position: 'CTO, RetailCorp',
        quote: 'The demand forecasting system reduced our inventory costs by 30% while improving product availability.',
        avatar: 'https://placehold.co/400'
    },
    {
        name: 'Michael Chen',
        position: 'CEO, HealthTech Solutions',
        quote: 'Their medical diagnosis assistant has become an indispensable tool for our radiologists, improving accuracy and efficiency.',
        avatar: 'https://placehold.co/400'
    },
    {
        name: 'David Rodriguez',
        position: 'VP of Operations, FinSecure',
        quote: 'The fraud detection system has saved us millions by identifying suspicious transactions in real-time.',
        avatar: 'https://placehold.co/400'
    }
]
</script>
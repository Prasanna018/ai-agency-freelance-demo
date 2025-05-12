// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/motion/nuxt'],
  css: ['~/assests/css/main.css'],
  app: {
    head: {
      title: 'AI Agency - Innovative AI Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'We provide cutting-edge AI solutions for businesses of all sizes. Our AI agency specializes in machine learning, computer vision, and natural language processing.'
        },
        { name: 'keywords', content: 'AI, Artificial Intelligence, Machine Learning, NLP, Computer Vision' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@tabler/icons-vue']
  }
})
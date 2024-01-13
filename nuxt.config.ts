// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/modules/auto-animate
// https://vee-validate.logaretm.com/v4/tutorials/basics/

// To Add:
// https://nuxt.com/modules/vue-transitions
// https://nuxt.com/modules/partytown

import path from 'path'

export default defineNuxtConfig({
  css: [
    'primeicons/primeicons.css',
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ],
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',

    // https://supabase.nuxtjs.org/get-started
    '@nuxtjs/supabase',

    // https://image.nuxt.com/get-started/installation
    '@nuxt/image',
  ],
  supabase: {
    redirect: false,
  },
  primevue: {
    // cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    options: { unstyled: true },
    importPT: {
      as: 'Lara',
      from: path.join(__dirname, './presets/lara/').replace(/\\/g, '/'),
    },
    components: {
      exclude: ['Chart'],
    },
  },
  tailwindcss: {
    config: {
      content: ['presets/**/*.{js,vue,ts}'],
      theme: {
        extend: {
          fontFamily: {
            'quicksand-bold': [
              'QuicksandBold',
              'Inter',
              '-apple-system',
              'BlinkMacSystemFont',
              'Segoe UI',
              'Roboto',
              'Oxygen',
              'Ubuntu',
              'Cantarell',
              'Fira Sans',
              'Droid Sans',
              'Helvetica Neue',
              'sans-serif',
            ],
          },
          colors: {
            'primary-50': 'rgb(var(--primary-50))',
            'primary-100': 'rgb(var(--primary-100))',
            'primary-200': 'rgb(var(--primary-200))',
            'primary-300': 'rgb(var(--primary-300))',
            'primary-400': 'rgb(var(--primary-400))',
            'primary-500': 'rgb(var(--primary-500))',
            'primary-600': 'rgb(var(--primary-600))',
            'primary-700': 'rgb(var(--primary-700))',
            'primary-800': 'rgb(var(--primary-800))',
            'primary-900': 'rgb(var(--primary-900))',
            'primary-950': 'rgb(var(--primary-950))',
            'surface-0': 'rgb(var(--surface-0))',
            'surface-50': 'rgb(var(--surface-50))',
            'surface-100': 'rgb(var(--surface-100))',
            'surface-200': 'rgb(var(--surface-200))',
            'surface-300': 'rgb(var(--surface-300))',
            'surface-400': 'rgb(var(--surface-400))',
            'surface-500': 'rgb(var(--surface-500))',
            'surface-600': 'rgb(var(--surface-600))',
            'surface-700': 'rgb(var(--surface-700))',
            'surface-800': 'rgb(var(--surface-800))',
            'surface-900': 'rgb(var(--surface-900))',
            'surface-950': 'rgb(var(--surface-950))',
          },
        },
      },
    },
  },
})

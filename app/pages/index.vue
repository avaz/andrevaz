<script setup lang="ts">
const route = useRoute()
const { localeLikePattern } = useContentLocale()

const { data: page } = await useAsyncData(`index-${route.path}`, () => {
  const q = queryCollection('index')
  if (localeLikePattern.value) {
    return q.where('path', 'LIKE', localeLikePattern.value).first()
  }
  return q.where('path', 'NOT LIKE', '/pt-br%').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})

defineOgImageComponent('Portfolio', {
  headline: 'andrevaz.com',
  title: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingBlog :page />
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </UPage>
</template>

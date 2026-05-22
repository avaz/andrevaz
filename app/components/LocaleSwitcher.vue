<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() =>
  locales.value.filter(l => l.code !== locale.value)
)

const flagMap: Record<string, string> = {
  'en': '🇺🇸',
  'pt-BR': '🇧🇷'
}

const labelMap: Record<string, string> = {
  'en': 'EN',
  'pt-BR': 'PT'
}
</script>

<template>
  <div class="flex items-center gap-1">
    <UTooltip
      v-for="loc in availableLocales"
      :key="loc.code"
      :text="loc.name"
    >
      <UButton
        :to="switchLocalePath(loc.code)"
        size="xs"
        color="neutral"
        variant="ghost"
        class="px-1.5 font-medium text-xs gap-1 cursor-pointer"
        @click="setLocale(loc.code)"
      >
        <span>{{ flagMap[loc.code] }}</span>
        <span class="hidden sm:inline">{{ labelMap[loc.code] }}</span>
      </UButton>
    </UTooltip>
  </div>
</template>

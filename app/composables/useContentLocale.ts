/**
 * Returns helpers for locale-aware content queries.
 *
 * English content lives at root paths (/blog/slug, /about, etc.)
 * Portuguese content lives at /pt-BR/* paths (/pt-BR/blog/slug, /pt-BR/about, etc.)
 *
 * Content paths therefore match i18n route paths directly:
 * - en: route /blog/slug → content path /blog/slug
 * - pt-BR: route /pt-BR/blog/slug → content path /pt-BR/blog/slug
 *
 * Uses useRoute() for SSR-safe locale detection instead of useI18n().
 */
export function useContentLocale() {
  const route = useRoute()

  /**
   * Whether the current route is pt-BR locale.
   * Derived from the route path which is always available during SSR.
   */
  const isPtBR = computed(() => route.path.startsWith('/pt-BR'))

  /**
   * Returns a LIKE pattern for filtering content paths by locale.
   * - pt-BR: '/pt-br%' (Nuxt Content lowercases directory names)
   * - en (default): null — use NOT LIKE '/pt-br%' in query
   */
  const localeLikePattern = computed(() =>
    isPtBR.value ? '/pt-br%' : null
  )

  return { localeLikePattern, isPtBR }
}

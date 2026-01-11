/**
 * Highlights Hook
 * Fetch highlights/stories data
 */

import { useQuery } from '@tanstack/react-query'
import { highlightsApi } from '../api/highlights.api'
import { queryKeys } from '@/lib/query/queryKeys'

export function useHighlights() {
  return useQuery({
    queryKey: queryKeys.highlights.list(),
    queryFn: async () => {
      return highlightsApi.getHighlights()
    },
  })
}

export function useHighlight(id: string) {
  return useQuery({
    queryKey: queryKeys.highlights.detail(id),
    queryFn: async () => {
      return highlightsApi.getHighlight(id)
    },
    enabled: !!id,
  })
}

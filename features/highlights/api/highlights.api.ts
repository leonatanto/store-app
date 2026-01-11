/**
 * Highlights API
 * Feature-specific API calls for highlights/stories
 */

import { apiClient } from '@/lib/api'
import { Highlight } from '../types/highlight.types'

export const highlightsApi = {
  /**
   * Get all highlights
   */
  getHighlights: async () => {
    return apiClient.get<Highlight[]>('/highlights')
  },

  /**
   * Get highlight by ID
   */
  getHighlight: async (id: string) => {
    return apiClient.get<Highlight>(`/highlights/${id}`)
  },
}

/**
 * Highlight Types
 * Feature-specific types for highlights/stories
 */

export interface Highlight {
  id: string
  title: string
  type: 'advantage' | 'announcement' | 'promotion'
  image: string
  video?: string
  content?: string
  duration?: number
  createdAt: string
  expiresAt?: string
}

export interface HighlightGroup {
  id: string
  name: string
  highlights: Highlight[]
  coverImage: string
}

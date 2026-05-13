export interface Reference {
  id: number
  category: string
  authors: string
  year: string
  title: string
  source: string
  link?: string
  details?: string
}

export interface ReferenceCategory {
  name: string
  color: string
  count: number
}

export interface ResearchData {
  title: string
  background: string
  problem: string
  objectives: string[]
  hypothesis: {
    null: string
    alternative: string
    interpretation: string
  }
  significance: string[]
  scope: string
  limitations: string
  locale: string
}

export interface MethodologyStep {
  id: number
  title: string
  description: string
  icon: string
}

export interface ChartDataPoint {
  name: string
  value: number
  color: string
  unit?: string
}

export interface TTestResult {
  tValue: number
  pValue: number
  interpretation: string
  df: number
}

export interface TeamMember {
  name: string
  role: string
  initials: string
}
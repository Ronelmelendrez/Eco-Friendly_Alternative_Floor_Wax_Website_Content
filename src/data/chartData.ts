export const frictionTrials = {
  alternative: {
    angle19: [3.29, 2.16, 1.63],
    angle25: [1.19, 1.04, 1.06],
    mean: 1.728
  },
  commercial: {
    angle19: [3.19, 2.20, 1.72],
    angle25: [1.17, 1.08, 1.14],
    mean: 1.75
  }
}

export const shininessTrials = {
  alternative: [13, 14, 12],
  commercial: [12, 11, 11],
  alternativeMean: 13,
  commercialMean: 11.333
}

export const frictionData = [
  { name: 'Alternative Floor Wax', value: 1.728, color: '#5C3A21' },
  { name: 'Commercial Floor Wax', value: 1.75, color: '#2D5A27' }
]

export const shininessData = [
  { name: 'Alternative Floor Wax', value: 13, color: '#5C3A21', unit: 'lux' },
  { name: 'Commercial Floor Wax', value: 11.333, color: '#2D5A27', unit: 'lux' }
]

export const tTestResults = {
  friction: {
    tValue: -0.746,
    pValue: 0.2445,
    interpretation: "No significant difference (p > 0.05)",
    df: 18
  },
  shininess: {
    tValue: 2.5,
    pValue: 0.065,
    interpretation: "No significant difference (p > 0.05)",
    df: 18
  }
}

export const comparisonStats = {
  frictionDifference: -0.022,
  shininessDifference: 1.667,
  overallConclusion: "The alternative floor wax demonstrates comparable performance to commercial wax with no statistically significant difference, establishing it as a feasible eco-friendly alternative."
}
import { Reference, ReferenceCategory } from '@/types/reference.types'

export const references: Reference[] = [
  // Banana Peel Studies
  {
    id: 1,
    category: 'Banana Peel Studies',
    authors: 'Alcaraz A., Dimaano K., Feliciano P., Ong K.',
    year: '2019',
    title: 'Effectiveness of Musa Paradisiaca (Banana) Peel as an Alternative to Commercial Floor Wax for Household Use in the Philippines',
    source: 'Asia Pacific Journal of Multidisciplinary Research, Vol. 7 No. 2',
    link: 'www.apjmr.com',
    details: 'CHED Recognized Journal'
  },
  {
    id: 2,
    category: 'Banana Peel Studies',
    authors: 'Angela A. et al.',
    year: '2019',
    title: 'Effectiveness of Musa Paradisiaca (Banana) Peel as an Alternative to Commercial Floor Wax for Household Use in the Philippines',
    source: 'Asia Pacific Journal of Multidisciplinary Research'
  },
  {
    id: 3,
    category: 'Banana Peel Studies',
    authors: 'Pyar H.',
    year: '2018',
    title: 'Chemical Composition of Banana',
    source: 'KK Peh Research Journal of Chemistry and Environment, 22(2), 108-111',
    details: 'Google Scholar publication'
  },

  // Coconut Oil and Coconut Studies
  {
    id: 4,
    category: 'Coconut Oil and Coconut Studies',
    authors: 'Patil, U., Benjakul, S., Prodpran, T., Senphan, T., & Cheetangdee, N.',
    year: '2017',
    title: 'A Comparative Study of the Physicochemical Properties and Emulsion Stability of Coconut Milk at Different Maturity Stages',
    source: 'Italian Journal of Food Science, 29(1), 145-157'
  },
  {
    id: 5,
    category: 'Coconut Oil and Coconut Studies',
    authors: 'Umesh Patil, Soottawat Benja',
    year: '2018',
    title: 'Coconut Milk and Coconut Oil: Their Manufacture Associated with Protein Functionality',
    source: 'International Journal of Food Science'
  },
  {
    id: 6,
    category: 'Coconut Oil and Coconut Studies',
    authors: 'Philippine Statistics Authority',
    year: '2022',
    title: 'Major Non-Food and Industrial Crops Quarterly Bulletin, October–December 2022',
    source: 'Philippine Statistics Authority'
  },

  // Floor Wax and Friction Studies
  {
    id: 7,
    category: 'Floor Wax and Friction Studies',
    authors: 'Kurt E. Beschorner and Anna B. Randolph',
    year: '2023',
    title: 'Friction Performance of Resilient Flooring Under Contaminant Conditions Relevant to Healthcare Settings',
    source: 'Journal of the American College of Radiology'
  },
  {
    id: 8,
    category: 'Floor Wax and Friction Studies',
    authors: 'Nannaji',
    year: '2015',
    title: 'OLABS – Friction Study',
    source: 'Online Laboratory for Physics'
  },
  {
    id: 9,
    category: 'Floor Wax and Friction Studies',
    authors: 'Sole, C.',
    year: '2022',
    title: '3 Simple Ways to Wax Hardwood Floors and Restore Shine',
    source: 'Better Homes & Gardens'
  },
  {
    id: 10,
    category: 'Floor Wax and Friction Studies',
    authors: 'Blumer, L.',
    year: '2018',
    title: '3 Benefits of Floor Waxing',
    source: 'CoBaStic Floor Wax'
  },

  // Materials Science and Engineering
  {
    id: 11,
    category: 'Materials Science and Engineering',
    authors: 'Amadhan M., Handayani M.',
    year: '2020',
    title: 'Characterization of Polymer-based Materials for Floor Coatings',
    source: 'IOP Conference Series: Materials Science and Engineering, 980(1), 012082'
  },
  {
    id: 12,
    category: 'Materials Science and Engineering',
    authors: 'Cordeiro N., Belgacem M., Torres I., Moura JCVP',
    year: '2004',
    title: 'Chemical Composition and Mechanical Properties of Cellulose Fiber',
    source: 'Industrial Crops and Products, 19(2), 147-154'
  },

  // Health and Safety Related Sources
  {
    id: 13,
    category: 'Health and Safety Related Sources',
    authors: 'Joanna Aglibot',
    year: '2018',
    title: '10 Olongapo High School Students Fall Ill from Floor Wax Smell',
    source: 'Philippine News Report'
  },
  {
    id: 14,
    category: 'Health and Safety Related Sources',
    authors: 'National Candle Association',
    year: '2019',
    title: 'Candle Science',
    source: 'National Candle Association'
  },

  // Research and Statistical Methodology
  {
    id: 15,
    category: 'Research and Statistical Methodology',
    authors: 'Kassiani N.',
    year: '2022',
    title: 'Scribbr Research Methodology Articles',
    source: 'Scribbr Academic Writing Platform'
  },
  {
    id: 16,
    category: 'Research and Statistical Methodology',
    authors: 'Saul Mcleod',
    year: '2023',
    title: 'P-Value and Statistical Significance: What It Is & Why It Matters',
    source: 'Simply Psychology'
  }
]

export const referenceCategories: ReferenceCategory[] = [
  { name: 'All References', color: 'gray', count: references.length },
  { name: 'Banana Peel Studies', color: 'yellow', count: references.filter(r => r.category === 'Banana Peel Studies').length },
  { name: 'Coconut Oil and Coconut Studies', color: 'amber', count: references.filter(r => r.category === 'Coconut Oil and Coconut Studies').length },
  { name: 'Floor Wax and Friction Studies', color: 'orange', count: references.filter(r => r.category === 'Floor Wax and Friction Studies').length },
  { name: 'Materials Science and Engineering', color: 'blue', count: references.filter(r => r.category === 'Materials Science and Engineering').length },
  { name: 'Health and Safety Related Sources', color: 'red', count: references.filter(r => r.category === 'Health and Safety Related Sources').length },
  { name: 'Research and Statistical Methodology', color: 'purple', count: references.filter(r => r.category === 'Research and Statistical Methodology').length }
]
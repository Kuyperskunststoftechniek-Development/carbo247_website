// All page content, one entry per full-screen section.
// Strings may contain inline HTML (only <sub>, <span class="hl">, <span class="accent">).
// Label/step positions are percentages of the background image (1672 × 941).
// focusX/focusY (0–1) pick which part of the photo stays visible when it is cropped.

import bg01 from '../assets/bg/01.webp'
import bg02 from '../assets/bg/02.webp'
import bg03 from '../assets/bg/03.webp'
import bg04 from '../assets/bg/04.webp'
import bg05 from '../assets/bg/05.webp'
import bg06 from '../assets/bg/06.webp'
import bg07 from '../assets/bg/07.webp'
import bg08 from '../assets/bg/08.webp'
import bg09 from '../assets/bg/09.webp'
import bg10 from '../assets/bg/10.webp'

const CO2 = 'CO<sub>2</sub>'

export const navLinks = [
  { label: 'Technology', href: '#carbotower' },
  { label: 'Why DAC', href: '#challenge' },
  { label: 'Sustainability', href: '#circularity' },
  { label: 'About', href: '#restoring' },
  { label: 'Contact', href: '#contact' },
]

export const contact = {
  company: 'CARBO247 BV',
  address: ['Diamantweg 48, 5527 LC Hapert,', 'The Netherlands'],
  email: 'info@carbo247.com',
  website: 'www.carbo247.com',
  linkedin: 'https://www.linkedin.com/',
  youtube: 'https://www.youtube.com/',
}

export const slides = [
  {
    id: 'home',
    bg: bg01,
    accent: '#2cc84a',
    shade: 'rgba(6, 22, 58, 0.62)',
    focusX: 0.75,
    variant: 'hero',
    title: [
      { text: `${CO2} FROM THE AIR.` },
      { text: 'READY TO USE.', accent: true },
    ],
    intro: `CARBO247 develops Direct Air Capture technology that removes ${CO2} directly from ambient air and makes it available as a concentrated product.`,
    tagline: 'Restoring the balance.',
    buttons: [
      { label: 'Discover our technology', href: '#carbotower', primary: true },
      { label: 'Why Direct Air Capture?', href: '#challenge' },
    ],
  },
  {
    id: 'carbon-cycle',
    bg: bg02,
    accent: '#22d06a',
    focusX: 0.85,
    focusY: 0.85,
    title: [{ text: 'THE CARBON' }, { text: 'CYCLE', accent: true }],
    intro:
      'For millions of years, carbon has circulated between the atmosphere, plants, animals and the soil.',
    features: [
      { icon: 'Leaf', text: `Plants capture ${CO2} from the air.` },
      { icon: 'PawPrint', text: 'Animals and natural decay return it.' },
      { icon: 'Layers', text: 'Part of that carbon becomes stored underground over geological time.' },
    ],
    closing: ['A natural cycle.', { text: 'A natural balance.', accent: true }],
    labels: [
      { type: 'pin', text: 'COAL', x: 81.8, y: 84 },
      { type: 'pin', text: 'OIL', x: 81.8, y: 93.2 },
    ],
  },
  {
    id: 'humanity',
    bg: bg03,
    accent: '#ff8a1c',
    closingAccent: '#22d06a',
    focusX: 0.85,
    focusY: 1,
    title: [{ text: 'HUMANITY' }, { text: 'CHANGED', accent: true }, { text: 'THE BALANCE', accent: true }],
    intro:
      'Human activity releases fossil carbon that has been stored underground for millions of years, adding it to the atmosphere faster than nature can remove it.',
    features: [
      { icon: 'Factory', text: 'Burning coal, oil and gas releases stored carbon.' },
      { icon: 'Cloud', text: `This adds extra ${CO2} to the atmosphere.` },
      { icon: 'Earth', text: `The result is a rising concentration of ${CO2}, changing the climate.` },
    ],
    closing: ['A disrupted balance.', { text: 'A shared challenge.', accent: true }],
    labels: [
      { type: 'pin', text: 'COAL', x: 82.5, y: 82.7 },
      { type: 'pin', text: 'OIL', x: 82.5, y: 92.2 },
      { type: 'float', text: CO2, x: 55.7, y: 18.9 },
      { type: 'float', text: CO2, x: 49.6, y: 30.8, small: true },
      { type: 'float', text: CO2, x: 64.2, y: 29.2 },
      { type: 'float', text: CO2, x: 84.5, y: 14.9 },
      { type: 'float', text: CO2, x: 89.7, y: 26, small: true },
    ],
  },
  {
    id: 'challenge',
    bg: bg04,
    accent: '#3fa9f5',
    closingAccent: '#22d06a',
    focusX: 0.7,
    title: [{ text: `${CO2} IN THE AIR` }, { text: 'IS HIGHLY DILUTED', accent: true }],
    intro: `${CO2} makes up only about 0.04% of the air we breathe (≈ 420 ppm). This means there are very few ${CO2} molecules in a very large volume of air, making it difficult to capture.`,
    features: [
      { icon: 'Atom', text: `Only ~0.04% ${CO2} in the atmosphere (≈ 420 ppm).` },
      { icon: 'Wind', text: `${CO2} molecules are widely distributed in a huge volume of air.` },
      { icon: 'Settings', text: 'This makes capture technically challenging and energy intensive.' },
    ],
    closing: [
      'Moving such large volumes of air requires a lot of energy.',
      { text: 'Is there a better way?', accent: true },
    ],
  },
  {
    id: 'nature',
    bg: bg05,
    accent: '#1ed37f',
    focusX: 0.7,
    title: [{ text: 'LOOK AT' }, { text: 'NATURE', accent: true }],
    intro: `Nature removes ${CO2} from the air and turns it into biomass through photosynthesis, using sunlight.`,
    subheading: 'Look at a tree:',
    features: [
      { icon: 'Leaf', text: 'Large contact surface with the air (leaves and branches).' },
      { icon: 'Wind', text: `Wind moves air and brings ${CO2} to the leaves.` },
      { icon: 'TreeDeciduous', text: `${CO2} is stored in biomass (trunk, branches, leaves).` },
      { icon: 'Sun', text: 'Sunlight provides the energy.' },
    ],
    closing: ['Nature <span class="accent">knows best.</span>'],
  },
  {
    id: 'carbotower',
    bg: bg06,
    accent: '#1ed37f',
    focusX: 0.65,
    eyebrow: 'Our solution',
    title: [{ text: 'CARBOTOWER', accent: true }],
    features: [
      { icon: 'Leaf', text: 'Large contact surface with the air.' },
      { icon: 'Wind', text: 'Wind moves air through the tower.' },
      { icon: 'Droplet', text: `${CO2} is captured in a special non-toxic liquid.` },
      { icon: 'FlaskConical', text: 'Powered by safe, regenerable chemistry.' },
    ],
    closing: [
      `Wind <span class="accent">→</span> Air in <span class="accent">→</span> ${CO2} out.`,
      { text: 'Just like a tree.', accent: true },
    ],
  },
  {
    id: 'carboplate',
    bg: bg07,
    accent: '#2ee0a4',
    focusX: 0.8,
    eyebrow: `Making the ${CO2} available`,
    titleCase: 'mixed',
    title: [{ parts: [{ text: 'Carbo' }, { text: 'Plate', accent: true }] }],
    features: [
      {
        icon: 'Heater',
        iconColor: '#ff6a2b',
        text: `The ${CO2}-rich liquid from the CarboTower is <span class="hl">heated in the CarboPlate</span> using a <span class="hl">heat pump.</span>`,
      },
      { icon: 'Bubbles', text: `This <span class="hl">releases pure ${CO2}</span> and regenerates the capture liquid.` },
      {
        icon: 'RefreshCw',
        iconColor: '#2ee0a4',
        text: 'The liquid is <span class="hl">cooled and returned</span> to the CarboTower for continuous use.',
      },
      { icon: 'Zap', text: 'Powered by electricity from <span class="hl">renewable sources.</span>' },
    ],
    closing: ['Capture. Regenerate. Repeat.', { text: 'Sustainable.', accent: true }],
  },
  {
    id: 'circularity',
    bg: bg08,
    accent: '#2ee0b4',
    focusX: 1,
    focusY: 0.6,
    titleCase: 'mixed',
    titleRule: true,
    title: [{ text: 'Designed' }, { parts: [{ text: 'for ' }, { text: 'circularity.', accent: true }] }],
    paragraphs: [
      'Both nature and CARBO247 are built on circularity.',
      `In nature, a tree grows from a seed, uses ${CO2} from the air, returns leaves and branches to the soil, and the nutrients enable new life.`,
      'Our technology follows the same principle. CarboTowers and CarboPlates are made from recycled plastic, produced with 3D printing, operate for more than 15 years, and are fully recyclable at the end of life.',
    ],
    closingSize: 'lg',
    closing: ['A real', { text: 'solution.', accent: true }],
    labels: [
      { type: 'step', title: '1. Recycled granulate', text: 'From existing plastic waste', x: 77.8, y: 19.5, anchor: 'bottom' },
      { type: 'step', title: '2. 3D printing', text: 'Towers and plates produced from granulate', x: 84.5, y: 29, anchor: 'left' },
      { type: 'step', title: '3. Operational life', text: 'CarboTowers and CarboPlates in operation for 15+ years', x: 77.8, y: 85, anchor: 'top' },
      { type: 'step', title: '4. End of life', text: 'Shredding into granulate', x: 59.5, y: 31, anchor: 'left' },
    ],
  },
  {
    id: 'system',
    bg: bg09,
    accent: '#1cc4c0',
    focusX: 0.7,
    titleCase: 'mixed',
    topRule: true,
    title: [{ text: 'From one tower' }, { text: 'to a complete' }, { text: 'DAC plant.', accent: true }],
    paragraphs: [
      `A single CarboTower captures ${CO2} from the air using wind and a large contact surface.`,
      "Multiple towers, together with CarboPlates for regeneration, form a complete DAC plant. The modular design allows each DAC plant to be tailored to the customer's needs.",
      'The plant operates on renewable electricity, can be integrated with local energy sources, and fits into the surrounding landscape.',
    ],
    endRule: true,
  },
  {
    id: 'restoring',
    bg: bg10,
    accent: '#1cc6d6',
    focusX: 0.7,
    titleCase: 'mixed',
    topRule: true,
    title: [{ text: 'Restoring' }, { text: 'the balance.', accent: true }],
    paragraphs: [
      `CARBO247 removes ${CO2} from the atmosphere and makes it available as a valuable product.`,
      'We do this in a way that works with nature, not against it. CARBO247 complements the natural carbon cycle, it does not replace forests, plants or ecosystems. Learning from nature’s principles that have worked for millions of years.',
    ],
  },
]

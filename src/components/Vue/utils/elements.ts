export interface Element {
  atomicNumber: number;
  symbol: string;
  weight: string;
  name: string;
  group: string;
  rowStart: number;
  colStart: number;
}

export const elements: Element[] = [
  // Row 1
  {
    atomicNumber: 1,
    name: 'Hydrogen',
    symbol: 'H',
    weight: '1.008',
    group: 'nonmetal',
    rowStart: 1,
    colStart: 1,
  },
  {
    atomicNumber: 2,
    name: 'Helium',
    symbol: 'He',
    weight: '4.0026',
    group: 'nobleGas',
    rowStart: 1,
    colStart: 18,
  },

  // Row 2
  {
    atomicNumber: 3,
    name: 'Lithium',
    symbol: 'Li',
    weight: '6.94',
    group: 'alkaliMetal',
    rowStart: 2,
    colStart: 1,
  },
  {
    atomicNumber: 4,
    name: 'Beryllium',
    symbol: 'Be',
    weight: '9.0122',
    group: 'alkalineEarth',
    rowStart: 2,
    colStart: 2,
  },
  {
    atomicNumber: 5,
    name: 'Boron',
    symbol: 'B',
    weight: '10.81',
    group: 'metalloid',
    rowStart: 2,
    colStart: 13,
  },
  {
    atomicNumber: 6,
    name: 'Carbon',
    symbol: 'C',
    weight: '12.011',
    group: 'nonmetal',
    rowStart: 2,
    colStart: 14,
  },
  {
    atomicNumber: 7,
    name: 'Nitrogen',
    symbol: 'N',
    weight: '14.007',
    group: 'nonmetal',
    rowStart: 2,
    colStart: 15,
  },
  {
    atomicNumber: 8,
    name: 'Oxygen',
    symbol: 'O',
    weight: '15.999',
    group: 'nonmetal',
    rowStart: 2,
    colStart: 16,
  },
  {
    atomicNumber: 9,
    name: 'Fluorine',
    symbol: 'F',
    weight: '18.998',
    group: 'halogen',
    rowStart: 2,
    colStart: 17,
  },
  {
    atomicNumber: 10,
    name: 'Neon',
    symbol: 'Ne',
    weight: '20.180',
    group: 'nobleGas',
    rowStart: 2,
    colStart: 18,
  },

  // Row 3
  {
    atomicNumber: 11,
    name: 'Sodium',
    symbol: 'Na',
    weight: '22.990',
    group: 'alkaliMetal',
    rowStart: 3,
    colStart: 1,
  },
  {
    atomicNumber: 12,
    name: 'Magnesium',
    symbol: 'Mg',
    weight: '24.305',
    group: 'alkalineEarth',
    rowStart: 3,
    colStart: 2,
  },
  {
    atomicNumber: 13,
    name: 'Aluminum',
    symbol: 'Al',
    weight: '26.982',
    group: 'postTransitionMetal',
    rowStart: 3,
    colStart: 13,
  },
  {
    atomicNumber: 14,
    name: 'Silicon',
    symbol: 'Si',
    weight: '28.085',
    group: 'metalloid',
    rowStart: 3,
    colStart: 14,
  },
  {
    atomicNumber: 15,
    name: 'Phosphorus',
    symbol: 'P',
    weight: '30.974',
    group: 'nonmetal',
    rowStart: 3,
    colStart: 15,
  },
  {
    atomicNumber: 16,
    name: 'Sulfur',
    symbol: 'S',
    weight: '32.06',
    group: 'nonmetal',
    rowStart: 3,
    colStart: 16,
  },
  {
    atomicNumber: 17,
    name: 'Chlorine',
    symbol: 'Cl',
    weight: '35.45',
    group: 'halogen',
    rowStart: 3,
    colStart: 17,
  },
  {
    atomicNumber: 18,
    name: 'Argon',
    symbol: 'Ar',
    weight: '39.948',
    group: 'nobleGas',
    rowStart: 3,
    colStart: 18,
  },

  // Row 4
  {
    atomicNumber: 19,
    name: 'Potassium',
    symbol: 'K',
    weight: '39.098',
    group: 'alkaliMetal',
    rowStart: 4,
    colStart: 1,
  },
  {
    atomicNumber: 20,
    name: 'Calcium',
    symbol: 'Ca',
    weight: '40.078',
    group: 'alkalineEarth',
    rowStart: 4,
    colStart: 2,
  },
  {
    atomicNumber: 21,
    name: 'Scandium',
    symbol: 'Sc',
    weight: '44.956',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 3,
  },
  {
    atomicNumber: 22,
    name: 'Titanium',
    symbol: 'Ti',
    weight: '47.867',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 4,
  },
  {
    atomicNumber: 23,
    name: 'Vanadium',
    symbol: 'V',
    weight: '50.942',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 5,
  },
  {
    atomicNumber: 24,
    name: 'Chromium',
    symbol: 'Cr',
    weight: '51.996',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 6,
  },
  {
    atomicNumber: 25,
    name: 'Manganese',
    symbol: 'Mn',
    weight: '54.938',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 7,
  },
  {
    atomicNumber: 26,
    name: 'Iron',
    symbol: 'Fe',
    weight: '55.845',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 8,
  },
  {
    atomicNumber: 27,
    name: 'Cobalt',
    symbol: 'Co',
    weight: '58.933',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 9,
  },
  {
    atomicNumber: 28,
    name: 'Nickel',
    symbol: 'Ni',
    weight: '58.693',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 10,
  },
  {
    atomicNumber: 29,
    name: 'Copper',
    symbol: 'Cu',
    weight: '63.546',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 11,
  },
  {
    atomicNumber: 30,
    name: 'Zinc',
    symbol: 'Zn',
    weight: '65.38',
    group: 'transitionMetal',
    rowStart: 4,
    colStart: 12,
  },
  {
    atomicNumber: 31,
    name: 'Gallium',
    symbol: 'Ga',
    weight: '69.723',
    group: 'postTransitionMetal',
    rowStart: 4,
    colStart: 13,
  },
  {
    atomicNumber: 32,
    name: 'Germanium',
    symbol: 'Ge',
    weight: '72.63',
    group: 'metalloid',
    rowStart: 4,
    colStart: 14,
  },
  {
    atomicNumber: 33,
    name: 'Arsenic',
    symbol: 'As',
    weight: '74.922',
    group: 'metalloid',
    rowStart: 4,
    colStart: 15,
  },
  {
    atomicNumber: 34,
    name: 'Selenium',
    symbol: 'Se',
    weight: '78.971',
    group: 'nonmetal',
    rowStart: 4,
    colStart: 16,
  },
  {
    atomicNumber: 35,
    name: 'Bromine',
    symbol: 'Br',
    weight: '79.904',
    group: 'halogen',
    rowStart: 4,
    colStart: 17,
  },
  {
    atomicNumber: 36,
    name: 'Krypton',
    symbol: 'Kr',
    weight: '83.798',
    group: 'nobleGas',
    rowStart: 4,
    colStart: 18,
  },

  // Row 5
  {
    atomicNumber: 37,
    name: 'Rubidium',
    symbol: 'Rb',
    weight: '85.468',
    group: 'alkaliMetal',
    rowStart: 5,
    colStart: 1,
  },
  {
    atomicNumber: 38,
    name: 'Strontium',
    symbol: 'Sr',
    weight: '87.62',
    group: 'alkalineEarth',
    rowStart: 5,
    colStart: 2,
  },
  {
    atomicNumber: 39,
    name: 'Yttrium',
    symbol: 'Y',
    weight: '88.906',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 3,
  },
  {
    atomicNumber: 40,
    name: 'Zirconium',
    symbol: 'Zr',
    weight: '91.224',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 4,
  },
  {
    atomicNumber: 41,
    name: 'Niobium',
    symbol: 'Nb',
    weight: '92.906',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 5,
  },
  {
    atomicNumber: 42,
    name: 'Molybdenum',
    symbol: 'Mo',
    weight: '95.95',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 6,
  },
  {
    atomicNumber: 43,
    name: 'Technetium',
    symbol: 'Tc',
    weight: '98',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 7,
  },
  {
    atomicNumber: 44,
    name: 'Ruthenium',
    symbol: 'Ru',
    weight: '101.07',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 8,
  },
  {
    atomicNumber: 45,
    name: 'Rhodium',
    symbol: 'Rh',
    weight: '102.91',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 9,
  },
  {
    atomicNumber: 46,
    name: 'Palladium',
    symbol: 'Pd',
    weight: '106.42',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 10,
  },
  {
    atomicNumber: 47,
    name: 'Silver',
    symbol: 'Ag',
    weight: '107.87',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 11,
  },
  {
    atomicNumber: 48,
    name: 'Cadmium',
    symbol: 'Cd',
    weight: '112.41',
    group: 'transitionMetal',
    rowStart: 5,
    colStart: 12,
  },
  {
    atomicNumber: 49,
    name: 'Indium',
    symbol: 'In',
    weight: '114.82',
    group: 'postTransitionMetal',
    rowStart: 5,
    colStart: 13,
  },
  {
    atomicNumber: 50,
    name: 'Tin',
    symbol: 'Sn',
    weight: '118.71',
    group: 'postTransitionMetal',
    rowStart: 5,
    colStart: 14,
  },
  {
    atomicNumber: 51,
    name: 'Antimony',
    symbol: 'Sb',
    weight: '121.76',
    group: 'metalloid',
    rowStart: 5,
    colStart: 15,
  },
  {
    atomicNumber: 52,
    name: 'Tellurium',
    symbol: 'Te',
    weight: '127.60',
    group: 'metalloid',
    rowStart: 5,
    colStart: 16,
  },
  {
    atomicNumber: 53,
    name: 'Iodine',
    symbol: 'I',
    weight: '126.90',
    group: 'halogen',
    rowStart: 5,
    colStart: 17,
  },
  {
    atomicNumber: 54,
    name: 'Xenon',
    symbol: 'Xe',
    weight: '131.29',
    group: 'nobleGas',
    rowStart: 5,
    colStart: 18,
  },
  {
    atomicNumber: 55,
    name: 'Cesium',
    symbol: 'Cs',
    weight: '132.91',
    group: 'alkaliMetal',
    rowStart: 6,
    colStart: 1,
  },
  {
    atomicNumber: 56,
    name: 'Barium',
    symbol: 'Ba',
    weight: '137.33',
    group: 'alkalineEarth',
    rowStart: 6,
    colStart: 2,
  },
  {
    atomicNumber: 57,
    name: 'Lanthanum',
    symbol: 'La',
    weight: '138.91',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 4,
  },
  {
    atomicNumber: 58,
    name: 'Cerium',
    symbol: 'Ce',
    weight: '140.12',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 5,
  },
  {
    atomicNumber: 59,
    name: 'Praseodymium',
    symbol: 'Pr',
    weight: '140.91',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 6,
  },
  {
    atomicNumber: 60,
    name: 'Neodymium',
    symbol: 'Nd',
    weight: '144.24',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 7,
  },
  {
    atomicNumber: 61,
    name: 'Promethium',
    symbol: 'Pm',
    weight: '145',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 8,
  },
  {
    atomicNumber: 62,
    name: 'Samarium',
    symbol: 'Sm',
    weight: '150.36',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 9,
  },
  {
    atomicNumber: 63,
    name: 'Europium',
    symbol: 'Eu',
    weight: '151.96',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 10,
  },
  {
    atomicNumber: 64,
    name: 'Gadolinium',
    symbol: 'Gd',
    weight: '157.25',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 11,
  },
  {
    atomicNumber: 65,
    name: 'Terbium',
    symbol: 'Tb',
    weight: '158.93',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 12,
  },
  {
    atomicNumber: 66,
    name: 'Dysprosium',
    symbol: 'Dy',
    weight: '162.50',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 13,
  },
  {
    atomicNumber: 67,
    name: 'Holmium',
    symbol: 'Ho',
    weight: '164.93',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 14,
  },
  {
    atomicNumber: 68,
    name: 'Erbium',
    symbol: 'Er',
    weight: '167.26',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 15,
  },
  {
    atomicNumber: 69,
    name: 'Thulium',
    symbol: 'Tm',
    weight: '168.93',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 16,
  },
  {
    atomicNumber: 70,
    name: 'Ytterbium',
    symbol: 'Yb',
    weight: '173.05',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 17,
  },
  {
    atomicNumber: 71,
    name: 'Lutetium',
    symbol: 'Lu',
    weight: '174.97',
    group: 'lanthanide',
    rowStart: 9,
    colStart: 18,
  },

  {
    atomicNumber: 72,
    name: 'Hafnium',
    symbol: 'Hf',
    weight: '178.49',
    group: 'transitionMetal',
    rowStart: 6,
    colStart: 4,
  },
  {
    atomicNumber: 73,
    name: 'Tantalum',
    symbol: 'Ta',
    weight: '180.95',
    group: 'transitionMetal',
    rowStart: 6,
    colStart: 5,
  },
  {
    atomicNumber: 74,
    name: 'Tungsten',
    symbol: 'W',
    weight: '183.84',
    group: 'transitionMetal',
    rowStart: 6,
    colStart: 6,
  },
  {
    atomicNumber: 75,
    name: 'Rhenium',
    symbol: 'Re',
    weight: '186.21',
    group: 'transitionMetal',
    rowStart: 6,
    colStart: 7,
  },
  {
    atomicNumber: 76,
    name: 'Osmium',
    symbol: 'Os',
    weight: '190.23',
    group: 'transitionMetal',
    rowStart: 6,
    colStart: 8,
  },
  {
    atomicNumber: 77,
    name: 'Iridium',
    symbol: 'Ir',
    weight: '192.22',
    group: 'transitionMetal',
    rowStart: 6,
    colStart: 9,
  },
  {
    atomicNumber: 78,
    name: 'Platinum',
    symbol: 'Pt',
    weight: '195.08',
    group: 'transitionMetal',
    rowStart: 6,
    colStart: 10,
  },
  {
    atomicNumber: 79,
    name: 'Gold',
    symbol: 'Au',
    weight: '196.97',
    group: 'transitionMetal',
    rowStart: 6,
    colStart: 11,
  },
  {
    atomicNumber: 80,
    name: 'Mercury',
    symbol: 'Hg',
    weight: '200.59',
    group: 'transitionMetal',
    rowStart: 6,
    colStart: 12,
  },
  {
    atomicNumber: 81,
    name: 'Thallium',
    symbol: 'Tl',
    weight: '204.38',
    group: 'postTransitionMetal',
    rowStart: 6,
    colStart: 13,
  },
  {
    atomicNumber: 82,
    name: 'Lead',
    symbol: 'Pb',
    weight: '207.2',
    group: 'postTransitionMetal',
    rowStart: 6,
    colStart: 14,
  },
  {
    atomicNumber: 83,
    name: 'Bismuth',
    symbol: 'Bi',
    weight: '208.98',
    group: 'postTransitionMetal',
    rowStart: 6,
    colStart: 15,
  },
  {
    atomicNumber: 84,
    name: 'Polonium',
    symbol: 'Po',
    weight: '(209)',
    group: 'metalloid',
    rowStart: 6,
    colStart: 16,
  },
  {
    atomicNumber: 85,
    name: 'Astatine',
    symbol: 'At',
    weight: '(210)',
    group: 'halogen',
    rowStart: 6,
    colStart: 17,
  },
  {
    atomicNumber: 86,
    name: 'Radon',
    symbol: 'Rn',
    weight: '(222)',
    group: 'nobleGas',
    rowStart: 6,
    colStart: 18,
  },

  // Row 7
  {
    atomicNumber: 87,
    symbol: 'Fr',
    weight: '(223)',
    group: 'alkaliMetal',
    rowStart: 7,
    colStart: 1,
    name: 'Francium',
  },
  {
    atomicNumber: 88,
    symbol: 'Ra',
    weight: '(226)',
    group: 'alkalineEarth',
    rowStart: 7,
    colStart: 2,
    name: 'Radium',
  },
  {
    atomicNumber: 89,
    symbol: 'Ac',
    weight: '(227)',
    group: 'actinide',
    rowStart: 10,
    colStart: 4,
    name: 'Actinium',
  },
  {
    atomicNumber: 90,
    symbol: 'Th',
    weight: '232.04',
    group: 'actinide',
    rowStart: 10,
    colStart: 5,
    name: 'Thorium',
  },
  {
    atomicNumber: 91,
    symbol: 'Pa',
    weight: '231.04',
    group: 'actinide',
    rowStart: 10,
    colStart: 6,
    name: 'Protactinium',
  },
  {
    atomicNumber: 92,
    symbol: 'U',
    weight: '238.03',
    group: 'actinide',
    rowStart: 10,
    colStart: 7,
    name: 'Uranium',
  },
  {
    atomicNumber: 93,
    symbol: 'Np',
    weight: '(237)',
    group: 'actinide',
    rowStart: 10,
    colStart: 8,
    name: 'Neptunium',
  },
  {
    atomicNumber: 94,
    symbol: 'Pu',
    weight: '(244)',
    group: 'actinide',
    rowStart: 10,
    colStart: 9,
    name: 'Plutonium',
  },
  {
    atomicNumber: 95,
    symbol: 'Am',
    weight: '(243)',
    group: 'actinide',
    rowStart: 10,
    colStart: 10,
    name: 'Americium',
  },
  {
    atomicNumber: 96,
    symbol: 'Cm',
    weight: '(247)',
    group: 'actinide',
    rowStart: 10,
    colStart: 11,
    name: 'Curium',
  },
  {
    atomicNumber: 97,
    symbol: 'Bk',
    weight: '(247)',
    group: 'actinide',
    rowStart: 10,
    colStart: 12,
    name: 'Berkelium',
  },
  {
    atomicNumber: 98,
    symbol: 'Cf',
    weight: '(251)',
    group: 'actinide',
    rowStart: 10,
    colStart: 13,
    name: 'Californium',
  },
  {
    atomicNumber: 99,
    symbol: 'Es',
    weight: '(252)',
    group: 'actinide',
    rowStart: 10,
    colStart: 14,
    name: 'Einsteinium',
  },
  {
    atomicNumber: 100,
    symbol: 'Fm',
    weight: '(257)',
    group: 'actinide',
    rowStart: 10,
    colStart: 15,
    name: 'Fermium',
  },
  {
    atomicNumber: 101,
    symbol: 'Md',
    weight: '(258)',
    group: 'actinide',
    rowStart: 10,
    colStart: 16,
    name: 'Mendelevium',
  },
  {
    atomicNumber: 102,
    symbol: 'No',
    weight: '(259)',
    group: 'actinide',
    rowStart: 10,
    colStart: 17,
    name: 'Nobelium',
  },
  {
    atomicNumber: 103,
    symbol: 'Lr',
    weight: '(266)',
    group: 'actinide',
    rowStart: 10,
    colStart: 18,
    name: 'Lawrencium',
  },

  {
    atomicNumber: 104,
    symbol: 'Rf',
    weight: '(267)',
    group: 'transitionMetal',
    rowStart: 7,
    colStart: 4,
    name: 'Rutherfordium',
  },
  {
    atomicNumber: 105,
    symbol: 'Db',
    weight: '(270)',
    group: 'transitionMetal',
    rowStart: 7,
    colStart: 5,
    name: 'Dubnium',
  },
  {
    atomicNumber: 106,
    symbol: 'Sg',
    weight: '(271)',
    group: 'transitionMetal',
    rowStart: 7,
    colStart: 6,
    name: 'Seaborgium',
  },
  {
    atomicNumber: 107,
    symbol: 'Bh',
    weight: '(270)',
    group: 'transitionMetal',
    rowStart: 7,
    colStart: 7,
    name: 'Bohrium',
  },
  {
    atomicNumber: 108,
    symbol: 'Hs',
    weight: '(277)',
    group: 'transitionMetal',
    rowStart: 7,
    colStart: 8,
    name: 'Hassium',
  },
  {
    atomicNumber: 109,
    symbol: 'Mt',
    weight: '(278)',
    group: 'transitionMetal',
    rowStart: 7,
    colStart: 9,
    name: 'Meitnerium',
  },
  {
    atomicNumber: 110,
    symbol: 'Ds',
    weight: '(281)',
    group: 'transitionMetal',
    rowStart: 7,
    colStart: 10,
    name: 'Darmstadtium',
  },
  {
    atomicNumber: 111,
    symbol: 'Rg',
    weight: '(282)',
    group: 'transitionMetal',
    rowStart: 7,
    colStart: 11,
    name: 'Roentgenium',
  },
  {
    atomicNumber: 112,
    symbol: 'Cn',
    weight: '(285)',
    group: 'postTransitionMetal',
    rowStart: 7,
    colStart: 12,
    name: 'Copernicium',
  },
  {
    atomicNumber: 113,
    symbol: 'Nh',
    weight: '(286)',
    group: 'postTransitionMetal',
    rowStart: 7,
    colStart: 13,
    name: 'Nihonium',
  },
  {
    atomicNumber: 114,
    symbol: 'Fl',
    weight: '(289)',
    group: 'postTransitionMetal',
    rowStart: 7,
    colStart: 14,
    name: 'Flerovium',
  },
  {
    atomicNumber: 115,
    symbol: 'Mc',
    weight: '(290)',
    group: 'postTransitionMetal',
    rowStart: 7,
    colStart: 15,
    name: 'Moscovium',
  },
  {
    atomicNumber: 116,
    symbol: 'Lv',
    weight: '(293)',
    group: 'postTransitionMetal',
    rowStart: 7,
    colStart: 16,
    name: 'Livermorium',
  },
  {
    atomicNumber: 117,
    symbol: 'Ts',
    weight: '(294)',
    group: 'halogen',
    rowStart: 7,
    colStart: 17,
    name: 'Tennessine',
  },
  {
    atomicNumber: 118,
    symbol: 'Og',
    weight: '(294)',
    group: 'nobleGas',
    rowStart: 7,
    colStart: 18,
    name: 'Oganesson',
  },
];

const transport = [
    {
        id: 1,
        name: 'Sam-Backpack',
        capacityBox: [
            {
                name: 'On the backpack',
                capacity: 20,
                maxWeight: 'Unknow'
            },{
                name: 'Secure pouch',
                capacity: 8,
                maxWeight: 'Unknow'
            }
            /*
            ,{
                name: 'Right arm',
                capacity: 1,
                maxWeight: undefined
            },{
                name: 'Left arm',
                capacity: 1,
                maxWeight: undefined
            },{
                name: 'Right leg',
                capacity: 1,
                maxWeight: undefined
            },{
                name: 'Left leg',
                capacity: 1,
                maxWeight: undefined
            },
            */
        ],
    },
    {
        id: 2,
        name: 'Motorbike',
        capacityBox: [
            {
                name: 'Left pouch',
                capacity: 6,
                maxWeight: 4000
            }, {
                name: 'Right pouch',
                capacity: 6,
                maxWeight: 4000
            }, {
                name: 'Sam-Backpack',
                capacity: 28,
                maxWeight: 'Unknow'
            }
        ]
    },
    {
        id: 3,
        name: 'Motorbike-Transport',
        capacityBox: [
            {
                name: 'Left pouch',
                capacity: 16,
                maxWeight: 4000
            }, {
                name: 'Right pouch',
                capacity: 16,
                maxWeight: 4000
            }, {
                name: 'Sam-Backpack',
                capacity: 28,
                maxWeight: 'Unknow'
            }
        ]
    },
    {
        id: 4,
        name: 'M.U.L.E Truck',
        capacityBox: [
            {
                name: 'Chest',
                capacity: 36,
                maxWeight: 4000
            },
            {
                name: 'Sam-Backpack',
                capacity: 8,
                maxWeight: 'Unknow'
            }
        ]
    },
    {
        id: 5,
        name: 'Truck',
        capacityBox: [
            {
                name: 'Chest',
                capacity: 168,
                maxWeight: 4000
            },
            {
                name: 'Sam-Backpack',
                capacity: 8,
                maxWeight: 'Unknow'
            }
        ]
    },
    {
        id: 6,
        name: 'Floating Carrier (Lv. 1)',
        capacityBox: [
            {
                name: 'Floating Carrier (Lv. 1)',
                capacity: 36,
                maxWeight: 300
            },
            {
                name: 'Sam-Backpack',
                capacity: 28,
                maxWeight: 'Unknow'
            }
        ]
    },
    {
        id: 7,
        name: 'Floating Carrier (Lv. 2)',
        capacityBox: [
            {
                name: 'Floating Carrier (Lv. 2)',
                capacity: 36,
                maxWeight: 600
            },
            {
                name: 'Sam-Backpack',
                capacity: 28,
                maxWeight: 'Unknow'
            }
        ]

    },
    {
        id: 8,
        name: ' 2 Floating Carrier (Lv. 1)',
        capacityBox: [
            {
                name: 'Floating Carrier (Lv. 1)',
                capacity: 36,
                maxWeight: 300
            },
            {
                name: 'Floating Carrier (Lv. 1)',
                capacity: 36,
                maxWeight: 300
            },
            {
                name: 'Sam-Backpack',
                capacity: 28,
                maxWeight: 'Unknow'
            }
        ]
    },
    {
        id: 9,
        name: ' 2 Floating Carrier (Lv. 2)',
        capacityBox: [
            {
                name: 'Floating Carrier (Lv. 2)',
                capacity: 36,
                maxWeight: 600
            },
            {
                name: 'Floating Carrier (Lv. 2)',
                capacity: 36,
                maxWeight: 600
            },
            {
                name: 'Sam-Backpack',
                capacity: 28,
                maxWeight: 'Unknow'
            }
        ]
    }
]
const size = {
    nome: {
        name: 'None',
        space: 0
    },
    s: {
        name: 'S',
        space: 1
    },
    m: {
        name: 'M',
        space: 2
    },
    l: {
        name: 'L',
        space: 4
    },
    xl: {
        name: 'XL',
        space: 6
    }
}

const materials = [
    {
        name: 'Chiral crystals',
        split:
            [
                {
                    size: size.nome,
                    quantity: 1,
                    weight: 0
                }
            ]
    },
    {
        name: 'Resins',
        split:
            [
                {
                    size: size.s,
                    quantity: 40,
                    weight: 4
                },
                {
                    size: size.m,
                    quantity: 80,
                    weight: 8
                },
                {
                    size: size.l,
                    quantity: 160,
                    weight: 16
                },
                {
                    size: size.xl,
                    quantity: 320,
                    weight: 32
                },
                {
                    size: size.xl,
                    quantity: 480,
                    weight: 48
                },
                {
                    size: size.xl,
                    quantity: 640,
                    weight: 64
                },
                {
                    size: size.xl,
                    quantity: 800,
                    weight: 80
                }
            ]
    },
    {
        name: 'Metals',
        split:
            [
                {
                    size: size.s,
                    quantity: 50,
                    weight: 5
                },
                {
                    size: size.m,
                    quantity: 100,
                    weight: 10
                },
                {
                    size: size.l,
                    quantity: 200,
                    weight: 20
                },
                {
                    size: size.xl,
                    quantity: 400,
                    weight: 40
                },
                {
                    size: size.xl,
                    quantity: 600,
                    weight: 60
                },
                {
                    size: size.xl,
                    quantity: 800,
                    weight: 80
                },
                {
                    size: size.xl,
                    quantity: 800,
                    weight: 80
                }
            ]
    },
    {
        name: 'Ceramics',
        split:
            [
                {
                    size: size.s,
                    quantity: 40,
                    weight: 4
                },
                {
                    size: size.m,
                    quantity: 80,
                    weight: 8
                },
                {
                    size: size.l,
                    quantity: 160,
                    weight: 16
                },
                {
                    size: size.xl,
                    quantity: 320,
                    weight: 32
                },
                {
                    size: size.xl,
                    quantity: 480,
                    weight: 48
                },
                {
                    size: size.xl,
                    quantity: 640,
                    weight: 64
                },
                {
                    size: size.xl,
                    quantity: 800,
                    weight: 80
                }
            ]
    },
    {
        name: 'Chemicals',
        split:
            [
                {
                    size: size.s,
                    quantity: 30,
                    weight: 3
                },
                {
                    size: size.m,
                    quantity: 60,
                    weight: 6
                },
                {
                    size: size.l,
                    quantity: 120,
                    weight: 12
                },
                {
                    size: size.xl,
                    quantity: 240,
                    weight: 24
                },
                {
                    size: size.xl,
                    quantity: 360,
                    weight: 36
                },
                {
                    size: size.xl,
                    quantity: 480,
                    weight: 48
                },
                {
                    size: size.xl,
                    quantity: 600,
                    weight: 60
                }
            ]
    },
    {
        name: 'Special alloys',
        split:
            [
                {
                    size: size.s,
                    quantity: 60,
                    weight: 6
                },
                {
                    size: size.m,
                    quantity: 120,
                    weight: 12
                },
                {
                    size: size.l,
                    quantity: 240,
                    weight: 24
                },
                {
                    size: size.xl,
                    quantity: 480,
                    weight: 48
                },
                {
                    size: size.xl,
                    quantity: 720,
                    weight: 72
                },
                {
                    size: size.xl,
                    quantity: 960,
                    weight: 96
                },
                {
                    size: size.xl,
                    quantity: 1200,
                    weight: 120
                }
            ]
    }
]
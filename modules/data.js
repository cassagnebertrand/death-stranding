const sam = {
    name: 'Sam',
    capacity: 28
}
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
                    weight: 1000
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
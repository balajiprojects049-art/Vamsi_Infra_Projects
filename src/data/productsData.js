export const productsData = [
    {
        id: 1,
        name: 'Cat Eye Road Stud (Reflective)',
        category: 'road-studs',
        categoryName: 'Road Studs',
        image: '/images/products/cat-eye-stud.jpg',
        description: 'High-quality reflective cat eye road studs with excellent retroreflectivity for lane marking.',
        specifications: [
            'Material: Aluminum/Plastic body',
            'Reflectors: Glass/Ceramic',
            'Colors: White, Yellow, Red, Green',
            'Load bearing: >20 tons',
            'Lifespan: 5+ years'
        ],
        price: 'Contact for quote'
    },
    {
        id: 2,
        name: 'Solar Road Stud',
        category: 'road-studs',
        categoryName: 'Road Studs',
        image: '/images/services/road-studs.jpg',
        description: 'Solar-powered LED road studs providing continuous illumination without external power.',
        specifications: [
            'Solar panel: Monocrystalline',
            'Battery: 600mAh Ni-MH',
            'LED: 6-8 high-brightness',
            'Waterproof: IP68',
            'Visibility: 800+ meters'
        ],
        price: 'Contact for quote'
    },
    {
        id: 3,
        name: 'Rubber Speed Breaker (Modular)',
        category: 'speed-breakers',
        categoryName: 'Speed Breakers',
        image: '/images/products/speed-breaker.jpg',
        description: 'Heavy-duty rubber speed breakers with reflective markers for traffic calming.',
        specifications: [
            'Material: Recycled rubber',
            'Size: 500x350x50mm (per module)',
            'Load capacity: 40 tons',
            'Reflectors: Yellow/White',
            'Easy installation with bolts'
        ],
        price: 'Contact for quote'
    },
    {
        id: 4,
        name: 'Traffic Cone (750mm)',
        category: 'cones-delineators',
        categoryName: 'Cones & Delineators',
        image: '/images/products/traffic-cone.jpg',
        description: 'High-visibility traffic cones with reflective collars for temporary traffic control.',
        specifications: [
            'Height: 750mm',
            'Material: PVC/PE',
            'Base: Heavy weighted',
            'Reflective: 2 collars',
            'Color: Orange with white bands'
        ],
        price: 'Contact for quote'
    },
    {
        id: 5,
        name: 'Flexible Post Delineator',
        category: 'cones-delineators',
        categoryName: 'Cones & Delineators',
        image: '/images/services/delineators.jpg',
        description: 'Flexible delineator posts that return to upright position after impact.',
        specifications: [
            'Height: 750mm/1000mm',
            'Material: PU/Rubber',
            'Reflector: Class A sheeting',
            'Base: Rubber/Steel anchor',
            'Colors: Red, Yellow, White'
        ],
        price: 'Contact for quote'
    },
    {
        id: 6,
        name: 'Solar Blinker (Single Side)',
        category: 'solar-products',
        categoryName: 'Solar Products',
        image: '/images/services/solar-products.jpg',
        description: 'Solar-powered LED blinker for warning and hazard marking on roads.',
        specifications: [
            'Solar panel: 5W',
            'Battery: 3.7V 2000mAh',
            'LED: Super bright yellow',
            'Flash rate: 60-80/min',
            'Waterproof: IP65'
        ],
        price: 'Contact for quote'
    },
    {
        id: 7,
        name: 'Regulatory Sign Board',
        category: 'sign-boards',
        categoryName: 'Sign Boards',
        image: '/images/services/sign-boards.jpg',
        description: 'IRC:67 compliant regulatory sign boards with high-intensity reflective sheeting.',
        specifications: [
            'Size: As per IRC:67',
            'Material: Aluminum sheet',
            'Sheeting: Class A/B/C',
            'Post: MS pipe galvanized',
            'Warranty: 5-7 years'
        ],
        price: 'Contact for quote'
    },
    {
        id: 8,
        name: 'Warning Sign Board',
        category: 'sign-boards',
        categoryName: 'Sign Boards',
        image: '/images/services/sign-boards.jpg',
        description: 'Triangle warning signs for curves, intersections, and hazards as per IRC standards.',
        specifications: [
            'Shape: Triangular 900mm',
            'Material: Aluminum',
            'Sheeting: High-intensity grade',
            'Border: Red reflective',
            'Symbols: Black on yellow'
        ],
        price: 'Contact for quote'
    },
    {
        id: 9,
        name: 'Reflective Tape (Engineer Grade)',
        category: 'reflective-tapes',
        categoryName: 'Reflective Tapes',
        image: '/images/services/road-marking.jpg',
        description: 'High-quality engineer grade reflective tape for signs and marking.',
        specifications: [
            'Type: Engineer/High-intensity',
            'Width: 50mm to 1220mm',
            'Colors: White, Yellow, Red, Green',
            'Adhesive: Pressure sensitive',
            'Lifespan: 7-10 years'
        ],
        price: 'Contact for quote'
    },
    {
        id: 10,
        name: 'W-Beam Crash Barrier',
        category: 'barriers',
        categoryName: 'Crash Barriers',
        image: '/images/services/crash-barriers.jpg',
        description: 'Galvanized steel W-beam crash barrier for highway median and edge protection.',
        specifications: [
            'Beam: W-beam 4mm thick',
            'Post: MS post 165x65mm',
            'Galvanization: 600 GSM',
            'Span: 4.0 meters',
            'Height: 750mm from ground'
        ],
        price: 'Contact for quote'
    },
    {
        id: 11,
        name: 'Wheel Stopper (Parking)',
        category: 'parking-products',
        categoryName: 'Parking Products',
        image: '/images/products/speed-breaker.jpg',
        description: 'Heavy-duty rubber wheel stopper for parking lot vehicle positioning.',
        specifications: [
            'Length: 1650mm',
            'Material: Recycled rubber',
            'Color: Black with yellow stripes',
            'Installation: Bolt-down',
            'Weight: 10-12 kg'
        ],
        price: 'Contact for quote'
    },
    {
        id: 12,
        name: 'Road Safety Cone Bar',
        category: 'cones-delineators',
        categoryName: 'Cones & Delineators',
        image: '/images/products/traffic-cone.jpg',
        description: 'Reflective cone bars for linking traffic cones to create barriers.',
        specifications: [
            'Length: 2000mm',
            'Material: PVC pipe',
            'Reflective: Striped sheeting',
            'Fittings: Cone clip ends',
            'Colors: Red/White, Yellow/Black'
        ],
        price: 'Contact for quote'
    }
];

export const productCategories = [
    {
        id: 'all',
        name: 'All Products',
        icon: '🛠️',
        count: 50
    },
    {
        id: 'road-studs',
        name: 'Road Studs',
        icon: '💎',
        count: 8
    },
    {
        id: 'speed-breakers',
        name: 'Speed Breakers',
        icon: '⚡',
        count: 6
    },
    {
        id: 'cones-delineators',
        name: 'Cones & Delineators',
        icon: '🔶',
        count: 10
    },
    {
        id: 'solar-products',
        name: 'Solar Products',
        icon: '☀️',
        count: 7
    },
    {
        id: 'sign-boards',
        name: 'Sign Boards',
        icon: '🚸',
        count: 12
    },
    {
        id: 'reflective-tapes',
        name: 'Reflective Tapes',
        icon: '📏',
        count: 5
    },
    {
        id: 'barriers',
        name: 'Crash Barriers',
        icon: '🛡️',
        count: 4
    },
    {
        id: 'parking-products',
        name: 'Parking Products',
        icon: '🅿️',
        count: 8
    }
];

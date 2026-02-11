export interface Product {
    id: string;
    name: string;
    price: number;
    category: "Huipil" | "Joyería" | "Accesorios" | "Ropa";
    artisan: {
        id: string;
        name: string;
        location: string;
    };
    image: string;
    isVerified: boolean;
    color: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Huipil de Cadentilla Rojo",
        price: 3500,
        category: "Huipil",
        artisan: {
            id: "a1",
            name: "María López",
            location: "Juchitán, Oaxaca"
        },
        image: "/images/huipil-rojo.jpg", // Placeholder
        isVerified: true,
        color: "Rojo"
    },
    {
        id: "2",
        name: "Vestido Bordado a Mano",
        price: 4200,
        category: "Ropa",
        artisan: {
            id: "a2",
            name: "Juana Martínez",
            location: "Tehuantepec, Oaxaca"
        },
        image: "/images/vestido-negro.jpg",
        isVerified: true,
        color: "Negro"
    },
    {
        id: "3",
        name: "Collar de Filigrana de Oro",
        price: 1500,
        category: "Joyería",
        artisan: {
            id: "a3",
            name: "Taller Hermanos García",
            location: "Juchitán, Oaxaca"
        },
        image: "/images/collar-filigrana.jpg",
        isVerified: true,
        color: "Dorado"
    },
    {
        id: "4",
        name: "Bolsa Tejida de Palma",
        price: 850,
        category: "Accesorios",
        artisan: {
            id: "a4",
            name: "Rosa Elena",
            location: "San Mateo del Mar"
        },
        image: "/images/bolsa-palma.jpg",
        isVerified: true,
        color: "Beige"
    },
    {
        id: "5",
        name: "Falda de Enredo Tradicional",
        price: 2800,
        category: "Ropa",
        artisan: {
            id: "a2",
            name: "Juana Martínez",
            location: "Tehuantepec, Oaxaca"
        },
        image: "/images/falda-enredo.jpg",
        isVerified: true,
        color: "Morado"
    },
    {
        id: "6",
        name: "Huipil Corto Geométrico",
        price: 1800,
        category: "Huipil",
        artisan: {
            id: "a1",
            name: "María López",
            location: "Juchitán, Oaxaca"
        },
        image: "/images/huipil-geom.jpg",
        isVerified: true,
        color: "Azul"
    }
];

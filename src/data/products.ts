export interface Artisan {
    id: string;
    name: string;
    location: string;
    coordinates: { lat: number; lng: number };
    estimatedDelivery: string;
    story: string;
    image: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    category: "Huipil" | "Joyería" | "Accesorios" | "Ropa" | "Hogar";
    artisan: Artisan;
    image: string;
    description: string;
    isVerified: boolean;
    color: string;
    measurements?: string;
    material?: string;
}

// ─── Artesanos ──────────────────────────────────────────────────

const artisans: Record<string, Artisan> = {
    maria: {
        id: "a1",
        name: "María López Pineda",
        location: "Juchitán de Zaragoza, Oaxaca",
        coordinates: { lat: 16.4361, lng: -95.0198 },
        estimatedDelivery: "5-7 días hábiles",
        story: "María aprendió el arte de la cadentilla de su abuela a los 12 años. Cada puntada geométrica representa las flores y la fauna del Istmo. Su taller da empleo a 5 mujeres de la comunidad y ha preservado técnicas que datan de más de 100 años.",
        image: "/images/artisan-maria.jpg"
    },
    juana: {
        id: "a2",
        name: "Juana Martínez Regalado",
        location: "Santo Domingo Tehuantepec, Oaxaca",
        coordinates: { lat: 16.3254, lng: -95.2395 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Juana es conocida por sus vibrantes bordados florales. Utiliza técnicas heredadas del siglo XIX, preservando el estilo clásico de la Tehuana. Cada pieza le toma entre 3 y 6 meses de trabajo dedicado.",
        image: "/images/artisan-juana.jpg"
    },
    garcia: {
        id: "a3",
        name: "Taller Hermanos García",
        location: "Juchitán de Zaragoza, Oaxaca",
        coordinates: { lat: 16.4361, lng: -95.0198 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Con más de 50 años de tradición, los Hermanos García funden el oro y la plata para crear joyas que han adornado a generaciones de mujeres zapotecas. Su taller es un referente de la filigrana oaxaqueña.",
        image: "/images/artisan-garcia.jpg"
    },
    rosa: {
        id: "a4",
        name: "Rosa Elena Cruz",
        location: "San Mateo del Mar, Oaxaca",
        coordinates: { lat: 16.2081, lng: -94.9847 },
        estimatedDelivery: "7-10 días hábiles",
        story: "Rosa recolecta y seca su propia palma. Sus tejidos son famosos por su durabilidad y por los patrones que imitan las olas del mar. Enseña su oficio a jóvenes de la comunidad Huave.",
        image: "/images/artisan-rosa.jpg"
    },
    doña_petrona: {
        id: "a5",
        name: "Petrona Ruiz Jiménez",
        location: "San Blas Atempa, Oaxaca",
        coordinates: { lat: 16.3180, lng: -95.2220 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Doña Petrona es una de las bordadoras más reconocidas de San Blas Atempa. Su especialidad son los huipiles de terciopelo con hilos de seda, piezas que pueden tardar hasta un año en completarse.",
        image: "/images/artisan-petrona.jpg"
    },
    elena: {
        id: "a6",
        name: "Elena Santiago Vásquez",
        location: "Ixtaltepec, Oaxaca",
        coordinates: { lat: 16.5530, lng: -95.1000 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Elena combina la tradición zapoteca con diseños contemporáneos. Sus prendas han sido exhibidas en ferias de moda artesanal en la Ciudad de México y Oaxaca capital.",
        image: "/images/artisan-elena.jpg"
    },
    don_felix: {
        id: "a7",
        name: "Félix Montaño López",
        location: "Unión Hidalgo, Oaxaca",
        coordinates: { lat: 16.4670, lng: -94.8330 },
        estimatedDelivery: "7-10 días hábiles",
        story: "Don Félix es maestro joyero de tercera generación. Se especializa en réplicas de joyas prehispánicas y en la técnica de granulado, creando texturas únicas en cada pieza de oro y plata.",
        image: "/images/artisan-felix.jpg"
    },
    carmen: {
        id: "a8",
        name: "Carmen Toledo Pineda",
        location: "Juchitán de Zaragoza, Oaxaca",
        coordinates: { lat: 16.4361, lng: -95.0198 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Carmen es tejedora de hamacas y manteles desde hace 30 años. Utiliza algodón orgánico teñido con tintes naturales como cochinilla e índigo, manteniendo vivos los colores de la tradición.",
        image: "/images/artisan-carmen.jpg"
    },
    lucia: {
        id: "a9",
        name: "Lucía Orozco Fuentes",
        location: "Santo Domingo Tehuantepec, Oaxaca",
        coordinates: { lat: 16.3254, lng: -95.2395 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Lucía comenzó bordando pequeños accesorios y hoy crea resplandores completos. Su trabajo ha sido galardonado en tres concursos estatales de artesanía textil.",
        image: "/images/artisan-lucia.jpg"
    },
    angel: {
        id: "a10",
        name: "Ángel Zárate Pineda",
        location: "San Blas Atempa, Oaxaca",
        coordinates: { lat: 16.3180, lng: -95.2220 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Ángel es tallador de jícaras y creador de artesanías en madera y barro. Sus piezas decorativas representan la cosmogonía zapoteca con un estilo único y detallado.",
        image: "/images/artisan-angel.jpg"
    },
};

// ─── Productos ──────────────────────────────────────────────────

export const products: Product[] = [
    // ══════════════════════════════════════════════════
    // HUIPILES (12)
    // ══════════════════════════════════════════════════
    {
        id: "1",
        name: "Huipil de Cadentilla Rojo",
        price: 3500,
        category: "Huipil",
        artisan: artisans.maria,
        image: "/images/huipil-rojo.jpg",
        description: "Huipil tradicional con intrincado trabajo de cadentilla sobre satín rojo. Las figuras geométricas representan flores y aves del Istmo. Pieza de gala perfecta para fiestas y velas.",
        isVerified: true,
        color: "Rojo",
        measurements: "Ancho: 60cm, Largo: 55cm",
        material: "Satín y Hilo de Algodón"
    },
    {
        id: "2",
        name: "Huipil Corto Geométrico Azul",
        price: 1800,
        category: "Huipil",
        artisan: artisans.maria,
        image: "/images/huipil-geom.jpg",
        description: "Versión moderna y corta del huipil tradicional, perfecta para combinar con jeans o faldas casuales. Mantiene la técnica auténtica de la cadentilla en tonos azules.",
        isVerified: true,
        color: "Azul",
        measurements: "Ancho: 55cm, Largo: 45cm",
        material: "Algodón"
    },
    {
        id: "3",
        name: "Huipil de Terciopelo Negro",
        price: 6500,
        category: "Huipil",
        artisan: artisans.doña_petrona,
        image: "/images/huipil-terciopelo-negro.jpg",
        description: "Majestuoso huipil de terciopelo negro bordado con hilos de seda en tonos vibrantes. Flores tropicales y guacamayas adornan esta pieza que tarda hasta 8 meses en completarse.",
        isVerified: true,
        color: "Negro",
        measurements: "Ancho: 65cm, Largo: 60cm",
        material: "Terciopelo y Seda"
    },
    {
        id: "4",
        name: "Huipil Cotidiano de Manta",
        price: 950,
        category: "Huipil",
        artisan: artisans.elena,
        image: "/images/huipil-manta.jpg",
        description: "Huipil de uso diario sobre tela de manta con bordados sencillos en punto de cruz. Cómodo y fresco, ideal para el clima cálido del Istmo.",
        isVerified: true,
        color: "Blanco",
        measurements: "Ancho: 58cm, Largo: 50cm",
        material: "Manta de Algodón"
    },
    {
        id: "5",
        name: "Huipil de Cadenilla Verde Esmeralda",
        price: 3200,
        category: "Huipil",
        artisan: artisans.maria,
        image: "/images/huipil-verde.jpg",
        description: "Huipil de gala con cadentilla sobre satín verde esmeralda. Los motivos florales en hilo dorado y blanco crean un contraste elegante y llamativo.",
        isVerified: true,
        color: "Verde",
        measurements: "Ancho: 62cm, Largo: 55cm",
        material: "Satín y Hilo de Algodón"
    },
    {
        id: "6",
        name: "Huipil Bordado Floral Multicolor",
        price: 4800,
        category: "Huipil",
        artisan: artisans.doña_petrona,
        image: "/images/huipil-floral.jpg",
        description: "Explosión de color en cada pétalo. Este huipil presenta un jardín bordado a mano con más de 15 tonos diferentes de hilo de seda sobre base de satín morado.",
        isVerified: true,
        color: "Morado",
        measurements: "Ancho: 63cm, Largo: 58cm",
        material: "Satín e Hilo de Seda"
    },
    {
        id: "7",
        name: "Huipil de Satín Rosa con Aves",
        price: 3800,
        category: "Huipil",
        artisan: artisans.juana,
        image: "/images/huipil-rosa.jpg",
        description: "Huipil de satín rosa pálido con bordados de aves tropicales y flores de buganvilia. Cada ave es bordada con detalle de pluma por pluma.",
        isVerified: true,
        color: "Rosa",
        measurements: "Ancho: 60cm, Largo: 56cm",
        material: "Satín y Bordado a Mano"
    },
    {
        id: "8",
        name: "Huipil Miniatura Infantil",
        price: 1200,
        category: "Huipil",
        artisan: artisans.elena,
        image: "/images/huipil-infantil.jpg",
        description: "Adorable huipil de cadentilla para niñas. Perfecto para que las nuevas generaciones vistan la tradición desde pequeñas. Disponible en varias tallas infantiles.",
        isVerified: true,
        color: "Amarillo",
        measurements: "Ancho: 40cm, Largo: 35cm (talla 4-6 años)",
        material: "Satín y Algodón"
    },
    {
        id: "9",
        name: "Huipil de Terciopelo Guinda",
        price: 7200,
        category: "Huipil",
        artisan: artisans.doña_petrona,
        image: "/images/huipil-guinda.jpg",
        description: "Pieza de colección en terciopelo guinda. Bordado con hilos metálicos dorados y flores de magnolia. Una obra maestra textil que representa meses de trabajo.",
        isVerified: true,
        color: "Guinda",
        measurements: "Ancho: 66cm, Largo: 62cm",
        material: "Terciopelo, Seda e Hilo Metálico"
    },
    {
        id: "10",
        name: "Huipil Contemporáneo Bicolor",
        price: 2200,
        category: "Huipil",
        artisan: artisans.elena,
        image: "/images/huipil-bicolor.jpg",
        description: "Diseño contemporáneo que fusiona la cadentilla tradicional con cortes modernos. Base en blanco y negro con detalles geométricos naranja.",
        isVerified: true,
        color: "Blanco y Negro",
        measurements: "Ancho: 56cm, Largo: 48cm",
        material: "Algodón y Lino"
    },
    {
        id: "11",
        name: "Huipil de Novia Blanco",
        price: 9500,
        category: "Huipil",
        artisan: artisans.juana,
        image: "/images/huipil-novia.jpg",
        description: "El huipil más especial: confeccionado para novias del Istmo. Blanco inmaculado con bordados de flores de azahar en hilo plateado. Cada pieza es única y personalizada.",
        isVerified: true,
        color: "Blanco",
        measurements: "A medida",
        material: "Organza, Satín y Bordado de Seda"
    },
    {
        id: "12",
        name: "Huipil de Cadentilla Naranja",
        price: 3300,
        category: "Huipil",
        artisan: artisans.maria,
        image: "/images/huipil-naranja.jpg",
        description: "Vibrante huipil en satín naranja con cadentilla en tonos tierra y blanco. Los patrones representan la flor de cempasúchil, símbolo de la vida y la celebración.",
        isVerified: true,
        color: "Naranja",
        measurements: "Ancho: 60cm, Largo: 54cm",
        material: "Satín y Algodón"
    },

    // ══════════════════════════════════════════════════
    // ROPA (10)
    // ══════════════════════════════════════════════════
    {
        id: "13",
        name: "Vestido Bordado a Mano Negro",
        price: 4200,
        category: "Ropa",
        artisan: artisans.juana,
        image: "/images/vestido-negro.jpg",
        description: "Vestido completo de terciopelo negro con bordados florales multicolores. El resplandor de las flores sobre el fondo oscuro evoca la elegancia de las noches del Istmo.",
        isVerified: true,
        color: "Negro",
        measurements: "Talla M, Ajustable",
        material: "Terciopelo y Hilo de Seda"
    },
    {
        id: "14",
        name: "Falda de Enredo Tradicional",
        price: 2800,
        category: "Ropa",
        artisan: artisans.juana,
        image: "/images/falda-enredo.jpg",
        description: "Falda de enredo con encaje de holán almidonado. Pieza esencial de la vestimenta de gala que aporta volumen y movimiento al caminar.",
        isVerified: true,
        color: "Morado",
        measurements: "Largo: 90cm, Cintura ajustable",
        material: "Algodón y Encaje"
    },
    {
        id: "15",
        name: "Blusa Tehuana Bordada",
        price: 1600,
        category: "Ropa",
        artisan: artisans.lucia,
        image: "/images/blusa-tehuana.jpg",
        description: "Blusa de manta con bordado floral en el pecho y mangas. Diseño cómodo para uso diario que mantiene la esencia de la vestimenta regional.",
        isVerified: true,
        color: "Blanco",
        measurements: "Disponible en S, M, L",
        material: "Manta de Algodón"
    },
    {
        id: "16",
        name: "Resplandor de Encaje Dorado",
        price: 1500,
        category: "Ropa",
        artisan: artisans.lucia,
        image: "/images/resplandor-dorado.jpg",
        description: "El resplandor es el tocado que enmarca el rostro de la Tehuana. Este modelo en encaje dorado es perfecto para fiestas y ceremonias tradicionales.",
        isVerified: true,
        color: "Dorado",
        measurements: "Talla única, ajustable",
        material: "Encaje y Tul"
    },
    {
        id: "17",
        name: "Vestido de Tehuana Rojo Completo",
        price: 8500,
        category: "Ropa",
        artisan: artisans.doña_petrona,
        image: "/images/vestido-rojo-completo.jpg",
        description: "Conjunto completo de Tehuana: huipil, falda de enredo y resplandor. Todo bordado a mano con motivos florales. La pieza estrella para las Velas del Istmo.",
        isVerified: true,
        color: "Rojo",
        measurements: "Talla única, ajustable",
        material: "Terciopelo, Satín, Encaje"
    },
    {
        id: "18",
        name: "Falda Larga de Holán Blanco",
        price: 2200,
        category: "Ropa",
        artisan: artisans.juana,
        image: "/images/falda-holan-blanco.jpg",
        description: "Falda larga con holán plisado y almidonado. Elegante en su sencillez, perfecta para combinar con cualquier huipil de gala.",
        isVerified: true,
        color: "Blanco",
        measurements: "Largo: 95cm",
        material: "Popelina y Encaje"
    },
    {
        id: "19",
        name: "Camisa de Manta para Caballero",
        price: 750,
        category: "Ropa",
        artisan: artisans.elena,
        image: "/images/camisa-manta.jpg",
        description: "Camisa de manta bordada con motivos geométricos zapotecas en el pecho. Fresca y elegante para el hombre que valora las raíces.",
        isVerified: true,
        color: "Beige",
        measurements: "Disponible en M, L, XL",
        material: "Manta de Algodón"
    },
    {
        id: "20",
        name: "Rebozo de Seda Natural",
        price: 3600,
        category: "Ropa",
        artisan: artisans.carmen,
        image: "/images/rebozo-seda.jpg",
        description: "Rebozo tejido en telar de cintura con seda natural. Los flecos trenzados a mano tardaron dos semanas en completarse. Pieza de vestir y de abrigo.",
        isVerified: true,
        color: "Azul Índigo",
        measurements: "Largo: 220cm, Ancho: 60cm",
        material: "Seda Natural"
    },
    {
        id: "21",
        name: "Vestido Casual Bordado Corto",
        price: 1900,
        category: "Ropa",
        artisan: artisans.elena,
        image: "/images/vestido-casual.jpg",
        description: "Vestido corto de algodón con bordados florales en el escote. Diseño moderno que lleva la tradición a lo cotidiano. Perfecto para el día a día.",
        isVerified: true,
        color: "Terracota",
        measurements: "Disponible en S, M, L",
        material: "Algodón Orgánico"
    },
    {
        id: "22",
        name: "Huaraches Bordados de Piel",
        price: 650,
        category: "Ropa",
        artisan: artisans.angel,
        image: "/images/huaraches.jpg",
        description: "Huaraches artesanales de piel con tiras bordadas con motivos zapotecas. Suela de caucho natural, cómodos y duraderos.",
        isVerified: true,
        color: "Café",
        measurements: "Disponible del 22 al 27",
        material: "Piel y Caucho Natural"
    },

    // ══════════════════════════════════════════════════
    // JOYERÍA (10)
    // ══════════════════════════════════════════════════
    {
        id: "23",
        name: "Collar de Filigrana de Oro",
        price: 1500,
        category: "Joyería",
        artisan: artisans.garcia,
        image: "/images/collar-filigrana.jpg",
        description: "Collar clásico de filigrana con baño de oro. Eslabones y colgantes trabajados uno a uno, creando una pieza ligera pero visualmente impactante.",
        isVerified: true,
        color: "Dorado",
        material: "Baño de Oro 14k sobre Plata"
    },
    {
        id: "24",
        name: "Aretes de Filigrana Largos",
        price: 850,
        category: "Joyería",
        artisan: artisans.garcia,
        image: "/images/aretes-filigrana.jpg",
        description: "Aretes largos de filigrana con diseño de flores colgantes. Livianos y elegantes, el complemento perfecto para cualquier atuendo del Istmo.",
        isVerified: true,
        color: "Plateado",
        material: "Plata .925"
    },
    {
        id: "25",
        name: "Pulsera de Cadena Tejida",
        price: 680,
        category: "Joyería",
        artisan: artisans.don_felix,
        image: "/images/pulsera-tejida.jpg",
        description: "Pulsera de eslabones tejidos a mano en plata. Diseño grueso y robusto inspirado en las cadenas tradicionales que portan las mujeres juchitecas.",
        isVerified: true,
        color: "Plateado",
        material: "Plata .925"
    },
    {
        id: "26",
        name: "Collar de Monedas Centenario",
        price: 12500,
        category: "Joyería",
        artisan: artisans.don_felix,
        image: "/images/collar-monedas.jpg",
        description: "El collar más emblemático de la Tehuana. Cadena gruesa de oro con monedas de centenario auténticas. Símbolo de estatus y tradición.",
        isVerified: true,
        color: "Dorado",
        material: "Oro 14k y Monedas Auténticas"
    },
    {
        id: "27",
        name: "Anillo de Filigrana con Coral",
        price: 950,
        category: "Joyería",
        artisan: artisans.garcia,
        image: "/images/anillo-coral.jpg",
        description: "Anillo de plata con trabajo de filigrana y piedra de coral rojo engarzada. Diseño que fusiona la joyería prehispánica con la influencia colonial.",
        isVerified: true,
        color: "Plateado con Rojo",
        material: "Plata .925 y Coral"
    },
    {
        id: "28",
        name: "Aretes de Ámbar y Plata",
        price: 720,
        category: "Joyería",
        artisan: artisans.don_felix,
        image: "/images/aretes-ambar.jpg",
        description: "Aretes redondos con ámbar natural de Chiapas engarzado en bisel de plata. Cada pieza de ámbar es única en su tonalidad y transparencia.",
        isVerified: true,
        color: "Ámbar",
        material: "Plata .925 y Ámbar Natural"
    },
    {
        id: "29",
        name: "Gargantilla de Plata Martillada",
        price: 1200,
        category: "Joyería",
        artisan: artisans.garcia,
        image: "/images/gargantilla-plata.jpg",
        description: "Gargantilla rígida de plata con acabado martillado a mano. Diseño minimalista que destaca la textura artesanal del metal.",
        isVerified: true,
        color: "Plateado",
        material: "Plata .925"
    },
    {
        id: "30",
        name: "Pulsera de Filigrana con Charms",
        price: 980,
        category: "Joyería",
        artisan: artisans.garcia,
        image: "/images/pulsera-charms.jpg",
        description: "Pulsera de cadena fina con pequeños dijes de filigrana: una tortuga, un corazón, una flor y una mariposa. Cada dije hecho a mano.",
        isVerified: true,
        color: "Dorado",
        material: "Baño de Oro sobre Plata"
    },
    {
        id: "31",
        name: "Broche de Filigrana Mariposa",
        price: 580,
        category: "Joyería",
        artisan: artisans.don_felix,
        image: "/images/broche-mariposa.jpg",
        description: "Broche decorativo en forma de mariposa con alas de filigrana. Perfecto para sujetar rebozos o como accesorio de solapa.",
        isVerified: true,
        color: "Plateado",
        material: "Plata .925"
    },
    {
        id: "32",
        name: "Cadena Gruesa Trenzada",
        price: 2800,
        category: "Joyería",
        artisan: artisans.don_felix,
        image: "/images/cadena-trenzada.jpg",
        description: "Cadena gruesa con eslabones trenzados a mano, típica de la joyería istmeña. Imponente y elegante, es la base de muchos collares tradicionales.",
        isVerified: true,
        color: "Dorado",
        material: "Baño de Oro 14k"
    },

    // ══════════════════════════════════════════════════
    // ACCESORIOS (8)
    // ══════════════════════════════════════════════════
    {
        id: "33",
        name: "Bolsa Tejida de Palma",
        price: 850,
        category: "Accesorios",
        artisan: artisans.rosa,
        image: "/images/bolsa-palma.jpg",
        description: "Bolsa tote tejida a mano con palma natural. Espaciosa y resistente, ideal para uso diario o para la playa. Incluye forro interior de tela.",
        isVerified: true,
        color: "Beige",
        material: "Palma Natural"
    },
    {
        id: "34",
        name: "Abanico Bordado de Seda",
        price: 450,
        category: "Accesorios",
        artisan: artisans.lucia,
        image: "/images/abanico-seda.jpg",
        description: "Abanico de varillas de madera con tela de seda bordada con flores. Accesorio indispensable en las fiestas del Istmo por el calor tropical.",
        isVerified: true,
        color: "Rojo",
        material: "Seda y Madera"
    },
    {
        id: "35",
        name: "Morral de Ixtle Bicolor",
        price: 620,
        category: "Accesorios",
        artisan: artisans.rosa,
        image: "/images/morral-ixtle.jpg",
        description: "Morral tejido con fibra de ixtle (maguey) en dos tonos. Ligero y ecológico, con correa larga cruzada. Ideal para llevar lo esencial.",
        isVerified: true,
        color: "Verde y Natural",
        material: "Fibra de Ixtle"
    },
    {
        id: "36",
        name: "Cinturón Bordado con Hebilla",
        price: 380,
        category: "Accesorios",
        artisan: artisans.elena,
        image: "/images/cinturon-bordado.jpg",
        description: "Cinturón de piel con franja central bordada con motivos geométricos. Hebilla de latón envejecido. Unisex.",
        isVerified: true,
        color: "Café",
        measurements: "Largo: 100cm, ajustable",
        material: "Piel y Bordado"
    },
    {
        id: "37",
        name: "Bolsa Clutch de Terciopelo",
        price: 750,
        category: "Accesorios",
        artisan: artisans.doña_petrona,
        image: "/images/clutch-terciopelo.jpg",
        description: "Clutch de terciopelo con bordado floral a mano. Forro de satín con bolsillo interno. El accesorio perfecto para acompañar un huipil de gala.",
        isVerified: true,
        color: "Negro",
        measurements: "25cm x 15cm",
        material: "Terciopelo Bordado"
    },
    {
        id: "38",
        name: "Canasta de Palma Grande",
        price: 520,
        category: "Accesorios",
        artisan: artisans.rosa,
        image: "/images/canasta-palma.jpg",
        description: "Canasta tejida de palma de tamaño grande. Perfecta para ir al mercado o como elemento decorativo. Asas reforzadas.",
        isVerified: true,
        color: "Natural",
        measurements: "Diámetro: 40cm, Alto: 25cm",
        material: "Palma Natural"
    },
    {
        id: "39",
        name: "Faja Tejida en Telar",
        price: 280,
        category: "Accesorios",
        artisan: artisans.carmen,
        image: "/images/faja-telar.jpg",
        description: "Faja tejida en telar de cintura con diseños de grecas. Tradicionalmente usada para sujetar la falda de enredo.",
        isVerified: true,
        color: "Multicolor",
        measurements: "Largo: 180cm, Ancho: 8cm",
        material: "Algodón Teñido"
    },
    {
        id: "40",
        name: "Sombrero de Palma Pintado",
        price: 350,
        category: "Accesorios",
        artisan: artisans.angel,
        image: "/images/sombrero-palma.jpg",
        description: "Sombrero de palma con ala ancha, pintado a mano con motivos de flores tropicales. Protección solar con estilo artesanal.",
        isVerified: true,
        color: "Natural con Pintura",
        measurements: "Ala: 10cm, Circunferencia: 56-58cm",
        material: "Palma y Pintura Acrílica"
    },

    // ══════════════════════════════════════════════════
    // HOGAR (5)
    // ══════════════════════════════════════════════════
    {
        id: "41",
        name: "Mantel Individual Bordado (Set x4)",
        price: 680,
        category: "Hogar",
        artisan: artisans.carmen,
        image: "/images/mantel-individual.jpg",
        description: "Set de 4 manteles individuales bordados con flores del Istmo. Cada mantel tiene un diseño ligeramente diferente. Lavables a máquina.",
        isVerified: true,
        color: "Blanco con Bordado",
        measurements: "45cm x 35cm (cada uno)",
        material: "Algodón Bordado"
    },
    {
        id: "42",
        name: "Hamaca Matrimonial de Algodón",
        price: 2400,
        category: "Hogar",
        artisan: artisans.carmen,
        image: "/images/hamaca-matrimonial.jpg",
        description: "Hamaca matrimonial tejida en telar con algodón orgánico. Resistente para soportar hasta 200 kg. Teñida con tintes naturales de cochinilla.",
        isVerified: true,
        color: "Rosa / Natural",
        measurements: "Largo total: 380cm, Cuerpo: 200cm",
        material: "Algodón Orgánico"
    },
    {
        id: "43",
        name: "Jícara Decorativa Tallada",
        price: 320,
        category: "Hogar",
        artisan: artisans.angel,
        image: "/images/jicara-tallada.jpg",
        description: "Jícara (bowl de calabaza) tallada a mano con motivos zapotecas. Puede usarse como centro de mesa o contenedor decorativo.",
        isVerified: true,
        color: "Negro Gravado",
        measurements: "Diámetro: 18cm",
        material: "Calabaza Natural Tallada"
    },
    {
        id: "44",
        name: "Camino de Mesa Tejido",
        price: 580,
        category: "Hogar",
        artisan: artisans.carmen,
        image: "/images/camino-mesa.jpg",
        description: "Camino de mesa tejido en telar de cintura con diseño de rombos. Colores teñidos con índigo y cochinilla. Pieza única.",
        isVerified: true,
        color: "Azul y Rojo",
        measurements: "Largo: 150cm, Ancho: 35cm",
        material: "Algodón Teñido Natural"
    },
    {
        id: "45",
        name: "Set de Servilletas Bordadas (x6)",
        price: 420,
        category: "Hogar",
        artisan: artisans.lucia,
        image: "/images/servilletas-bordadas.jpg",
        description: "Set de 6 servilletas de tela bordadas en las esquinas con flores de diferentes colores. Perfectas para una mesa con identidad.",
        isVerified: true,
        color: "Blanco con Multicolor",
        measurements: "40cm x 40cm (cada una)",
        material: "Lino y Bordado"
    },
];

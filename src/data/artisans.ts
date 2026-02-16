import { products, type Artisan } from "./products";

// ─── Extended Artisan Profile ────────────────────────────────────

export interface ArtisanProfile extends Artisan {
    slug: string;
    specialty: string;
    yearsExperience: number;
    techniques: string[];
    isVerified: boolean;
    verifiedSince: string;
    rating: number;
    totalReviews: number;
    totalSales: number;
    bio: string;
}

export interface Review {
    id: string;
    artisanId: string;
    productId?: string;
    productName?: string;
    customerName: string;
    customerLocation: string;
    customerAvatar?: string;
    isVerifiedPurchase: boolean;
    rating: number;
    title: string;
    comment: string;
    date: string;
    helpful: number;
}

// ─── Artisan Profiles ────────────────────────────────────────────

export const artisanProfiles: ArtisanProfile[] = [
    {
        id: "a1",
        slug: "maria-lopez",
        name: "María López Pineda",
        location: "Juchitán de Zaragoza, Oaxaca",
        coordinates: { lat: 16.4361, lng: -95.0198 },
        estimatedDelivery: "5-7 días hábiles",
        story: "María aprendió el arte de la cadentilla de su abuela a los 12 años. Cada puntada geométrica representa las flores y la fauna del Istmo. Su taller da empleo a 5 mujeres de la comunidad y ha preservado técnicas que datan de más de 100 años.",
        image: "/images/artisan-maria.jpg",
        specialty: "Bordado de Cadentilla",
        yearsExperience: 25,
        techniques: ["Cadentilla", "Punto de Cruz", "Deshilado"],
        isVerified: true,
        verifiedSince: "2024",
        rating: 4.9,
        totalReviews: 47,
        totalSales: 189,
        bio: "Maestra artesana con 25 años de experiencia en la técnica de cadentilla, una forma de bordado geométrico única del Istmo de Tehuantepec. María lidera un taller comunitario donde 5 mujeres crean piezas que preservan la identidad cultural zapoteca. Ha participado en más de 30 ferias artesanales nacionales.",
    },
    {
        id: "a2",
        slug: "juana-martinez",
        name: "Juana Martínez Regalado",
        location: "Santo Domingo Tehuantepec, Oaxaca",
        coordinates: { lat: 16.3254, lng: -95.2395 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Juana es conocida por sus vibrantes bordados florales. Utiliza técnicas heredadas del siglo XIX, preservando el estilo clásico de la Tehuana. Cada pieza le toma entre 3 y 6 meses de trabajo dedicado.",
        image: "/images/artisan-juana.jpg",
        specialty: "Bordado Floral",
        yearsExperience: 30,
        techniques: ["Bordado Floral", "Pepenado", "Bordado en Terciopelo"],
        isVerified: true,
        verifiedSince: "2023",
        rating: 4.8,
        totalReviews: 62,
        totalSales: 234,
        bio: "Con 30 años de oficio, Juana es una de las bordadoras más prolíficas de Tehuantepec. Sus vestidos y faldas de enredo son reconocidos por la vivacidad de sus flores y la precisión milimétrica de cada puntada. Ha vestido a reinas de las Velas y sus piezas se exhiben en museos de arte popular.",
    },
    {
        id: "a3",
        slug: "hermanos-garcia",
        name: "Taller Hermanos García",
        location: "Juchitán de Zaragoza, Oaxaca",
        coordinates: { lat: 16.4361, lng: -95.0198 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Con más de 50 años de tradición, los Hermanos García funden el oro y la plata para crear joyas que han adornado a generaciones de mujeres zapotecas. Su taller es un referente de la filigrana oaxaqueña.",
        image: "/images/artisan-garcia.jpg",
        specialty: "Filigrana en Oro y Plata",
        yearsExperience: 50,
        techniques: ["Filigrana", "Fundición", "Granulado", "Engarzado"],
        isVerified: true,
        verifiedSince: "2022",
        rating: 4.9,
        totalReviews: 85,
        totalSales: 412,
        bio: "El Taller Hermanos García es referente de la joyería del Istmo con medio siglo de tradición. Tres generaciones han perfeccionado el arte de la filigrana, creando collares, aretes y pulseras que son patrimonio cultural viviente. Sus piezas han sido reconocidas por FONART y exhibidas en el Museo de Arte Popular de la CDMX.",
    },
    {
        id: "a4",
        slug: "rosa-elena",
        name: "Rosa Elena Cruz",
        location: "San Mateo del Mar, Oaxaca",
        coordinates: { lat: 16.2081, lng: -94.9847 },
        estimatedDelivery: "7-10 días hábiles",
        story: "Rosa recolecta y seca su propia palma. Sus tejidos son famosos por su durabilidad y por los patrones que imitan las olas del mar. Enseña su oficio a jóvenes de la comunidad Huave.",
        image: "/images/artisan-rosa.jpg",
        specialty: "Tejido en Palma",
        yearsExperience: 20,
        techniques: ["Tejido de Palma", "Tejido de Ixtle", "Trenzado"],
        isVerified: true,
        verifiedSince: "2024",
        rating: 4.7,
        totalReviews: 31,
        totalSales: 98,
        bio: "Rosa es una artesana de la comunidad Huave de San Mateo del Mar. Recolecta su propia palma de los recorridos por la costa y la seca al sol durante semanas antes de tejerla. Sus diseños reflejan las olas del mar y la vida costera. Actualmente enseña a 8 jóvenes de su comunidad para mantener viva la tradición.",
    },
    {
        id: "a5",
        slug: "petrona-ruiz",
        name: "Petrona Ruiz Jiménez",
        location: "San Blas Atempa, Oaxaca",
        coordinates: { lat: 16.3180, lng: -95.2220 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Doña Petrona es una de las bordadoras más reconocidas de San Blas Atempa. Su especialidad son los huipiles de terciopelo con hilos de seda, piezas que pueden tardar hasta un año en completarse.",
        image: "/images/artisan-petrona.jpg",
        specialty: "Bordado en Terciopelo",
        yearsExperience: 40,
        techniques: ["Bordado en Terciopelo", "Bordado con Seda", "Bordado con Hilo Metálico"],
        isVerified: true,
        verifiedSince: "2022",
        rating: 5.0,
        totalReviews: 38,
        totalSales: 156,
        bio: "Con 40 años dedicados al bordado de terciopelo, Doña Petrona ha creado algunas de las piezas más codiciadas del Istmo. Cada huipil es una obra de arte que puede requerir hasta un año de trabajo paciente. Ha recibido el Premio Nacional de Artes y Tradiciones Populares y sus piezas se consideran de colección.",
    },
    {
        id: "a6",
        slug: "elena-santiago",
        name: "Elena Santiago Vásquez",
        location: "Ixtaltepec, Oaxaca",
        coordinates: { lat: 16.5530, lng: -95.1000 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Elena combina la tradición zapoteca con diseños contemporáneos. Sus prendas han sido exhibidas en ferias de moda artesanal en la Ciudad de México y Oaxaca capital.",
        image: "/images/artisan-elena.jpg",
        specialty: "Diseño Contemporáneo",
        yearsExperience: 15,
        techniques: ["Cadentilla Moderna", "Bordado a Máquina y Manual", "Teñido Natural"],
        isVerified: true,
        verifiedSince: "2024",
        rating: 4.6,
        totalReviews: 24,
        totalSales: 87,
        bio: "Elena representa la nueva generación de artesanas del Istmo. Formada en diseño textil, regresó a su comunidad para fusionar técnicas ancestrales con cortes y estilos modernos. Sus prendas cotidianas hacen accesible la tradición para el día a día, sin perder la esencia artesanal.",
    },
    {
        id: "a7",
        slug: "felix-montano",
        name: "Félix Montaño López",
        location: "Unión Hidalgo, Oaxaca",
        coordinates: { lat: 16.4670, lng: -94.8330 },
        estimatedDelivery: "7-10 días hábiles",
        story: "Don Félix es maestro joyero de tercera generación. Se especializa en réplicas de joyas prehispánicas y en la técnica de granulado, creando texturas únicas en cada pieza de oro y plata.",
        image: "/images/artisan-felix.jpg",
        specialty: "Joyería Prehispánica",
        yearsExperience: 35,
        techniques: ["Granulado", "Cera Perdida", "Martillado", "Repujado"],
        isVerified: true,
        verifiedSince: "2023",
        rating: 4.8,
        totalReviews: 53,
        totalSales: 198,
        bio: "Tercera generación de joyeros, Don Félix es un maestro en la técnica del granulado — diminutas esferas de metal soldadas para crear texturas fascinantes. Su especialidad son las réplicas de joyas prehispánicas zapotecas, recreadas con investigación arqueológica y pasión artesanal.",
    },
    {
        id: "a8",
        slug: "carmen-toledo",
        name: "Carmen Toledo Pineda",
        location: "Juchitán de Zaragoza, Oaxaca",
        coordinates: { lat: 16.4361, lng: -95.0198 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Carmen es tejedora de hamacas y manteles desde hace 30 años. Utiliza algodón orgánico teñido con tintes naturales como cochinilla e índigo, manteniendo vivos los colores de la tradición.",
        image: "/images/artisan-carmen.jpg",
        specialty: "Tejido en Telar de Cintura",
        yearsExperience: 30,
        techniques: ["Telar de Cintura", "Teñido con Cochinilla", "Teñido con Índigo"],
        isVerified: true,
        verifiedSince: "2023",
        rating: 4.7,
        totalReviews: 29,
        totalSales: 112,
        bio: "Carmen domina el telar de cintura, una técnica milenaria mesoamericana. Tiñe sus propios hilos con cochinilla, índigo y corteza de árbol, logrando colores vibrantes y duraderos sin químicos. Sus hamacas y textiles para el hogar son reconocidos por su suavidad y resistencia.",
    },
    {
        id: "a9",
        slug: "lucia-orozco",
        name: "Lucía Orozco Fuentes",
        location: "Santo Domingo Tehuantepec, Oaxaca",
        coordinates: { lat: 16.3254, lng: -95.2395 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Lucía comenzó bordando pequeños accesorios y hoy crea resplandores completos. Su trabajo ha sido galardonado en tres concursos estatales de artesanía textil.",
        image: "/images/artisan-lucia.jpg",
        specialty: "Resplandores y Accesorios",
        yearsExperience: 18,
        techniques: ["Encaje", "Bordado de Resplandor", "Bordado en Abanico"],
        isVerified: true,
        verifiedSince: "2024",
        rating: 4.8,
        totalReviews: 21,
        totalSales: 74,
        bio: "Lucía se especializó en la creación de resplandores — el tocado ceremonial que enmarca el rostro de la mujer tehuana. Ganadora de tres premios estatales, domina el trabajo con encaje, tul y bordado fino. También crea abanicos bordados y accesorios ceremoniales.",
    },
    {
        id: "a10",
        slug: "angel-zarate",
        name: "Ángel Zárate Pineda",
        location: "San Blas Atempa, Oaxaca",
        coordinates: { lat: 16.3180, lng: -95.2220 },
        estimatedDelivery: "5-7 días hábiles",
        story: "Ángel es tallador de jícaras y creador de artesanías en madera y barro. Sus piezas decorativas representan la cosmogonía zapoteca con un estilo único y detallado.",
        image: "/images/artisan-angel.jpg",
        specialty: "Tallado y Artesanía Decorativa",
        yearsExperience: 22,
        techniques: ["Tallado de Jícara", "Pintura sobre Madera", "Modelado en Barro"],
        isVerified: true,
        verifiedSince: "2024",
        rating: 4.6,
        totalReviews: 18,
        totalSales: 65,
        bio: "Ángel transforma la calabaza en arte. Sus jícaras talladas representan deidades zapotecas, animales y escenas del Istmo con una precisión extraordinaria. También trabaja la madera y el barro, creando piezas decorativas que cuentan historias ancestrales. Sus obras destacan por el nivel de detalle.",
    },
];

// ─── Reseñas de Clientes ────────────────────────────────────────

export const reviews: Review[] = [
    // ── María López (a1) ──
    {
        id: "r1", artisanId: "a1", productId: "1", productName: "Huipil de Cadentilla Rojo",
        customerName: "Alejandra Ruiz", customerLocation: "CDMX",
        isVerifiedPurchase: true, rating: 5,
        title: "¡Una obra de arte que puedes vestir!",
        comment: "El huipil llegó perfectamente empacado. Los detalles de la cadentilla son impresionantes — cada línea está perfectamente alineada. María me envió fotos del proceso y eso hizo la experiencia aún más especial. Lo usé en una boda y recibí muchos cumplidos.",
        date: "2025-12-15", helpful: 23,
    },
    {
        id: "r2", artisanId: "a1", productId: "5", productName: "Huipil de Cadenilla Verde Esmeralda",
        customerName: "Patricia Gómez", customerLocation: "Guadalajara, Jalisco",
        isVerifiedPurchase: true, rating: 5,
        title: "Calidad excepcional, vale cada peso",
        comment: "Es mi segundo huipil con María y no me decepciona. El color verde esmeralda es más bonito en persona que en fotos. Se nota el trabajo de semanas que llevan. Recomiendo 100%.",
        date: "2025-11-28", helpful: 15,
    },
    {
        id: "r3", artisanId: "a1", productId: "12", productName: "Huipil de Cadentilla Naranja",
        customerName: "Fernanda Vega", customerLocation: "Monterrey, NL",
        isVerifiedPurchase: true, rating: 4,
        title: "Hermoso, solo la talla corrió un poco",
        comment: "El huipil es precioso y la cadentilla impecable. El único detalle es que me quedó un poco más largo de lo esperado, pero nada que una modista no pueda ajustar. La comunicación con María fue excelente.",
        date: "2025-10-03", helpful: 8,
    },

    // ── Juana Martínez (a2) ──
    {
        id: "r4", artisanId: "a2", productId: "13", productName: "Vestido Bordado a Mano Negro",
        customerName: "Sofía Hernández", customerLocation: "Oaxaca, Oaxaca",
        isVerifiedPurchase: true, rating: 5,
        title: "Perfecto para la Vela de mi pueblo",
        comment: "Juana bordó mi vestido con flores que representan las de mi pueblo. El terciopelo es de excelente calidad. Lo estrené en la Vela de San Vicente y fue un éxito. Pura magia en cada puntada.",
        date: "2025-11-20", helpful: 31,
    },
    {
        id: "r5", artisanId: "a2", productId: "14", productName: "Falda de Enredo Tradicional",
        customerName: "Laura Díaz", customerLocation: "Puebla, Puebla",
        isVerifiedPurchase: true, rating: 5,
        title: "El holán perfecto",
        comment: "Quería una falda de enredo auténtica y esta superó mis expectativas. El holán tiene el volumen justo y el encaje es de primera. Juana fue muy paciente explicándome cómo ponérmela correctamente.",
        date: "2025-09-10", helpful: 12,
    },
    {
        id: "r6", artisanId: "a2",
        customerName: "Carlos Mendoza", customerLocation: "CDMX",
        isVerifiedPurchase: true, rating: 5,
        title: "Regalo perfecto para mi esposa",
        comment: "Compré un vestido completo como regalo de aniversario. Juana me ayudó a elegir los colores ideales y el resultado fue espectacular. Mi esposa lloró de emoción cuando lo vio. ¡Servicio y calidad de 10!",
        date: "2025-08-22", helpful: 45,
    },

    // ── Hermanos García (a3) ──
    {
        id: "r7", artisanId: "a3", productId: "23", productName: "Collar de Filigrana de Oro",
        customerName: "Diana Morales", customerLocation: "Querétaro, Qro.",
        isVerifiedPurchase: true, rating: 5,
        title: "Artesanía de clase mundial",
        comment: "El collar es increíblemente delicado y ligero. La filigrana es perfecta, se nota el trabajo de generaciones. Cada eslabón está hecho a mano y el baño de oro es uniforme. Una joya en todo sentido.",
        date: "2025-12-01", helpful: 27,
    },
    {
        id: "r8", artisanId: "a3", productId: "26", productName: "Collar de Monedas Centenario",
        customerName: "Martha Juárez", customerLocation: "Juchitán, Oaxaca",
        isVerifiedPurchase: true, rating: 5,
        title: "Inversión y tradición",
        comment: "Es el collar que toda juchiteca sueña. Las monedas son auténticas y la cadena es pesada y hermosa. Los García son los mejores joyeros del Istmo, no hay comparación. Mi familia lo usará por generaciones.",
        date: "2025-07-15", helpful: 52,
    },
    {
        id: "r9", artisanId: "a3", productId: "24", productName: "Aretes de Filigrana Largos",
        customerName: "Ana Beltrán", customerLocation: "Veracruz, Ver.",
        isVerifiedPurchase: true, rating: 4,
        title: "Bonitos pero requieren cuidado",
        comment: "Los aretes son preciosos y muy ligeros. El único detalle es que la filigrana es tan delicada que hay que guardarlos con cuidado para que no se deformen. Vinieron en una cajita protectora, lo cual agradezco.",
        date: "2025-10-18", helpful: 9,
    },

    // ── Rosa Elena (a4) ──
    {
        id: "r10", artisanId: "a4", productId: "33", productName: "Bolsa Tejida de Palma",
        customerName: "Isabel Torres", customerLocation: "Cancún, QRoo",
        isVerifiedPurchase: true, rating: 5,
        title: "Perfecta para la playa",
        comment: "Esta bolsa es increíblemente resistente y espaciosa. La llevo al mercado y a la playa todos los días. El tejido es tupido y los patrones de olas son un detalle hermoso. ¡Rosa es una artista!",
        date: "2025-11-05", helpful: 14,
    },
    {
        id: "r11", artisanId: "a4", productId: "35", productName: "Morral de Ixtle Bicolor",
        customerName: "Roberto Sánchez", customerLocation: "San Cristóbal, Chiapas",
        isVerifiedPurchase: true, rating: 4,
        title: "Ecológico y con estilo",
        comment: "Me encanta que es 100% fibra natural. Es ligero, cómodo para cruzar y bastante resistente. El color verde va oscureciendo con el uso, lo cual le da más carácter. Buen tamaño para llevar wallet, llaves y celular.",
        date: "2025-09-20", helpful: 7,
    },

    // ── Petrona Ruiz (a5) ──
    {
        id: "r12", artisanId: "a5", productId: "3", productName: "Huipil de Terciopelo Negro",
        customerName: "Valentina Ríos", customerLocation: "CDMX",
        isVerifiedPurchase: true, rating: 5,
        title: "La pieza más hermosa que he tenido",
        comment: "Esperé 8 meses por este huipil y cada día valió la pena. Los bordados de seda son tan finos que parece pintura. Doña Petrona es una artista de otro nivel. Cuando lo desempaqueté, me quedé sin palabras. Es para ser heredado.",
        date: "2025-06-30", helpful: 67,
    },
    {
        id: "r13", artisanId: "a5", productId: "9", productName: "Huipil de Terciopelo Guinda",
        customerName: "Mariana Castro", customerLocation: "Mérida, Yucatán",
        isVerifiedPurchase: true, rating: 5,
        title: "Pura magia hecha hilo",
        comment: "Los hilos metálicos dorados brillan de manera sutil y elegante. Este huipil lo usé en la gala de un museo y la gente no podía creer que fuera bordado a mano. Doña Petrona es patrimonio viviente de México.",
        date: "2025-10-12", helpful: 38,
    },

    // ── Elena Santiago (a6) ──
    {
        id: "r14", artisanId: "a6", productId: "4", productName: "Huipil Cotidiano de Manta",
        customerName: "Carla Fuentes", customerLocation: "CDMX",
        isVerifiedPurchase: true, rating: 5,
        title: "Tradición para el día a día",
        comment: "Exactamente lo que buscaba: un huipil que pueda usar con jeans los fines de semana. Es fresco, cómodo y los bordados son lindos sin ser demasiado formales. Elena tiene talento para modernizar sin perder la esencia.",
        date: "2025-11-11", helpful: 19,
    },
    {
        id: "r15", artisanId: "a6", productId: "10", productName: "Huipil Contemporáneo Bicolor",
        customerName: "Andrea López", customerLocation: "Tijuana, BC",
        isVerifiedPurchase: true, rating: 4,
        title: "Moderno y auténtico",
        comment: "Me gustó mucho el diseño bicolor, es diferente a todo lo que he visto. Los detalles naranjas le dan un toque muy actual. Solo le doy 4 estrellas porque la tela de lino se arruga un poco, pero nada grave.",
        date: "2025-08-05", helpful: 6,
    },

    // ── Félix Montaño (a7) ──
    {
        id: "r16", artisanId: "a7", productId: "25", productName: "Pulsera de Cadena Tejida",
        customerName: "Miguel Ángel Reyes", customerLocation: "León, Guanajuato",
        isVerifiedPurchase: true, rating: 5,
        title: "Plata de verdad, artesanía de verdad",
        comment: "La pulsera es pesada, maciza y hermosamente tejida. Se nota que es plata de ley. Don Félix incluye un certificado de autenticidad. La uso a diario y se ha vuelto parte de mí.",
        date: "2025-10-25", helpful: 16,
    },
    {
        id: "r17", artisanId: "a7", productId: "28", productName: "Aretes de Ámbar y Plata",
        customerName: "Gabriela Ramos", customerLocation: "Tuxtla Gutiérrez, Chiapas",
        isVerifiedPurchase: true, rating: 5,
        title: "Únicos y con historia",
        comment: "El ámbar es precioso, de un tono miel profundo. Don Félix me explicó que cada pieza de ámbar tiene millones de años. Los aretes son cómodos y elegantes a la vez. ¡Y combinan con todo!",
        date: "2025-09-14", helpful: 11,
    },

    // ── Carmen Toledo (a8) ──
    {
        id: "r18", artisanId: "a8", productId: "42", productName: "Hamaca Matrimonial de Algodón",
        customerName: "Eduardo Pérez", customerLocation: "Playa del Carmen, QRoo",
        isVerifiedPurchase: true, rating: 5,
        title: "Duerme como en una nube",
        comment: "Reemplazamos nuestra cama por esta hamaca y dormimos mejor que nunca. El algodón es suave, el color rosa con tintes naturales es hermoso, y soporta nuestro peso sin problema. Carmen es una maestra del telar.",
        date: "2025-11-30", helpful: 22,
    },
    {
        id: "r19", artisanId: "a8", productId: "41", productName: "Mantel Individual Bordado (Set x4)",
        customerName: "Lucero Aguilar", customerLocation: "Puebla, Puebla",
        isVerifiedPurchase: true, rating: 5,
        title: "Mi mesa nunca se vio tan bien",
        comment: "Los cuatro manteles son diferentes pero combinan entre sí. Las flores están bordadas con detalle increíble y los colores son vibrantes. Se lavan perfecto en máquina sin que pierdan forma. ¡Quiero el set de 6!",
        date: "2025-10-08", helpful: 13,
    },

    // ── Lucía Orozco (a9) ──
    {
        id: "r20", artisanId: "a9", productId: "16", productName: "Resplandor de Encaje Dorado",
        customerName: "Claudia Villanueva", customerLocation: "Salina Cruz, Oaxaca",
        isVerifiedPurchase: true, rating: 5,
        title: "El resplandor más hermoso",
        comment: "Lucía me hizo un resplandor personalizado para mi boda civil. El encaje dorado brilla preciosamente bajo la luz. Es ligero y se sostiene perfecto. Varias amigas ya le encargaron el suyo. ¡Mil gracias, Lucía!",
        date: "2025-12-20", helpful: 34,
    },
    {
        id: "r21", artisanId: "a9", productId: "34", productName: "Abanico Bordado de Seda",
        customerName: "Natalia Guzmán", customerLocation: "Oaxaca, Oaxaca",
        isVerifiedPurchase: true, rating: 4,
        title: "Bonito y funcional",
        comment: "Lo compré para las Velas y fue mi salvación con el calor. El bordado es delicado y las varillas de madera son firmes. Lo único es que la seda requiere cuidado, pero vale la pena.",
        date: "2025-08-16", helpful: 5,
    },

    // ── Ángel Zárate (a10) ──
    {
        id: "r22", artisanId: "a10", productId: "43", productName: "Jícara Decorativa Tallada",
        customerName: "Ricardo Flores", customerLocation: "CDMX",
        isVerifiedPurchase: true, rating: 5,
        title: "Arte en una calabaza",
        comment: "No puedo creer el nivel de detalle tallado en la jícara. Ángel grabó la escena de una boda zapoteca con figuras diminutas pero perfectamente reconocibles. Es el centro de mesa de mi comedor y todos preguntan por ella.",
        date: "2025-11-18", helpful: 20,
    },
    {
        id: "r23", artisanId: "a10", productId: "40", productName: "Sombrero de Palma Pintado",
        customerName: "Jorge Pineda", customerLocation: "Huatulco, Oaxaca",
        isVerifiedPurchase: true, rating: 4,
        title: "Funcional y artístico",
        comment: "El sombrero es perfecto para el sol, amplio y ligero. La pintura con flores tropicales es un detalle genial. Le doy 4 estrellas porque el ajuste interior podría ser un poco más cómodo, pero en general es excelente.",
        date: "2025-09-28", helpful: 8,
    },
];

// ─── Helper Functions ────────────────────────────────────────────

export function getArtisanBySlug(slug: string): ArtisanProfile | undefined {
    return artisanProfiles.find(a => a.slug === slug);
}

export function getArtisanById(id: string): ArtisanProfile | undefined {
    return artisanProfiles.find(a => a.id === id);
}

export function getReviewsByArtisanId(artisanId: string): Review[] {
    return reviews.filter(r => r.artisanId === artisanId);
}

export function getProductsByArtisanId(artisanId: string) {
    return products.filter(p => p.artisan.id === artisanId);
}

export function getAverageRating(artisanId: string): number {
    const artisanReviews = getReviewsByArtisanId(artisanId);
    if (artisanReviews.length === 0) return 0;
    const sum = artisanReviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.round((sum / artisanReviews.length) * 10) / 10;
}

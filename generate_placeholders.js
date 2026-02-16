const fs = require('fs');
const path = require('path');

const colorMap = {
    'Rojo': '#C62828', 'Azul': '#1565C0', 'Negro': '#212121', 'Blanco': '#F5F5F5',
    'Verde': '#2E7D32', 'Morado': '#6A1B9A', 'Rosa': '#E91E63', 'Amarillo': '#F9A825',
    'Guinda': '#880E4F', 'Naranja': '#E65100', 'Dorado': '#FFD700', 'Plateado': '#9E9E9E',
    'Beige': '#D7CCC8', 'Café': '#5D4037', 'Terracota': '#BF360C',
    'Ámbar': '#FF8F00', 'Multicolor': '#7B1FA2', 'Natural': '#A1887F',
    'default': '#757575'
};

const products = [
    // Huipiles
    { name: 'huipil-rojo', color: 'Rojo', text: 'Huipil Cadentilla' },
    { name: 'huipil-geom', color: 'Azul', text: 'Huipil Geométrico' },
    { name: 'huipil-terciopelo-negro', color: 'Negro', text: 'Huipil Terciopelo' },
    { name: 'huipil-manta', color: 'Blanco', text: 'Huipil Manta' },
    { name: 'huipil-verde', color: 'Verde', text: 'Huipil Verde' },
    { name: 'huipil-floral', color: 'Morado', text: 'Huipil Floral' },
    { name: 'huipil-rosa', color: 'Rosa', text: 'Huipil Rosa' },
    { name: 'huipil-infantil', color: 'Amarillo', text: 'Huipil Infantil' },
    { name: 'huipil-guinda', color: 'Guinda', text: 'Huipil Guinda' },
    { name: 'huipil-bicolor', color: 'Negro', text: 'Huipil Bicolor' },
    { name: 'huipil-novia', color: 'Blanco', text: 'Huipil de Novia' },
    { name: 'huipil-naranja', color: 'Naranja', text: 'Huipil Naranja' },
    // Ropa
    { name: 'vestido-negro', color: 'Negro', text: 'Vestido Bordado' },
    { name: 'falda-enredo', color: 'Morado', text: 'Falda Enredo' },
    { name: 'blusa-tehuana', color: 'Blanco', text: 'Blusa Tehuana' },
    { name: 'resplandor-dorado', color: 'Dorado', text: 'Resplandor' },
    { name: 'vestido-rojo-completo', color: 'Rojo', text: 'Vestido Completo' },
    { name: 'falda-holan-blanco', color: 'Blanco', text: 'Falda Holán' },
    { name: 'camisa-manta', color: 'Beige', text: 'Camisa Manta' },
    { name: 'rebozo-seda', color: 'Azul', text: 'Rebozo Seda' },
    { name: 'vestido-casual', color: 'Terracota', text: 'Vestido Casual' },
    { name: 'huaraches', color: 'Café', text: 'Huaraches' },
    // Joyería
    { name: 'collar-filigrana', color: 'Dorado', text: 'Collar Filigrana' },
    { name: 'aretes-filigrana', color: 'Plateado', text: 'Aretes Filigrana' },
    { name: 'pulsera-tejida', color: 'Plateado', text: 'Pulsera Tejida' },
    { name: 'collar-monedas', color: 'Dorado', text: 'Collar Monedas' },
    { name: 'anillo-coral', color: 'Rojo', text: 'Anillo Coral' },
    { name: 'aretes-ambar', color: 'Ámbar', text: 'Aretes Ámbar' },
    { name: 'gargantilla-plata', color: 'Plateado', text: 'Gargantilla' },
    { name: 'pulsera-charms', color: 'Dorado', text: 'Pulsera Charms' },
    { name: 'broche-mariposa', color: 'Plateado', text: 'Broche Mariposa' },
    { name: 'cadena-trenzada', color: 'Dorado', text: 'Cadena Trenzada' },
    // Accesorios
    { name: 'bolsa-palma', color: 'Beige', text: 'Bolsa Palma' },
    { name: 'abanico-seda', color: 'Rojo', text: 'Abanico Seda' },
    { name: 'morral-ixtle', color: 'Verde', text: 'Morral Ixtle' },
    { name: 'cinturon-bordado', color: 'Café', text: 'Cinturón Bordado' },
    { name: 'clutch-terciopelo', color: 'Negro', text: 'Clutch Terciopelo' },
    { name: 'canasta-palma', color: 'Natural', text: 'Canasta Palma' },
    { name: 'faja-telar', color: 'Multicolor', text: 'Faja Telar' },
    { name: 'sombrero-palma', color: 'Natural', text: 'Sombrero Palma' },
    // Hogar
    { name: 'mantel-individual', color: 'Blanco', text: 'Manteles Set x4' },
    { name: 'hamaca-matrimonial', color: 'Rosa', text: 'Hamaca' },
    { name: 'jicara-tallada', color: 'Negro', text: 'Jícara Tallada' },
    { name: 'camino-mesa', color: 'Azul', text: 'Camino de Mesa' },
    { name: 'servilletas-bordadas', color: 'Blanco', text: 'Servilletas x6' },
];

const artisansList = [
    { name: 'artisan-maria', color: '#FFAB91', text: 'María López' },
    { name: 'artisan-juana', color: '#FFCC80', text: 'Juana Martínez' },
    { name: 'artisan-garcia', color: '#FFE082', text: 'Hnos. García' },
    { name: 'artisan-rosa', color: '#BCAAA4', text: 'Rosa Elena' },
    { name: 'artisan-petrona', color: '#CE93D8', text: 'Petrona Ruiz' },
    { name: 'artisan-elena', color: '#80CBC4', text: 'Elena Santiago' },
    { name: 'artisan-felix', color: '#90CAF9', text: 'Félix Montaño' },
    { name: 'artisan-carmen', color: '#EF9A9A', text: 'Carmen Toledo' },
    { name: 'artisan-lucia', color: '#FFF59D', text: 'Lucía Orozco' },
    { name: 'artisan-angel', color: '#A5D6A7', text: 'Ángel Zárate' },
];

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

function createSVG(fileName, bgColor, text, size = '600x800') {
    const [w, h] = size.split('x').map(Number);
    const textColor = ['#F5F5F5', '#FFD700', '#FFCC80', '#FFE082', '#FFF59D'].includes(bgColor) ? '#333' : '#fff';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
        <pattern id="grid-${fileName}" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${textColor}" stroke-width="0.3" opacity="0.15"/>
        </pattern>
    </defs>
    <rect width="${w}" height="${h}" fill="${bgColor}"/>
    <rect width="${w}" height="${h}" fill="url(#grid-${fileName})"/>
    <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-size="${w > 400 ? 36 : 28}" fill="${textColor}" font-weight="bold" opacity="0.9">${text}</text>
    <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${w > 400 ? 16 : 14}" fill="${textColor}" opacity="0.5">Lari Stinu • Foto pendiente</text>
</svg>`;
    const filePath = path.join(dir, `${fileName}.jpg`);
    // Only create if file doesn't already exist (don't overwrite real photos)
    if (!fs.existsSync(filePath)) {
        // Save as SVG but with .jpg extension for compatibility
        // The browser will still render it correctly
        fs.writeFileSync(filePath, svg);
        console.log(`  ✓ Created ${fileName}.jpg (placeholder)`);
    } else {
        console.log(`  ⊘ Skipped ${fileName}.jpg (already exists)`);
    }
}

console.log('\n🎨 Generating product placeholders...\n');
products.forEach(p => {
    const bg = colorMap[p.color] || colorMap['default'];
    createSVG(p.name, bg, p.text, '600x800');
});

console.log('\n👤 Generating artisan placeholders...\n');
artisansList.forEach(a => {
    createSVG(a.name, a.color, a.text, '300x300');
});

console.log('\n✅ Done! Total product images:', products.length);
console.log('✅ Done! Total artisan images:', artisansList.length);
console.log(`\n📁 Images saved to: ${dir}\n`);

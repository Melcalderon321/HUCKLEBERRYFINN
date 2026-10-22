const fs = require('fs');
const path = require('path');

const files = ['index.html', 'Huckleberry_Finn_Cuestionario (1).html'];

const blockRegex = /<h3>Contenido y fuente<\/h3><p>Preguntas de hechos, personajes[\s\S]*?puede construir el lector\.<\/p>/;

for (const f of files) {
  let content = fs.readFileSync(path.join(__dirname, f), 'utf8');
  if (blockRegex.test(content)) {
    content = content.replace(blockRegex, '');
    fs.writeFileSync(path.join(__dirname, f), content, 'utf8');
    console.log(`Successfully removed "Contenido y fuente" from ${f}`);
  } else {
    console.error(`Block not found in ${f}`);
  }
}

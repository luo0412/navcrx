const fs = require('fs');
const path = require('path');

const targets = [
  {
    name: '@layui/layer-vue',
    path: path.join(__dirname, '..', 'node_modules', '@layui', 'layer-vue', 'lib', 'index.css')
  },
  {
    name: 'vue-layer',
    path: path.join(__dirname, '..', 'node_modules', 'vue-layer', 'lib', 'vue-layer.css')
  }
];
const content = '/* layer-vue/vue-layer global styles removed by patch */\n';

let patched = false;
for (const target of targets) {
  try {
    if (!fs.existsSync(target.path)) {
      continue;
    }
    fs.writeFileSync(target.path, content, 'utf8');
    console.log(`Patched ${target.name} CSS: ${target.path}`);
    patched = true;
  } catch (error) {
    console.error(`Failed to patch ${target.name} CSS: ${error.message}`);
    process.exit(1);
  }
}

if (!patched) {
  console.error('No target CSS file found to patch.');
  process.exit(1);
}

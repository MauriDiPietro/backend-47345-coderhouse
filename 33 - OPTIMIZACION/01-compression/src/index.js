import serverCompress from './servers/serverCompress.js';
import serverNormal from './servers/serverNormal.js';

serverNormal.listen(3000, () =>
  console.log(`Servidor Normal escuchando en puerto 3000`)
);

serverCompress.listen(4000, () =>
  console.log(`Servidor Compress escuchando en puerto 4000`)
);

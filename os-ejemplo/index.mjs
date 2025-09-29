import os from 'os';
console.log('arquitectura:', os.arch());
console.log('plataforma:', os.platform);
console.log('memoria total', os.totalmem());
console.log('memoria libre:', os.freemem());
console.log('informacion del cpu:', os.cpus());

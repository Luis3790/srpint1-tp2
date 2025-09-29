import fs from 'fs';

fs.readFile('./data/example.txt','utf8', (err, data)=>{if(err) throw err; console.log('contenido del archivo:', data);});
fs.writeFile('./data/newfile.txt', 'contenido nuevo', (err)=>{if(err) throw err;
    console.log('archivo creado y escrito');
});
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err)=>{if(err) throw err; console.log('archivo renombrado');});

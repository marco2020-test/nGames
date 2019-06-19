'use strict'

import server from './server';

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log('El servidor está inicializado en el puerto: ' + port);
});
 
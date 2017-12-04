const path = require('path');

 module.exports = {
     entry: './app.js',
     output: {
         path: path.resolve(__dirname, 'jarvis-web-light'),
         filename: 'bundle.js'
     }
 };

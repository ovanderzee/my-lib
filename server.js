require('static-cling')({port: 8000});
require('child_process').exec('open http://localhost:8000/demo/es-module.html');

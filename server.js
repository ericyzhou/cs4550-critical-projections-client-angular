const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cs4550-critical-projections-client-angular'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
                         '/dist/cs4550-critical-projections-client-angular/index.html'));});
app.listen(process.env.PORT || 8080);

var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('put <h1> /whoami </h1> after url to get your infomation')
})
app.get('/whoami', function (req, res) {
//   res.send(req.headers);
  var ip = req.headers['x-forwarded-for'];
  var language = req.headers["accept-language"].split(',')[0];
  var software = req.headers['user-agent'];
  var index1 = software.indexOf('(');
  var index2 = software.indexOf(')');
//   console.log(index1 + " " + index2);
  software = software.substring(index1 +1, index2);
  var result = {
      "ip": ip,
      "language": language,
      "software": software
  };
  res.send(result);
})

app.listen(process.env.PORT || 8080)
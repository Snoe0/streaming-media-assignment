const fs = require('fs');

const getIndex = (request, response, path = 'client.html') => {
  const index = fs.readFileSync(`${__dirname}/../client/${path}`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports.getIndex = getIndex;

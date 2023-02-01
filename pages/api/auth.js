const { NextApiRequest, NextApiResponse } = require('next');

module.exports = function handler(_, res) {
  res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"');
  res.statusCode = 401;
  res.end(`Auth Required.`);
};

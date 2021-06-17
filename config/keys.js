if (process.env.NODE_ENV === 'production') {
  // In production env, return prod keys
  module.exports = require('./prod');
} else {
  // In dev env, return dev keys
  module.exports = require('./dev');
}


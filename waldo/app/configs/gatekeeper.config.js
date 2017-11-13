module.exports = {
    token: {
      kind: 'jwt',
      options: {
        issuer: 'waldo',
        algorithm : 'RS256',
        secret: 'random_string'   // can replace with publicKey, privateKey properties
      }
    }
  };
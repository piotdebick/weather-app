var secret_keys = {
  forecast_API_KEY : 'YOUR API KEY HERE'
}

var getSecretKey = () => {
  return secret_keys.forecast_API_KEY;
}

module.exports = {
  getSecretKey
}

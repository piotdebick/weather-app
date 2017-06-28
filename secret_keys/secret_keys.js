var secret_keys = {
  forecast_API_KEY : '4cb7682d1f7de8e0c52a64743bf7baf1'
}

var getSecretKey = () => {
  return secret_keys.forecast_API_KEY;
}

module.exports = {
  getSecretKey
}

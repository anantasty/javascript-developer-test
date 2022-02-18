const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const results = urls.map(async url => {
    const { status, body } = await httpGet(url)
    const message = JSON.parse(body).message
    return status === 200 ? {"Arnie Quote": message }: { "FAILURE": message }
  })
  return Promise.all(results)
};

module.exports = {
  getArnieQuotes,
};

const request = require('request')
// **********
const news = (callback) => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-10-15&sortBy=publishedAt&apiKey=02639c3e160544febbe9f4a19c5fe36e'
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable To Connect to location service', undefined)
        } 
        // key error
        else if (response.body.status === 'error') {
            callback(response.body.message, undefined)
        } 
        // show articles
        else {
            callback(undefined, response.body.articles)
        }
    })
}
// **************
module.exports = news
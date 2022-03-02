const sendCloud = require('./lib/sendcloud')
const smtp = require('./lib/smtp')

module.exports = {
  sendMailCloud: sendCloud.sendMail,
  sendMail: smtp.sendMail,
}
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

/**
 * 
 * smtp 发送邮件
 * 
 * @param {*} emailData 邮件参数
 * @param {*} emailConfig 邮件配置
 * @returns 
 * 
 */
exports.sendMail = async (emailData, emailConfig) => {
  const { options } = emailConfig
  const transport = nodemailer.createTransport(smtpTransport(options))

  const mailOptions = {
    from: emailConfig.from,
    ...emailData,
  }
  // console.log(mailOptions)

  const result = await transport.sendMail(mailOptions)
  return result
}

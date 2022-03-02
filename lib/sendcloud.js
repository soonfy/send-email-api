const axios = require('axios')
const FormData = require('form-data')
const { cloneDeep } = require('lodash')

/**
 * 
 * sendcloud 发送邮件
 * https://www.sendcloud.net/doc/email_v2/send_email/
 * 
 * @param {*} url 邮件请求地址
 * @param {*} emailData 邮件参数
 * @param {*} emailConfig 邮件配置
 * @returns 
 * 
 */
exports.sendMail = async (url, emailData, emailConfig) => {
  const { options } = emailConfig
  const { auth } = options
  const params = cloneDeep(emailData)
  if (Array.isArray(params.to)) {
    params.to = params.to.join(';') // 不支持数组，只能通过 ; 分隔
  }
  const mailOptions = {
    apiUser: auth.user,
    apiKey: auth.pass,
    from: emailConfig.from, // config 可以指定默认 from
    ...params,
  }
  // console.log(mailOptions)
  let formData = new FormData()
  for (const key in mailOptions) {
    if (key === 'attachments') {
      // 附件需要额外处理
      mailOptions.attachments.forEach(item => formData.append('attachments', item.content, { filename: item.filename }))
    } else {
      formData.append(key, mailOptions[key])
    }
  }
  const requestOptions = {
    method: 'post',
    url,
    data: formData,
    headers: formData.getHeaders(), // 使用方法 getHeaders()，不能强制指定 multipart/form-data
  }
  // console.log(requestOptions)
  const { data } = await axios.post(requestOptions.url, requestOptions.data, { headers: requestOptions.headers })
  if (data.statusCode === 200) {
    // console.log(data)
    return data
  } else {
    console.error(data)
    throw new Error(data.message)
  }
}

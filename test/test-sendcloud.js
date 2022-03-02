const fs = require('fs')
const { sendMailCloud } = require('../index')

const config = require('./config')

const run = async () => {
  try {
    const emailConfig = config.emailServerConfig
    const emailData = {
      to: ['test@sendcloud.com'],
      subject: '测试通过 sendcloud 发送带附件的邮件',
      html: '<h3>hello world!</h3>',
      text: 'hello world!',
      attachments: [
        {
          filename: 'attachments-text.txt',
          content: fs.readFileSync('./test/attachments-text.txt'),
        },
        {
          filename: 'attachments-excel.xlsx',
          content: fs.readFileSync('./test/attachments-excel.xlsx'),
        },
      ],
    }
    const emailUrl = 'https://api.sendcloud.net/apiv2/mail/send'
    const data = await sendMailCloud(emailUrl, emailData, emailConfig)
    console.log(data)
  } catch (error) {
    console.error(error)
  }

  process.exit()
}

run()

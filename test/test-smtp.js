const fs = require('fs')
const { sendMail } = require('../index')

const config = require('./config')

const run = async () => {
  try {
    const emailConfig = config.emailConfig
    const emailData = {
      to: ['test@sendcloud.com'],
      subject: '测试通过 smtp 发送带附件的邮件',
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
    const data = await sendMail(emailData, emailConfig)
    console.log(data)
  } catch (error) {
    console.error(error)
  }

  process.exit()
}

run()

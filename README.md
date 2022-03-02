# 发送邮件 API

> 通过 Node.js 发送邮件，支持 SMTP 和 SendCloud  

## Installation

```bash
npm install send-email-api -S
```

## Usage

### 1. SMTP

```js
const fs = require('fs')
const { sendMail } = require('send-email-api')

const run = async () => {
  try {
    const emailConfig = {
      options: {
        host: 'smtp.sendcloud.net',
        auth: {
          user: 'username',
          pass: 'password',
        }
      },
      from: 'test<test@sendcloud.com>',
    }
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
```

### 2. SendCloud

```js
const fs = require('fs')
const { sendMailCloud } = require('send-email-api')

const run = async () => {
  try {
    const emailServerConfig = {
      options: {
        auth: {
          user: 'api_user',
          pass: 'api_key',
        }
      },
      from: 'test<test@sendcloud.com>',
    }
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
    const data = await sendMailCloud(emailUrl, emailData, emailServerConfig)
    console.log(data)
  } catch (error) {
    console.error(error)
  }

  process.exit()
}

run()
```

## API

* sendMail: 通过 SMTP 方式发送邮件  
* sendMailCloud: 通过 SendCloud 方式发送邮件  

## 参考

1. [nodemailer](https://nodemailer.com/about/)  
2. [sendcloud](https://www.sendcloud.net/doc/email_v2/send_email/)  

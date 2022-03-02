/**
 * sendcloud config
 * https://www.sendcloud.net/doc/email_v2/send_email/
 */
exports.emailServerConfig = {
  options: {
    url: {
      send: 'https://api.sendcloud.net/apiv2/mail/send',
      sendtemplate: 'https://api.sendcloud.net/apiv2/mail/sendtemplate',
      sendcalendar: 'https://api.sendcloud.net/apiv2/mail/sendcalendar',
      taskinfo: 'https://api.sendcloud.net/apiv2/mail/taskinfo',
    },
    auth: {
      user: 'api_user',
      pass: 'api_key',
    }
  },
  from: 'test<test@sendcloud.com>',
}

/**
 * smtp config
 */
exports.emailConfig = {
  options: {
    host: 'smtp.sendcloud.net',
    auth: {
      user: 'username',
      pass: 'password',
    }
  },
  from: 'test<test@sendcloud.com>',
}

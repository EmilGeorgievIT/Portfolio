const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  mail_username: process.env.MAIL_USERNAME,
  mail_pass: process.env.MAIL_PASS
};
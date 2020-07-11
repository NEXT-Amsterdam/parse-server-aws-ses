var AWS = require('aws-sdk');

module.exports = function (options) {

	AWS.config.update({ region: options.region });

	var sendMail = function(mail) {
		// Create sendEmail params
		var params = {
			Destination: { /* required */
				ToAddresses: [
					mail.to
				]
			},
			Message: { /* required */
				Body: { /* required */
					// Html: {
					// 	Charset: "UTF-8",
					// 	Data: "HTML_FORMAT_BODY"
					// },
					Text: {
						Charset: "UTF-8",
						Data: mail.text
					}
				},
				Subject: {
					Charset: 'UTF-8',
					Data: mail.subject
				}
			},
			Source: options.from, /* required */
		};

		// Create the promise and SES service object
		return new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
	}

	return {
		sendMail: sendMail
	}
};

# Parse Server AWS SES Adapter
Send Parse Server emails with Amazon SES using the official AWS JS SDK.

## Install
```sh
$ npm install parse-server-aws-ses --save
```

## Usage
Replace the config with your info. 

```javascript
var parse=new ParseServer({
   //...
   emailAdapter: {
      module: "parse-server-aws-ses",
      options: {
         from: "Your Name <noreply@yourdomain.com>",
         region: "Your AWS Region"
      }
   }
});
```

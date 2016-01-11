# Ember-lenddo
This addon allows you to add the lenddo button as a component for your ember-cli application

## Installation
- `git clone` this repository
- `npm install`
- `bower install`

Add the following config to your environment.js files:

```javascript
/* environment.js*/
ENV['lenddo'] = {
  partnerScriptId: '<The partnerScriptId that you get from the partners dashboard>',
};
```

If you are using ember-cli-content-security-policy, be sure to add the necessary domains as well, for example:

```javascript
ENV['contentSecurityPolicy'] = {
...
    'connect-src': "'self' partnerevents.lenddo.com authorize.partner-service.link .... ",
  };
```

## Usage
Inside a handlebars template, simply include the lenddo-button component:

```html
{{ lenddo-button cientId=clientId verificationFields=verificationFields mode='popup' }}
```

The verificationFields should look something like:

```javascript
verificationFields: {
  firstName: null,
  middleName: null,
  lastName: null,
  birthDate: null,
  email: null,
  employer: null,
  mobileNumber: null,
  university: null,
},
```

refer to [https://partners.lenddo.com/create_button_code](https://partners.lenddo.com/create_button_code) for details.

## Running Tests
- `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
- `ember test`
- `ember test --server`

## Building
- `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

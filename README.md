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

If you are using ember-cli-content-security-policy, be sure to add the necessary domains as well, see below for an example:

```javascript
ENV['contentSecurityPolicy'] = {
...
  'script-src':  "'self' 'unsafe-inline' 'unsafe-eval' authorize.partner-service.link partnerevents.lenddo.com",
  'connect-src': "'self' partnerevents.lenddo.com authorize.partner-service.link",
  'img-src':     "'self' data: authorize.partner-service.link",
  'style-src':   "'self' authorize.partner-service.link",
  };
```

## Usage
Inside a handlebars template, simply include the lenddo-button component:

```html
{{ lenddo-button cientId=clientId verificationFields=verificationFields }}
```

There are various options that you can pass:

Option      | Default               | Description
----------- | :-------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------:
tooltip     |                       |                                                                                                                          Text displayed when hovering over the button.
name        | blue_get_verified     |                                                  Type of Lenddo button to be used. Possible options are: fb_button, blue_button, blue_get_verified, blue_green_button.
fb_redirect | false                 | etermines button behavior when clicked. Set to true to proceed directly to the Facebook login page; false to redirect to the Authorize landing page. Default is false.
text        | Verify with Verifi.Me |                                                                                                                                           Caption shown in the button.
mode        | popup                 |                                  Form submission behavior. Determines whether the Authorize process opens in a popup window (default) or redirects from the same page.

Note: Refer to your Lenddo documentation for more details

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

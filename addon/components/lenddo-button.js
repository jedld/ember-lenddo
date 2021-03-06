import Ember from 'ember';
import ENV from 'ember-get-config';
import layout from '../templates/components/lenddo-button';

export default Ember.Component.extend({
  clientId: null,
  buttonType: 'blue_get_verified',
  tooltip: null,
  text: 'Verify with Lenddo',
  partnerScriptId: ENV.lenddo.partnerScriptId,
  fbRedirect: false,
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
  mode: 'popup',
  layout: layout,

  emptyStringIfNull(value) {
    if (value === null) {
      return '';
    };

    return value;
  },

  didInsertElement() {
    let la = document.createElement('script');
    la.type = 'text/javascript';
    la.async = true;
    la.src = 'https://authorize.partner-service.link/verify.js?v=' + Date.now();
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(la, s);
  },

  didReceiveAttrs() {
    let _this = this;
    window.LenddoVerifyConfig = {
      action: this.get('mode'),
      scriptId: this.get('partnerScriptId'),
      clientId: this.get('clientId'),
      name: this.get('buttonType'),
      fb_redirect: this.get('fbRedirect'),
      verificationFields: {
        /* sample verification field values */
        firstname:  this.emptyStringIfNull(this.get('verificationFields.firstName')),
        middlename: this.emptyStringIfNull(this.get('verificationFields.middleName')),
        lastname: this.emptyStringIfNull(this.get('verificationFields.lastName')),
        birthdate: this.emptyStringIfNull(this.get('verificationFields.birthDate')),
        email: this.emptyStringIfNull(this.get('verificationFields.email')),
        employer: this.emptyStringIfNull(this.get('verificationFields.employer')),
        mobilephone: this.emptyStringIfNull(this.get('verificationFields.mobileNumber')),
        university: this.emptyStringIfNull(this.get('verificationFields.university')),
      },
      onSubmit: function(cb) {
        Ember.run(function() {
          _this.sendAction('onClick', this);
        });

        var errors = false;
        if (errors === false) {
          cb();
        }
      },
    };
  },

  willDestroyElement() {
    if (window.LenddoVerifyConfig) {
      window.LenddoVerifyConfig = null;
    }
  },
});

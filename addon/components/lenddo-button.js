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

  didInsertElement() {
    let _this = this;
    window.LenddoVerifyConfig = {
      action: `${this.get('mode')}`,
      scriptId: `${this.get('partnerScriptId')}`,
      clientId: `${this.get('clientId')}`,
      name: `${this.get('buttonType')}`,
      fb_redirect: this.get('fbRedirect'),
      verificationFields: {
        /* sample verification field values */
        firstname:  `${this.get('verificationFields.firstName')}`,
        middlename: `${this.get('verificationFields.middleName')}`,
        lastname: `${this.get('verificationFields.lastName')}`,
        birthdate: `${this.get('verificationFields.lastName')}`,
        email: `${this.get('verificationFields.email')}`,
        employer: `${this.get('verificationFields.employer')}`,
        mobilephone: `${this.get('verificationFields.mobileNumber')}`,
        university: `${this.get('verificationFields.university')}`
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

    let la = document.createElement('script');
    la.type = 'text/javascript';
    la.async = true;
    la.src = 'https://authorize.partner-service.link/verify.js?v=' + Date.now();
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(la, s);
  },
});

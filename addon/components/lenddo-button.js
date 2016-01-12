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
});

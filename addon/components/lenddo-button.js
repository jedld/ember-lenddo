import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  clientId: null,
  partnerScriptId: ENV.APP.lenddo.partnerScriptId,
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
});

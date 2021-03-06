var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var checklistRequest = function () {
    var data = {
        idCard: 'CARD_ID', // REQUIRED
        name: 'CHECKLIST_NAME',
        pos: 1
    };
    Trello.checklist.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

checklistRequest();
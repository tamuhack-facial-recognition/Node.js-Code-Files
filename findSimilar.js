'use strict';

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = 'fbd46b617b604099b8a85f9f17587013';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://southcentralus.api.cognitive.microsoft.com/face/v1.0/findsimilars';

const imageUrl =
    'https://pbs.twimg.com/profile_images/1066768154368663552/GqnW1MDG_400x400.jpg';

// Request parameters.
const params = {
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"faceId": "c459da09-25ab-4444-92a7-ee23a9260e45",\n"largeFaceListId": "waterman_tamuhack2",\n"maxNumOfCandidatesReturned": ' + 10 + ',\n"mode": "matchPerson"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
});
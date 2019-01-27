'use strict';

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = 'fbd46b617b604099b8a85f9f17587013';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://southcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

const imageUrl =
    'http://gamebot2.com/images/AnshSquare.jpg';

// Request parameters.
var params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': ''
};

var options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};
var faceId;
request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.parse(body);
  //console.log(jsonResponse[0]["faceId"]);
  faceId = jsonResponse[0]["faceId"];
});

//SECOND PART

// Request parameters.
params = {
};

options = {
    uri: uriBase,
    qs: params,
    body: '{"faceId": "'+faceId+'",\n"largeFaceListId": "waterman_tamuhack2",\n"maxNumOfCandidatesReturned": ' + 10 + ',\n"mode": "matchFace"}',
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
exports.handler = function(event, context, callback) {
  console.log("getting data from dynamo");
  console.log("here you are");
  // demo push update
  callback(null, { statusCode: 200, body: {} });
};

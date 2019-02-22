exports.handler = function(event, context, callback) {
  console.log("getting data from dynamo");
  callback(null, { statusCode: 200, body: {} });
};

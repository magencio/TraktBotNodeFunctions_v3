var request = require('request');

module.exports = function (context, inputQueueItem) {
    context.log('JavaScript queue trigger function processed work item', inputQueueItem);

    request({url: process.env.BotProactiveEndpoint, qs: { id: inputQueueItem } }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        context.done();
    });
};


module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();    
    if(myTimer.isPastDue) {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
    
    context.bindings.outputQueue = context.bindings.inputCollection.map(i => i.id);    
    context.done();
};
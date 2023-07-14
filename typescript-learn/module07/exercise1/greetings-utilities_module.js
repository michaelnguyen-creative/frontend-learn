export function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from GreetingsLength_module is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
}
// No need: export this fn
// since it's required only: scope: returnGreeting module
function getLength(message) {
    return message.length;
}

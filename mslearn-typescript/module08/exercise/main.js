var AllGreetings;
(function (AllGreetings) {
    var Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log("The message from namespace Greetings is ".concat(greeting, "."));
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings = AllGreetings.Greetings || (AllGreetings.Greetings = {}));
    var GreetingsWithLength;
    (function (GreetingsWithLength) {
        // export a function to make it available outside the namespace
        function returnGreeting(greeting) {
            var greetingLength = getLength(greeting);
            console.log("The message from namespace GreetingsWithLength is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
        }
        GreetingsWithLength.returnGreeting = returnGreeting;
        // getLength is accessible only within the GreetingsWithLength namespace
        function getLength(message) {
            return message.length;
        }
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
})(AllGreetings || (AllGreetings = {}));
var greet = AllGreetings.Greetings;
// returnGreeting('Hello') // Returns error
greet.returnGreeting('Bonjour'); // OK
// GreetingsWithLength.returnGreeting('Hola') // OK

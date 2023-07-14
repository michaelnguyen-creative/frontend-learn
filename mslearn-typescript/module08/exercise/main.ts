namespace AllGreetings {
  export namespace Greetings {
    export function returnGreeting(greeting: string) {
      console.log(`The message from namespace Greetings is ${greeting}.`)
    }
  }

  export namespace GreetingsWithLength {
    // export a function to make it available outside the namespace
    export function returnGreeting(greeting: string) {
      let greetingLength = getLength(greeting)
      console.log(
        `The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`
      )
    }
    // getLength is accessible only within the GreetingsWithLength namespace
    function getLength(message: string): number {
      return message.length
    }
  }
}

import greet = AllGreetings.Greetings
// returnGreeting('Hello') // Returns error

greet.returnGreeting('Bonjour') // OK
// GreetingsWithLength.returnGreeting('Hola') // OK

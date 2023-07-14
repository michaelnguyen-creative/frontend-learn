export function returnGreeting (greeting: string) {
  let greetingLength = getLength(greeting);
  console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}

// No need: export this fn
// since it's required only: scope: returnGreeting module
function getLength(message: string): number {
  return message.length
}
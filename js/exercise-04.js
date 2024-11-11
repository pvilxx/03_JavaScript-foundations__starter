/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

console.log(true && console.log("moo")); // it gives true, the string is defined as True by default because it exists
console.log(false && console.log("moo moo?")); // it gives false, False and True equal False. Always. So it does nothing
console.log(true || console.log("hello friend")); // Does nothing because `true ||` stops immediately, so console.log doesn’t run
console.log(false || console.log("bye friend")); // Logs "bye friend" because `false ||` moves to the second part, so console.log runs.

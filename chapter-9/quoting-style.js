let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(?<=\W)'/mg, ""));
// → "I'm the cook," he said, "it's my job."
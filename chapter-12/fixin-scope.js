specialForms.set = (args, scope) => {
    const firstArg = args[0];
     if (firstArg.type != "word") {
     throw ReferenceError("This is bad!")
   }
};

run(`
do(define(x, 4),
  define(setx, fun(val, set(x, val))),
  setx(50),
  print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError
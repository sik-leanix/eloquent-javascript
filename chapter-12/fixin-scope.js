specialForms.set = (args, scope) => {
  const firstArg = args[0].name;
   const secondArg = args[1].name;
   let oldValue = evaluate(args[0], scope);
   let newValue = evaluate(args[1], scope);
   const scopePrototye = Object.getPrototypeOf(scope);
   if (Object.prototype.hasOwnProperty.call(scopePrototye, firstArg)) {
       scopePrototye[firstArg] = newValue;
   } else {  
     throw ReferenceError("Undefined");
   }
   
   const bla = Object.prototype.hasOwnProperty.call(scope, secondArg);
   return newValue;
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
//Alter the `myBind` function wrtitten in the previous exercise to
//support partial function application of addition argumments to
//the original function

function myBind(func, context, ...someArgs) {
  return function(...moreArgs) {

    const fullArgs = someArgs.concat(moreArgs);
    return func.apply(context, fullArgs);
  };
}
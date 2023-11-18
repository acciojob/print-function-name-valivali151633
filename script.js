//your JS code here. If required.
function functionName() {
   alert(arguments.callee.name);
}
function AccioJob() {
   alert(arguments.callee.name);
}

// Calling the function will display its own name
functionName();
AccioJob();
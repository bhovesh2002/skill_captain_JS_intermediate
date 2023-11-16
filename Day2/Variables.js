const globalVariable = "This is a global variable.";

function localScopeDemo(){
    console.log("Inside outer function.");
    const localVariable = "This is a local variable.";
    console.log(localVariable)
    function innerFunction(){
        console.log("Inside inner function.");
        console.log(globalVariable);
    }
    return innerFunction();
}

var func = localScopeDemo();

// func.innerFunction();

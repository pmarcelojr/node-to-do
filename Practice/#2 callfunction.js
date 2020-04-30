function callfunction(fun){
    fun()
}

// normal function statement
function sayHi() {
    console.log('HI')
}

sayHi()

// function expression
let sayBye = function(){
    console.log('Bye')
}

callfunction(sayBye)
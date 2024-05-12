//- What is the difference between var and let?
    
//    You can reassign and redeclare with var, but you can not redeclare using the let keyword. You can access a hoisted variable with var. Let creates block scope.
    

//- What is the difference between var and const?
    
//    You can reassign and redeclare with var, but you can not redeclare or reassign using the const keyword. You can access a hoisted variable with var. Const creates block scope.
    

//- What is the difference between let and const?
    
//    You can reassign with let, but you can not redeclare or reassign using the const keyword.
    

//- What is hoisting?

// When you use var the declarations are run first, it is moved to the top, so var variable exist first even with no values yet. 
//The variable declarations made with the let keyword does not get hoisted compared to var and same with const which does not get hoisted like let keyword. We have to assign values for let and const.
    
//   It’s the way that we explain how the JS compiler works. Variables are lifting or “hoisted” to the top of the scope they are declared in. When using var, you can access the variable name and it’s undefined value before it is used later on.
    
//    Function declarations are also hoisted and can be invoked “before” they are defined in a codebase.
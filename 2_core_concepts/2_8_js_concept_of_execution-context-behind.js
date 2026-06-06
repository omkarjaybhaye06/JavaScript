/*
Javascript Execution Context

-To run our program Javascript divides our program in 2 phases.
-Whenever we created/provide code to jsx, then firstly Global Execution context is created and it gets refered to 'this' variable and is kept here.
-This all gets executed in threads. (js is single threaded, each term is considered here as 'process')

-Exection contexts types: 
1]Global Exection context 2]Function Exection context 3]Eval Execution context(can ignore)

-2Phases in Execution context:
1]Memory Creation Phase--> here only place gets assigned to variables or abything we created in our code.
2]Execution Phase-->here value allocations, calculations are performed in this phase.


Start JS program->Create Global Execution Context->Execute global code->Call function-Create Function Execution Context->
->Push to Call Stack->Run function → Finish->Pop from Call Stack->Continue global code

-Lets take an example:
*/
let val1 = 10;
let val2 = 20;
function sum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let res1 = sum(val1, val2);
let res2 = sum(30, 50);

console.log("res1:", res1);
console.log("res2:", res2);
console.log("------------------");
/*
-Execution Phase Steps:
1] Global Execution: (stores in 'this')
2] Memory Phase: val1->undefined(only place is created in momory,no value yet assigned)
                 val2->undefined
                 sum->defination (since function name so its initial value will be defination instead if undefined)
                 res1->undefined
                 res2->undefined

3]Execution Phase: val1<-10 (value gets assignes)
                   val2<-20
                   addNum --------> for this new block of context created named as 'function execution context'-->new variable environment+execution thread is created
                                                                                    |
                                                                                    |
                                                                                    \/(once implemetation of this block completes then it will get deleted from call stack i.e poped out)
                                                                                    |
                                                               -----------------------------------
                                                               |                                  |
                                                               Memory Phase                 ExectionContext Phase
                                                               val1->undefined              num1->10
                                                               val2->undefined              num2->20
                                                               total undefined              total->30 (this 30 gets returned in global execution context)
                    res1=30
                    res2=(again same process)
*/
// -Example for call stack understanding.
function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}
one();
console.log("-----------");
two();
console.log("-----------");
three();

/*
|--------------------|
|   inner() FEC      | ⬅ Top
|--------------------|
|   outer() FEC      |
|--------------------|
|   Global Context   | ⬅ Bottom
|--------------------|

eg.for two();
|--------------------|
|   three()       | ⬅ Top
|--------------------|
|   two()       |
|--------------------|
|   Global Context   | ⬅ Bottom
|--------------------|
here three()gets poped first then two() since we have called three inside two() function. can refer c:\Users\omkar Jaybhaye\Pictures\Gallery\Screenshots\Screenshot 2025-06-17 131649.png
Note: if no inner call of functions, then each function will go alone in call stack above global context and after implementation will be poped outer.
*/

const obj1 = {
  name: "Omkar",
  profession: "Software Engineer",
  overview: function () {
    //a quick function is called here inside object in key:value format
    console.log(`Hi ${this.name}, received profile as ${this.profession}`); //here this.key_name takes the current context present inside the scope of an object
    console.log(this); //this refers to current context at a instance within scope //prints all current entries within scope of the object.
  },
};
obj1.overview(); //prints Hi Omkar, received profile as Software Engineer
obj1.name = "Omkar Jaybhaye"; //value or context being changed/updated
obj1.overview(); //prints updated value since now it becomes as current contex value wothin scope of obj1 //prints Hi Omkar Jaybhaye, received profile as Software Engineer
/*
Note:As below line is called outside scope i.e now this 'this' is for current global file,when we run it in
node environment terminal, then it prints empty object {}. But when console.log(this) done in javascript encrypted browser console environment, 
this will take current context of window stating different prototypes and methods.
*/
console.log(this);

//same type concept,but for functions (behaves differently)
function game() {
  let name = "Cricket";
  console.log(this.name); //prints undefined //unlike in objects here this.key_name will not print Cricket in functions concept
  //console.log(this); //unlike in objects here this will print all prototypes and methods in node environment terminal here itself
}
game();

//another way of functions declare
const game1 = function () {
  let name1 = "Kabbadi";
  console.log(this.name1); //prints undefined here as well
  console.log(this); //prints all methods in node environment
};
game1();

//Using arrow functions ()=>{}
const game2 = () => {
  let name2 = "Volleyball";
  console.log(this.name2); //prints undefined
  console.log(this); //prints {} empty object in node environment
  //NoteThis is difference between normal function and arrow functions. So we say that this can't be used in arrow function.
};

const game3 = (score1, score2) => {
  return score1 + score2;
};
console.log(game3(5, 4));

//Arrow func can be called implicitly if one line statement of return is there, means it consider return keyword without declaring.
// const game4 = (score3, score4) => score3 + score4;
const game4 = (score3, score4) => score3 + score4; //can use parenthesis(a+b), so that we can neglect writing return and curly braces return{a+b}
console.log(game4(10, 12));

const game5 = () => ({ name: "Omkar" }); //incase we return object then parenthesis() is must, as obj is written in {key:value} form hence({key:value}) is right
console.log(game5());

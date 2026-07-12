const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock') //other way to get fetch the element

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

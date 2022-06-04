////////////////////////////// JAVASCRIPT EXERCISES ///////////////////////////////////////
//EXERCISE 1
function calculateSquare(array){
    let squares = array.map(e => e * e)
    return squares;
}

    
// EXERCISE 2
function sumCounters(array){
    let counters = array.map(e => e.count)
    let sum = counters.reduce((sum, e) => sum + e, 0);
    return sum;
    
}

// EXERCISE 3
function actorInMovies(movies, actor){
  for (i in movies) {
    movies[i].actors.push(actor)
      }
    return movies
  }


// EXERCISE 4
function listActors(movies){

      function getActors(movies){
        var i = 0 
        const actoresok = []
      for (i in movies) {
        for (let x= 0; x <movies[i].actors.length; x++){
          actores = movies[i].actors[x]
          actoresok.push(actores)
        }
      }
      const finalActors = actoresok.filter((v, i) => {
        return actoresok.indexOf(v) === i;
      }
    );
          return finalActors.sort();
      }

      const actorsArray = getActors(movies)
      const bodyEl = document.getElementById("body");
      const unorderList = document.createElement("ul");
      bodyEl.appendChild(unorderList);
      console.log(actorsArray)
        for (let i=0; i<actorsArray.length; i++){
          const element = document.createElement("li");
          element.innerHTML= actorsArray[i];
          unorderList.appendChild(element);
        }

}

// EXERCISE 5
 fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
 .then(data => {
     const element = data.find( e => e.userId === 7)
     console.log(element.id)
 })
 .catch(error => console.log(error, "Error"))

////////////////////////////////////// DATA STRUCTURE /////////////////////////////////////////////

//EXERCISE 1 
// nums = [2, 4, 6, 8, 10]
const squares = nums => nums.map(e => e * e )


//EXERCISE 2
// counters = [{count: 95}, {count: 8}, {count: 23}, {count: 51}]
const sum = counters => (counters.map(e => e.count)).reduce((sum, e) => sum + e, 0)


//EXERCISE 3
const moviesWithActor = (movies, actor) => { 
  const newMovies = structuredClone(movies);
  for (i in newMovies) { ! newMovies[i].actors.includes(actor) ? newMovies[i].actors.push(actor) : null } 
    return newMovies
}


// EXERCISE 4
const treesAreEqual = (a, b) => {
  if (!a && !b) {
    return true;
 } else if (!a || !b) {
    return false;
 } else {
    return a.value === b.value && treesAreEqual(a.left, b.left) && treesAreEqual(a.right, b.right);
 }
}


// EXERCISE 5  
const formatted = (string, n) => {
  let x = (string.replace(/-/g, "")) 
  if (x.length <= n) return x
  return  formatted(x.slice(0, x.length - n ),n ) + "-" + x.slice(x.length - n, x.length)
}


///////////////////////////////////// TEST /////////////////////////////////////////////

const testSolutions = () => {
const assert = cond => {
if (!cond) throw new Error('assertion failure')
}
const arrEq = (a, b) => a.every((x, i) => x === b[i])
const occurences = (xs, x) => xs.reduce((acc, y) => acc + (x === y ? 1 : 0), 0)
const moviesAreValid = (movies, actor) => {
for (const key in movies) {
if (occurences(movies[key].actors, actor) !== 1) return false
}
return true
}
const deepFreeze = x => {
if (Array.isArray(x)) {
Object.freeze(x)
x.forEach(deepFreeze)
}
else if (typeof x === 'object') {
Object.freeze(x)
for (const key in x) deepFreeze(x[key])
}
}
const movies1 = {
'big': {
actors: ['Elizabeth Perkins', 'Robert Loggia'],
},
'forrest gump': {
actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
},
'cast away': {
actors: ['Helen Hunt', 'Paul Sanchez'],
},
}
const movies2 = {
'good will hunting': {
actors: ['Robin Williams', 'Ben Affleck'],
},
'the departed': {
actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
},
}

deepFreeze(movies1)
deepFreeze(movies2)
const trees1 = [
{value: 1, left: {value: 2}, right: {value: 3}},
{value: 1, left: {value: 2}, right: {value: 3}},
]
const trees2 = [
{value: 1, left: {value: 2}},
{value: 1, right: {value: 2}},
]
const trees3 = [
{value: 1, left: {value: 2}, right: {value: 3}},
{value: 1, left: {value: 2}, right: {value: 3, left: {value: 4}}},
]
const trees4 = [
{value: 1, left: {value: 2}},
{value: 1, right: {value: 2}},
]
const trees5 = [
{value: 1, left: {value: 2}, right: {value: 3, right: {value: 4, left: {value: 5}}}},
{value: 1, left: {value: 2}, right: {value: 3, right: {value: 4, left: {value: 5}}}},
]
assert(arrEq(squares([2, 4, 6, 8, 10]), [4, 16, 36, 64, 100]))
assert(arrEq(squares([17, 9, 186]), [289, 81, 34596]))
assert(sum([{count: 1}, {count: 2}, {count: 3}]) === 6)
assert(sum([{count: 95}, {count: 8}, {count: 23}, {count: 51}]) === 177)
assert(moviesAreValid(moviesWithActor(movies1, 'Tom Hanks'), 'Tom Hanks'))
assert(moviesAreValid(moviesWithActor(movies2, 'Matt Damon'), 'Matt Damon'))
assert(treesAreEqual(trees1[0], trees1[1]) === true)
assert(treesAreEqual(trees2[0], trees2[1]) === false)
assert(treesAreEqual(trees3[0], trees3[1]) === false)
assert(treesAreEqual(trees4[0], trees4[1]) === false)
assert(treesAreEqual(trees5[0], trees5[1]) === true)
assert(formatted("3h5n-8v-7-m", 4) === "3h5n-8v7m")
assert(formatted("4-3t-0-u", 2) === "4-3t-0u")
assert(formatted("j-45i9ut5-34f-x10", 5) === "j45i-9ut53-4fx10")
console.log('passed')
}


testSolutions()

// For Highter order functions

// normal argument

// function hof(arg) {
// 	console.log(arg)
// }
//
// hof('argument') // 'argument'

// Normal callback function

// function hof(arg) {
// 	arg() // 'callback'
// }
//
// hof(() => console.log('Callback'))

// callback function with argument

// const hof = arg => {
// 	hof('Callback') // 'callback'
// }
//
// hof((arg) => console.log(arg))

// function getSum  (a, b)  {
// 	return a + b
// }

// const getSum = (a, b) => {
// 	return a + b
// }

// const getSum = (a, b) => a + b
//
// const getSum2 = (a) =>  a + 10

const users = [
	{ name: 'John', age: 30 },
	{ name: 'Mary', age: 25 },
	{ name: 'Bob', age: 20 },
	{ name: 'Mike', age: 35 },
	{ name: 'Jill', age: 32 },
	{ name: 'Jack', age: 40 },
	{ name: 'Alice', age: 45 },
	{ name: 'Julie', age: 35 },
	{ name: 'Jane', age: 20 },
	{ name: 'Liz', age: 25 },
]

// Top 10 array methods

// 1. ForEach
// 2. Map
// 3. filter
// 4. reduce
// 5. find
// 6. findIndex
// 7. some
// 8. every
// 9. sort
// 10. slice
// 11. splice
// 12. concat

// Example codes

// 1. foreach
users.forEach((user, index, array) => console.log(index, user.name))
// users.forEach(user => console.log(user))
// users.forEach((user, index, array) => console.log(index, user))
// users.forEach((user, index, array) => console.log(array))

// Demonstartion of forEach

// for (let i = 0; i < users.length; i++) {
// 	const item = users[i]
//
// 	callback(item, i, users)
// }

// 2. Map
// const names = users.map(user => user.name)
// console.log(names)

// const ages = users.map(user => user.age)
// console.log(ages)

// 3. filter
// const over30 = users.filter(user => user.age >= 30)
// console.log(over30)

// 4. reduce
// const totalAge = users.reduce((total, user) => total + user.age, 0)
// console.log(totalAge)

// 5. find
// const findUser = users.find(user => user.name === 'John') // find the first user with name 'John'
// console.log(findUser)

// 6. findIndex
// const findIndex = users.findIndex(user => user.name === 'Jane') // find the index of the first user with name 'John'
// console.log(findIndex)

// 7. some
// const someUser = users.some(user => user.name === 'Mike') // check if there is any user with name 'John'
// console.log(someUser)

// 8. every
// const everyUser = users.every(user => user.age >= 18) // check if all users have name 'John'
// console.log(everyUser)

// 9. sort
const sortUsers = users.sort((a, b) => a.age - b.age) // sort users by age
console.log(sortUsers)

const sortUsersDesc = users.sort((a, b) => b.age - a.age) // sort users by age in descending order
console.log(sortUsersDesc)

// 10. splice

// users.splice(2, 0, { name: 'Jenny', age: 45 }) // add new user at index 2
// console.log(users)

// const removedUsers = users.splice(2, 1) // remove user at index 2
// console.log(removedUsers)
// console.log(users)

// 11. slice
// const sliceUsers = users.slice(2, 5) // slice users from index 2 to index 5
// console.log(sliceUsers)

// extra
// 12. concat
// const concatUsers = users.concat([{ name: 'Jenny', age: 45 }]) // concat users with new user
// console.log(concatUsers)

//Task_Number_1

// function add(){
//     return function(num){
//         let sum = 10
//         console.log(sum += num)
//     }
// }
// let number = +prompt("Enter number to be added")
// let innerFunction = add()
// innerFunction(number)

//Task_Number_2

// function SearchArray(arr,input){
//     if(arr.length === 0){
//         return false
//     }
//     if(arr[0] === input){
//         return true
//     }
//     return SearchArray(arr.slice(1),input)
// }
// let arr = [2,4,6,8,10,12,14,16]
// console.log(SearchArray(arr,14))

// Task_Number_3

// function AddPara(paraText){
//     let pageBody = document.getElementById("page-body")
//     let para = "p"
//     let myPara = document.createElement(para)
//     myPara.innerText = paraText
//     pageBody.appendChild(myPara)
//     console.log(pageBody)
// }
// AddPara("A new paragraph is added")

// Task_Number_4

// function AddListItem(listText){
//     let pageBody = document.getElementById("page-body")
//     let uList = document.getElementById("u-list")
//     let listItem = "li"
//     let newListItem = document.createElement(listItem)
//     newListItem.innerText = listText
//     uList.appendChild(newListItem)
//     console.log(pageBody)
// }
// AddListItem("List Item 3")

//Task_Number_5

// function changeBackground(tagName, colorName){
//     let pageBody = document.getElementById("page-body")
//     // let tagName = " "
//     // let colorName = " "
//     let elementReference = document.querySelector(tagName)
//     elementReference.style.backgroundColor = colorName
//     console.log(pageBody)
// }
// changeBackground("ul", "green")

//Task_Number_6

// function saveObject(keyName, objName){
//     localStorage.setItem(keyName, JSON.stringify(objName))
//     console.log(objName)
// }
// let subjects = {
//     sub1 : "maths",
//     sub2 : "english",
//     sub3 : "computer",
//     sub4 : "urdu"
// }
// let courses = {
//     course1 : "Software Engineering",
//     course2 : "Information Technology",
//     course3 : "Computer Science",
//     course4 : "Artificial Intelligence"
// }
// saveObject("courses", courses)

// Task_Number_7

// function getObject(keyName){
//     let objName = localStorage.getItem(keyName)
//     return JSON.parse(objName)
// }
// let obj = getObject("courses")
// console.log(obj)

// Task_Number_8

// function saveProperty(key,value){
//     let prevObj = localStorage.getItem(key)
//     let arr = prevObj ? JSON.parse(prevObj) : []
//     let createObject = {
//         key : value
//     }
//     arr.push(createObject)
//     console.log(arr)
//     let stringifyKey = JSON.stringify(key)
//     let stringifyValue = JSON.stringify(value)
//     localStorage.setItem(stringifyKey,stringifyValue)
//     console.log(key,value)
//     let obj = localStorage.getItem(key)
//     return JSON.parse(obj)
// }

// let colors = {
//     col1 : "blue",
//     col2 : "green",
//     col3 : "purple",
//     col4 : "red"
// }
// saveProperty("col3","purple")

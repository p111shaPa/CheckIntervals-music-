'use strict'

let dataInput
let dataTeacher = ''
let dataStudent = ''
let arrayTeacher = []
let arrayStudent = []
let numbers
let yesNo = []
let table

console.log(arrayTeacher.length);

function getDataInputs (msgFrom) {
  dataInput = document.getElementById(msgFrom).value
  sortDataInputs (msgFrom) //на следующий шаг
}

//сделать проверку на пустые строки или маленькую заполненность

function sortDataInputs (msgFrom) {
  if (msgFrom === 'msgFromTeacher') {
    dataTeacher = dataInput
    splitData(msgFrom) //на следующий шаг
  } else if (msgFrom === 'msgFromStudent'){
    dataStudent = dataInput
    splitData(msgFrom) //на следующий шаг
  } else {
    console.log('error with function getDataInputs..');
  }
}

function splitData (msgFrom) {
  if (msgFrom === 'msgFromTeacher') {
    arrayTeacher = dataTeacher.split(', ') //можно добавить вариант делить по пустоте
    createTable(arrayTeacher) //на след. шаг
    addNumbers() //добавить числа в numbers на основе длинны arrayTeacher
    // console.log(`From function splitData: ${arrayTeacher}`);
  } else if (msgFrom === 'msgFromStudent') {
    arrayStudent = dataStudent.split(', ')
    createTable(arrayStudent) //на след. шаг
    compareArrays (arrayTeacher, arrayStudent) // на шаг сравнения
    // console.log(`From function splitData: ${arrayStudent}`);

  } else {
    console.log('error (msg from function splitData..)');
  }
}

function addNumbers () {
  numbers = []
  for (let i = 1; i <= arrayTeacher.length; i++)
  numbers[numbers.push()] = i
  createTable(numbers)
}

function compareArrays (arrayTeacher, arrayStudent) {
  if (arrayTeacher.length === arrayStudent.length) {
    for (let i = 0; i < arrayTeacher.length; i++) { //сравнения значений в массивах и помещение в yesNo "да" или "нет" (совпадает ли) по каждому значению
      if (arrayTeacher[i].toUpperCase() === arrayStudent[i].toUpperCase()) {
        yesNo[i] = 'да'
      } else if (arrayTeacher[i] !== arrayStudent[i]) {
        yesNo[i] = 'нет'
      }
    }
    createTable(yesNo) //на следующий шаг
  }
  else {
    console.log('From function compareArrays: Длинна массивов не равна. Введите все варианты')
    displayTables(compareArraysError)
  }
  // console.log(yesNo);

}

function createTable(array) {
  table = '<tr class="numbersDiv2">'
  for (let i = 0; i < array.length; i++) {
    table = table + `<td> ${array[i]} </td>`
  }
  table = table +'</tr>'
  console.log(`From function createTable: ${table}`) //потом можно откл
  displayTables(array)
}

//для numbers будет arrsToTable(numbers)
//для да/нет будет arrsToTable(********)
// document.getElementById('numbersDiv').innerHTML = table

function displayTables(whatToDisplay) {
  if (whatToDisplay === numbers) {
    document.getElementById('numbersDiv').innerHTML = table
  } else if (whatToDisplay === yesNo){
    document.getElementById('yesNoDiv').innerHTML = table
  } else if (whatToDisplay === arrayTeacher) {
    document.getElementById('dataTeacherDiv').innerHTML = table
  } else if (whatToDisplay === arrayStudent) {
    document.getElementById('dataStudentDiv').innerHTML = table}
    else if (whatToDisplay === compareArraysError) {
    document.getElementById('compareArraysError').innerHTML = 'Введите корректно количество ответов.'
  } else {
    document.getElementById('Ошибка').innerHTML = 'Error'
  }
}

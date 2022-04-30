'use strict'

let dataInput
let dataTeacher = ''
let dataStudent = ''
let arrayTeacher = []
let arrayStudent = []
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //вариант брать длинну из массива учителя
let yesNo = []


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
    // console.log(`From function splitData: ${arrayTeacher}`);
  } else if (msgFrom === 'msgFromStudent') {
    arrayStudent = dataStudent.split(', ')
    createTable(arrayStudent) //на след. шаг
    compareArrays (arrayTeacher, arrayStudent) // на шаг сравнения
    // console.log(`From function splitData: ${arrayStudent}`);

  } else {
    console.log('error with function splitData..');
  }
  msgFrom === 'msgFromTeacher' ? createTable(numbers) : {} //если true, то создать таблицу с порядковыми номерами, основанную на длинне arrayTeacher
}


function compareArrays (arrayTeacher, arrayStudent) {
  if (arrayTeacher.length == arrayStudent.length) {
    for (let i = 0; i < arrayTeacher.length; i++) { //сравнения значений в массивах и помещение в yesNo "да" или "нет" (совпадает ли) по каждому значению
      if (arrayTeacher[i].toUpperCase() === arrayStudent[i].toUpperCase()) {
        yesNo[i] = 'да'
      } else if (arrayTeacher[i] !== arrayStudent[i]) {
        yesNo[i] = 'нет'
      }
    }
    createTable(yesNo) //на следующий шаг
  }
  else {console.log('From function compareArrays: Длинна массивов не равна. Введите все варианты')}
  // console.log(yesNo);
  //переделать сообщение в else
}

//сделать проверку первого окна, что данные введены, без этого не производить расчет


function createTable(array) {
  let table = '<tr>'
  for (let i = 0; i < array.length; i++) {
    table = table + `<td> ${array[i]} </td>`
  }
  table = table +'</tr>'
  console.log(`From function createTable: ${table}`) //потом откл
}

//для numbers будет arrsToTable(numbers)
//для да/нет будет arrsToTable(********)


function displayTables(whereToDisplay) {
  document.getElementById(whereToDisplay).innerHTML = table
  //для numbers будет arrsToTable(numbers, 'numbersDiv')
  //для да/нет будет arrsToTable(********, 'yesnoDiv')
  //для массива верных ответов arrsToTable(arrayTeacher, 'dataTeacherDiv')
  //для массива ответов ученика arrsToTable(arrayStudent, 'dataStudentDiv')
}
//test push git

//document.getElementById('dataTeacher').innerHTML = arrayTeacher //вывод в html
//document.getElementById('dataTeacher').innerHTML = arrayStudent //вывод в html


//сделать таблицу (цифры первой строкой), чтобы каждое значение из массивов попадало в свою ячейку

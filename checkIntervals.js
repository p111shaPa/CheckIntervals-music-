'use strict'

let dataInput
let dataTeacher = ''
let dataStudent = ''
let arrFromTeacher = []
let arrFromStudent = []
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //вариант брать длинну из массива учителя


function getDataInputs (msgFrom) {
  dataInput = document.getElementById(msgFrom).value
  sortDataInputs (msgFrom)
}

//сделать проверку на пустые строки или маленькую заполненность

function sortDataInputs (msgFrom) {
  if (msgFrom === 'msgFromTeacher') {
    dataTeacher = dataInput
    splitData(msgFrom)
    // console.log(dataTeacher);
  } else if (msgFrom === 'msgFromStudent'){
    dataStudent = dataInput
    splitData(msgFrom)
    // console.log(dataStudent);
  } else {
    console.log('error with function getDataInputs..');
  }
}

function splitData (msgFrom) {
  if (msgFrom === 'msgFromTeacher') {
    arrFromTeacher = dataTeacher.split(', ')
    console.log(arrFromTeacher);
  } else if (msgFrom === 'msgFromStudent') {
    arrFromStudent = dataStudent.split(', ')
    console.log(arrFromStudent);
  } else {
    console.log('error with function splitData..');
  }
}

//сделать проверку первого окна, что данные введены, без этого не производить расчет

function arrsToTable(arrs, whereToDisplay) {
  //для numbers будет arrsToTable(numbers, 'numbersDiv')
  //для да/нет будет arrsToTable(********, 'yesnoDiv')
  //для массива верных ответов arrsToTable(arrFromTeacher, 'dataTeacherDiv')
  //для массива ответов ученика arrsToTable(arrFromStudent, 'dataStudentDiv')
  let table = '<tr>'
  for (let i = 0; i < arrs.length; i++) {
    table = table + `<td> ${arrs[i]} </td>`

  }
  table = table +'</tr>'
  // return table
  document.getElementById(whereToDisplay).innerHTML = table
}



//document.getElementById('dataTeacher').innerHTML = arrFromTeacher //вывод в html
//document.getElementById('dataTeacher').innerHTML = arrFromStudent //вывод в html


//сделать таблицу (цифры первой строкой), чтобы каждое значение из массивов попадало в свою ячейку

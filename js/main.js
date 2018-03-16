// it might be said
let quiz = (function() {
  //DOM elements
  const $age = $('#age')
  const quizCont = document.getElementById('quiz')
  const quizForm = document.getElementById('quizForm')
  const submitBtn = document.getElementById('submit')
  const $next = $('#next')
  const $mf = $('#mf')
  const $driving = $('#driving')
  const $first = $('#q_car')
  const $results = $('#results')

  let userObj = {}

  // bind events

  $age.on('focusout', validateAge)
  $age.on('focusout', validateNum)
  $age.on('focusout', save)

  // it might be said:

  $('#quiz').on('change', '#mf', save)
  $('#quiz').on('change', '#mf', validateMf)

  $('#quiz').on('change', '#driving', save)
  $('#quiz').on('change', '#driving', validateDriving)

  $('#quiz').on('change', '#first', save)
  $('#quiz').on('change', '#first', validateFirst)

  function save() {
    let db = $(this).data('db')
    let value = $(this).val()
    if (!userObj[db]) {
      userObj[db] = Number(value) ? Number(value) : value
    }
    console.log(userObj)
    return userObj
  }
  // it might be said:
  function saveToLocalStorage(obj) {
    let oldLocalstorage = JSON.parse(localStorage.getItem('cargiant')) || []
    oldLocalstorage.push(obj)
    localStorage.setItem('cargiant', JSON.stringify(oldLocalstorage))
  }

  // it might be said:
  function validateNum() {
    var num = $age.val()
    if (!/^[0-9]+$/.test(num)) {
      return false
    } else {
      return true
    }
    $(quizForm).addClass('was-validated')
  }

  // it might be said:
  function validateAge(age) {
    var $age = $('#age').val()

    if (validateNum()) {
      $(quizCont).load('../partials/partial.html #q_gender')
    } else if (!validateNum()) {
      $('.q_age').addClass('has-danger')
    }

    if ($age < 18 || $age > 80) {
      $(quizCont).load('../partials/partial.html #endPage')
    }
  }

  function validateMf() {
    $(quizCont).load('../partials/partial.html #q_driving')
  }

  function validateDriving() {
    if ($(this).val() === 'driving_no') {
      $(quizCont).load('../partials/partial.html #tyPage')
    } else {
      $(quizCont).load('../partials/partial.html #q_car')
    }
  }

  function validateFirst() {
    if ($(this).val() === 'first_yes') {
      $(quizCont).load('../partials/partial.html #tyPage')
    } else {
      $(quizCont).load('../partials/partial.html #offerPage')
    }
  }

  //it might be said:
  function loadPage(pageType) {
    if (pageType === 'tyPage') {
      $(quizCont).load('../partials/partial.html #tyPage')
    } else if (pageType === 'endPage') {
      $(quizCont).load('../partials/partial.html #endPage')
    } else {
      $(quizCont).load('../partials/partial.html #offerPage')
    }
  }

  // it might be said§
  function under(arr, age) {
    return arr.filter(e => {
      return e.age < age
    }).length
  }

  function noLicense(arr) {
    return arr.filter(e => {
      return e.driving === 'driving_yes'
    }).length
  }

  function betweenFirst(arr) {
    arr
      .filter(e => {
        return arr.age >= 18 && arr.age <= 25
      })
      .filter(e => {
        return a.first === 'first_yes'
      }).length
  }

  return {
    save: save,
    validateNum: validateNum,
    validateAge: validateAge,
    validateDriving: validateDriving,
    validateFirst: validateFirst,
    loadPage: loadPage,
    under: under,
    noLicense: noLicense,
    betweenFirst: betweenFirst
  }
})()

// it might be said
$(function() {
  var localData = JSON.parse(localStorage.getItem('cargiant'))
  var under18s = quiz.under(localData, 40)
  var licenseNo = quiz.noLicense(localData)
  var betweenAndFirst = quiz.betweenFirst(localData)
  console.log(under18s, licenseNo, betweenAndFirst)

  // $(quizCont).slick({
  //   nextArrow:
  //     '<button type="button" class="slick-next btn btn-primary">Next</button>',
  //   prevArrow:
  //     '<button type="button" class="slick-prev btn btn-primary">Previous</button>'
  // })
  //
  // $(quizCont).on('click', '.slick-next', quiz.validateAge)
})

// Frontend interface
// function to end survey and bring up last page
// hide
// show first
// if
// once user has passed validations and clicked on the next button:
// save data to local storage
// hide current question
// show next question

//if on final question,
// if submit clicked,

// Backend interface
// dealing with the data in localstorage

// it might be said:

let mainArr = [
  {
    question: 'Age',
    response: '',
    html: '',
    for: 'age'
  },
  {
    question: 'Gender',
    response: '',
    html: '',
    for: 'gender',
    flag: 'select',
    questionOptions: ['male', 'female', 'other']
  },
  {
    question: 'Do you have a driving license?',
    response: '',
    html: '',
    for: 'license'
  },
  {
    question: 'Is this your first car?',
    response: '',
    html: '',
    for: 'first'
  }
]

//DOM elements
const $age = $('#age')
const quizCont = document.getElementById('quiz')

// it might be said
let quiz = (function() {
  // this is the object that will be sent to localstorage / check if it can be an array
  var dataObj = {}
  // and an object to hold this session's data
  var userObj = {}
  const quizForm = document.getElementById('quizForm')

  // bind events

  $(quizCont).on('click', '.slick-next', { $ageVal: $age.val() }, validateNum)
  $age.on('keyup', validate)

  // save
  function save() {}
  // Validate
  // change slider
  function pushDataToObject(dataProp, data) {
    userObj[dataProp] = data
  }

  function slide() {
    // attach click handlers
  }

  // it might be said:
  function validateNum(isNum) {
    if (!/^[0-9]+$/.test(isNum) || $(quizForm).checkValidity() === false) {
      //      event.preventDefault()
      //      event.stopPropagation()
    }
    console.log(isNum.data.$ageVal)
    console.log($age.val())
    $(quizForm).addClass('was-validated')
  }

  // it might be said:
  function validateAge(age) {
    if (age < 18 || age > 80) {
      save()
      // load end page
    }
  }

  function validateLicense(validate) {
    if (validate === 'no') {
      save()
      // load end page
    }
  }

  function validateFirst(validate) {
    save()
    if (validate === 'yes') {
      // load thank for interest
    } else {
      // load offer message
    }
  }

  function validate() {
    var isValidated = ''
    if (isValidated) {
      slider()
      save()
    }
  }

  function loadPage(pageType) {
    //pageType would either be end page or offer page
  }
  return {
    save: save,
    pushDataToObject: pushDataToObject,
    slide: slide,
    validateNum: validateNum,
    validateAge: validateAge,
    validateLicense: validateLicense,
    validateFirst: validateFirst,
    validate: validate,
    loadPage: loadPage
  }
})()

const resultsCont = document.getElementById('results')
const submitBtn = document.getElementById('submit')

// it might be said
$(function() {
  $(quizCont).slick({
    nextArrow:
      '<button type="button" class="slick-next btn btn-primary">Next</button>',
    prevArrow:
      '<button type="button" class="slick-prev btn btn-primary">Previous</button>'
  })
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

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
  const submitBtn = document.getElementById('submit')

  // bind events

  //$(quizCont).on('click', '.slick-next', { $ageVal: $age.val() }, validateNum)
  $age.on('keyup', validateNum)

  // save
  function save() {}
  // Validate
  // check which slide it is currently on and then dependng, on click push the value of the input into the object with that name
  $(quizCont).on('beforeChange', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    let slickIndex = $(slick.$slides.get(currentSlide)).data('slick-index')
    if (slickIndex === 0) {
      //validateNum()
      //validateAge()
      //save()
      //loadPage()
      validateAge()
      validateNum()
      save()
    } else if (slickIndex === 1) {
      //save()
      console.log(1)
    } else if (slickIndex === 2) {
      // validateLicense
      // save()
      //loadPage()
      console.log(2)
    } else if (slickIndex === 3) {
      // validateFirst()
      // save()
      console.log(3)
    }
  })

  // it might be said:
  function validateNum() {
    var num = $age.val()
    console.log($(quizForm)[0].checkValidity())
    if (!/^[0-9]+$/.test(num) || $(quizForm)[0].checkValidity() === false) {
      // event.preventDefault()
      // event.stopPropagation()
    }

    $(quizForm).addClass('was-validated')
  }

  // it might be said:
  function validateAge(age) {
    if (age < 18 || age > 80) {
      console.log(age)
      save()
      // load end page
    }
  }

  function validateLicense(validate) {
    if (validate === 'no') {
    }
  }

  function validateFirst(validate) {
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
    validateNum: validateNum,
    validateAge: validateAge,
    validateLicense: validateLicense,
    validateFirst: validateFirst,
    validate: validate,
    loadPage: loadPage
  }
})()

// it might be said
$(function() {
  $(quizCont).slick({
    nextArrow:
      '<button type="button" class="slick-next btn btn-primary">Next</button>',
    prevArrow:
      '<button type="button" class="slick-prev btn btn-primary">Previous</button>'
  })

  $(quizCont).on('click', '.slick-next', quiz.validateAge)
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

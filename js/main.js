// it might be said:

// it might be said:
const quizCont = document.getElementById('quiz')
const quizForm = document.getElementById('quizForm')
const resultsCont = document.getElementById('results')
const submitBtn = document.getElementById('submit')

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

let quiz = function() {
  // pagination
  const previousButton = document.getElementById('previous')
  const nextButton = document.getElementById('next')
  const slides = document.querySelectorAll('.slide')
  let currentSlide = 0
  return {
    populate: function() {
      const holdHTML = []
      mainArr.forEach((element, index) => {
        if (!element.flag) {
          let questionHTML = `
                      <div class="slide>
                        <div class="form-group">
                          <label for="${element.for}">${element.question}</label>
                          <input type="text" id="${element.for}">
                        </div>
                      </div>`
          holdHTML.push(questionHTML)
        } else {
          // it might be said:
          let questionHTML = `
                      <div class="slide>
                        <div class="form-group">
                          <label for="${element.for}">${element.question}</label>
                          <select>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          </select>
                        </div>
                      </div>`
          holdHTML.push(questionHTML)
        }
      })

      quizForm.innerHTML = holdHTML.join('')
    },
    showSlide: function(n) {
      slides[currentSlide].classList.remove('active-slide')
      slides[n].classList.add('active-slide')
      currentSlide = n
      if (currentSlide === 0) {
        previousButton.style.display = 'none'
      } else {
        previousButton.style.display = 'inline-block'
      }
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none'
        submitBtn.style.display = 'inline-block'
      } else {
        nextButton.style.display = 'inline-block'
        submitBtn.style.display = 'none'
      }
    },
    results: function() {}
  }
}
//
$(function() {
  let questionnaire = quiz()
  questionnaire.populate()

  questionnaire.showSlide(0)
})
// submitBtn.on('click', quiz.results())

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

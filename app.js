const correctAnswers = ['B', 'B', 'B', 'B', 'B', 'B']
const form = document.querySelector('form')
const result = document.querySelector('.result')
const reset = document.querySelector('#reset')


reset.classList.add('disabled')


//responding to submit event
form.addEventListener('submit', e => {
    e.preventDefault()

    let userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value]

    let score = 0
    
    //check answers
    userAnswer.forEach((answer, index) => {
        
        if(answer === correctAnswers[index]) {
            score += 16.66
        }
    })
    //show answer on the page
    scrollTo(0, 0)
    

    let output = 0
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`

        if(output == score.toFixed(0)) {
            clearInterval(timer)
        } else {
            output++
        }

    }, 10);
    result.classList.remove('d-none')
    reset.classList.remove('disabled')
    
})

form.addEventListener('reset', () => {
    scrollTo(0,0)

    let output = 100
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`

        if(output == 0) {
            clearInterval(timer)
        } else {
            output--
        }

    }, 10);
})
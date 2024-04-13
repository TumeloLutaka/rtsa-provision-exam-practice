const rules = [
    {
        first:"Know the highway code very well and",
        second:"put it into practice"
    },
    {
        first:"Concentrate all time on your driving and",
        second:"you will avoid accidents"
    },
    {
        first:"Interpret the traffic situation correctly",
        second:"before you act"
    },
    {
        first:"Exercise patience and",
        second:"hang back when necessary"
    },
    {
        first:"Drive with care and",
        second:"give courtesy to other road users"
    },
    {
        first:"Adapt your speed according to the road and traffic conditions and",
        second:"never exceed the speed limit"
    },
    {
        first:"Develop your car sense and",
        second:"reduce wear and tear"
    },
    {
        first:"Use your horn considerately and",
        second:"Give proper signals"
    },
    {
        first:"Be sure your car is road worthy and",
        second:"know it's limitations"
    },
    {
        first:"Perfect your road craft and",
        second:"acknowledge courtesies shown to you by other road users"
    },
]

var rng
var rule

const ruleText = document.querySelector("#rule-text")
const rulePrefix = document.querySelector("#rule-prefix")
const rulePostfix = document.querySelector("#rule-postfix")
const correctPhraseText = document.querySelector("#correct-phrase-text")

const prefixBuffer = document.querySelector("#prefix-buffer")
const postfixBuffer = document.querySelector("#postfix-buffer")

const answerForm = document.getElementById("answer-form")
const closeReviewBtn = document.querySelector("#close-review-btn")
const nextBtn = document.querySelector("#next-btn")
const reviewBtn = document.querySelector("#review-btn")

const reviewContainer = document.querySelector("#review-container")
const rulesContainer = document.querySelector("#rules-container")
const practiceContainer = document.querySelector("#practice-container")
const promptContainer = document.querySelector("#prompt-container")

// Setting elements that need to be hidden...
const hiddens = [
    correctPhraseText,
    nextBtn,
    rulesContainer,
    practiceContainer,
    prefixBuffer,
    postfixBuffer
]

init()

function getQuestion() {
    rng = Math.floor(Math.random() * 2)
    // Randomizing question displayed.
    rule = rules[Math.floor(Math.random() * 10)]

    ruleText.style.color = "black"
    rulePrefix.innerText = ""
    rulePostfix.innerText = ""

    switch(rng) {
        case 0:
            rulePrefix.innerText = rule.first
            prefixBuffer.style.display = "none"
            postfixBuffer.style.display = "block"
            break
            case 1:
                rulePostfix.innerText = rule.second
                prefixBuffer.style.display = "block"
                postfixBuffer.style.display = "none"
            break
    }
}

function checkAnswer(userAnswer) {
    // Compare the user's answer to the rng rule text
    ruleText.style.color = "red"
    switch(rng) {
        case 1:
            // Check if user's answer is the same as first 
            if(userAnswer.toLowerCase() === rule.first.toLowerCase()){
                ruleText.style.color = "green"
            } 
            else 
                showCorrectPhraseText()
            break;
        case 0:
            // Check if user's answer is the same as second  
            if(userAnswer.toLowerCase() === rule.second.toLowerCase()){
                ruleText.style.color = "green"
            } 
            else 
                showCorrectPhraseText()
            break;
    }

    function showCorrectPhraseText() {
        correctPhraseText.innerText = `${rule.first} ${rule.second}`
        setDisplay(correctPhraseText, "block")
    }
}

function toggle(element){
    window.getComputedStyle(element).display === "none" ? element.style.display = "block" : element.style.display =  "none"
}

function setDisplay(element, displayType){
    element.style.display = displayType
}

function init() {
    hiddens.forEach( element => {
        console.log("working")
        element.style.display = "none"
    });
    
    document.querySelector("#begin-btn").addEventListener("click", () => {
        getQuestion()
        setDisplay(reviewContainer, "none")
        setDisplay(promptContainer, "none")
        setDisplay(practiceContainer, "flex")
    })

    closeReviewBtn.addEventListener('click', () => {
        toggle(reviewBtn)
        toggle(rulesContainer)

        reviewContainer.classList.remove("open")
    })
    
    nextBtn.addEventListener("click", () => {
        getQuestion()
        
        // Display the answer form and hide next button
        toggle(nextBtn)
        setDisplay(answerForm, "flex")
        setDisplay(correctPhraseText, "none")
    })

    reviewBtn.addEventListener("click", () => {
        toggle(reviewBtn)
        toggle(rulesContainer)

        reviewContainer.classList.add("open")

    })
    
    // Event listner for when user submits answer
    answerForm.addEventListener("submit", (event) => {
        event.preventDefault()
    
        // Comparing the user answer to the correct answer
        const answerInput = document.querySelector("#answer-input")
        const userAnswer = answerInput.value.trim()
        answerInput.value = ""
        checkAnswer(userAnswer)

        // Remove buffer
        switch(rng) { 
            case 0: 
                toggle(postfixBuffer) 
                rulePostfix.innerText = userAnswer
                break;
            case 1: 
                toggle(prefixBuffer)
                rulePrefix.innerText = userAnswer
                break;
        }
    
        // Hide form and display next button
        toggle(answerForm)
        toggle(nextBtn)
    })    
}
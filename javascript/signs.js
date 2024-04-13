const signs = [
    {
        name:"Yield to Pedestrian", 
        imgURL: "../images/yield-to-pedestrian.png"
    },
    {
        name:"3-Way Stop", 
        imgURL: "../images/3-way-stop.png"
    },
    {
        name:"Yield", 
        imgURL: "../images/yield.png"
    },
    {
        name:"No Entry", 
        imgURL: "../images/no-entry.png"
    },
    {
        name:"Stop", 
        imgURL: "../images/stop.png"
    },
    {
        name:"No Right Turn Ahead", 
        imgURL: "../images/no-right-turn-ahead.png"
    },
    {
        name:"One Way - (Right)", 
        imgURL: "../images/one-way-right.png"
    },
    {
        name:"Give Way to Oncoming Traffic", 
        imgURL: "../images/give-way-to-oncoming-traffic.png"
    },
    {
        name:"Roundabout", 
        imgURL: "../images/roundabout-1.png"
    },
    {
        name:"One Way - (Straight On)", 
        imgURL: "../images/one-way-straight-on.png"
    },
    {
        name:"No Parking", 
        imgURL: "../images/no-parking.png"
    },
    {
        name:"No Stopping", 
        imgURL: "../images/no-stopping.png"
    },
    {
        name:"No Overtaking", 
        imgURL: "../images/no-overtaking.png"
    },
    {
        name:"One Vehicle Width Structure", 
        imgURL: "../images/one-vehicle-width-structure.png"
    },
    {
        name:"Slippery Road", 
        imgURL: "../images/slippery-road.png"
    },
    {
        name:"Height Limit", 
        imgURL: "../images/height-limit.png"
    },
    {
        name:"Mass Limit", 
        imgURL: "../images/mass-limit.png"
    },
    {
        name:"Keep Left", 
        imgURL: "../images/keep-left.png"
    },
    {
        name:"Axel Load Limit", 
        imgURL: "../images/axel-load-limit.png"
    },
    {
        name:"4-Way Stop", 
        imgURL: "../images/4-way-stop.png"
    },
    {
        name:"Stop/Go Control", 
        imgURL: "../images/stop-go-control.png"
    },
    {
        name:"Speed Limit", 
        imgURL: "../images/speed-limit.png"
    },
    {
        name:"No Excessive Noise", 
        imgURL: "../images/no-excessive-noise.png"
    },
    {
        name:"No Buses", 
        imgURL: "../images/no-buses.png"
    },
    {
        name:"Length Limit", 
        imgURL: "../images/length-limit.png"
    },
    {
        name:"No U-Turn", 
        imgURL: "../images/no-u-turn.png"
    },
    {
        name:"No Right Turn", 
        imgURL: "../images/no-right-turn.png"
    },
    {
        name:"Cyclist Only", 
        imgURL: "../images/cyclist-only.png"
    },
    {
        name:"Buses Only", 
        imgURL: "../images/buses-only.png"
    },
    {
        name:"Width Limit", 
        imgURL: "../images/width-limit.png"
    },
    {
        name:"Limited Duration Parking", 
        imgURL: "../images/parking-with-a-60-minute-limit.png"
    },
    {
        name:"Parking", 
        imgURL: "../images/parking.png"
    },
    {
        name:"Bus Lane", 
        imgURL: "../images/bus-lane.png"
    },
    {
        name:"Disabled Person's Vehicle Parking", 
        imgURL: "../images/disabled-persons-vehicle-parking.png"
    },
    {
        name:"Roundabout", 
        imgURL: "../images/roundabout.png"
    },
    {
        name:"Stop/Yield", 
        imgURL: "../images/stop-yield.png"
    },
    {
        name:"Yield At Mini Circle", 
        imgURL: "../images/yield-at-mini-circle.png"
    },
    {
        name:"One Way - (Left)", 
        imgURL: "../images/one-way-left.png"
    },
    {
        name:"Pass On Either Side", 
        imgURL: "../images/pass-on-either-side.png"
    },
    {
        name:"Keep Right", 
        imgURL: "../images/keep-right.png"
    },
    {
        name:"Turn Left", 
        imgURL: "../images/turn-left.png"
    },
    {
        name:"Construction Vehicles Only", 
        imgURL: "../images/construction-vehicles-only.png"
    },
    {
        name:"Vehicles Dangerous Goods Only", 
        imgURL: "../images/vehicles-dangerous-goods-only.png"
    },
    {
        name:"Goods Vehicles Over GVM Only", 
        imgURL: "../images/goods-vehicles-over-gvm-only.png"
    },
    {
        name:"Vehicle Exceeding Mass Only", 
        imgURL: "../images/vehicle-exceeding-mass-only.png"
    },
    {
        name:'Distance "For"', 
        imgURL: "../images/distance-for.png"
    },
    {
        name:"Traffic Circle", 
        imgURL: "../images/traffic-circle.png"
    },
    {
        name:"Gentle Curve (Right)", 
        imgURL: "../images/gentle-curve-right.png"
    },
    {
        name:"Gentle Curve (Left)", 
        imgURL: "../images/gentle-curve-left.png"
    },
    {
        name:"Hairpin Bend (Right)", 
        imgURL: "../images/hairpin-bend-right.png"
    },
    {
        name:"Hairpin Bend (Left)", 
        imgURL: "../images/hairpin-bend-left.png"
    },
    {
        name:"Traffic Signals Ahead", 
        imgURL: "../images/traffic-signals-ahead.png"
    },
    {
        name:"Pedestrians", 
        imgURL: "../images/pedestrians.png"
    },
    {
        name:"Children", 
        imgURL: "../images/children.png"
    },
    {
        name:"Cyclist", 
        imgURL: "../images/cyclist.png"
    },
    {
        name:"Domestic Animals (Cattle)", 
        imgURL: "../images/domestic-animals-cattle.png"
    },
    {
        name:"Wild Animals Ahead", 
        imgURL: "../images/wild-animals-ahead.png"
    },
    {
        name:"Railway Crossing", 
        imgURL: "../images/railway-crossing.png"
    },
    {
        name:"Tunnel", 
        imgURL: "../images/tunnel.png"
    },
    {
        name:"Steep Descent", 
        imgURL: "../images/steep-descent.png"
    },
    {
        name:"Slow Moving Heavy Vehicles", 
        imgURL: "../images/slow-moving-heavy-vehicles.png"
    },
    {
        name:"Narrow Brigde", 
        imgURL: "../images/narrow-bridge.png"
    },
    {
        name:"Road Narrows Both Sides", 
        imgURL: "../images/road-narrows-both-sides.png"
    },
    {
        name:"Road Narrows From Left Side Only", 
        imgURL: "../images/road-narrows-from-left-side-only.png"
    },
    {
        name:"Speed Humps", 
        imgURL: "../images/speed-humps.png"
    },
    {
        name:"Danger Plate/Delineator Plate", 
        imgURL: "../images/danger-plate.png"
    },
    {
        name:"Danger Plate/Delineator Plate", 
        imgURL: "../images/danger-plate.png"
    },
    {
        name:"T - Junction Chevron", 
        imgURL: "../images/t-junction-chevron.png"
    },
    {
        name:"Dead End/Road Closed Chevron", 
        imgURL: "../images/dead-end-chevron.png"
    },
    {
        name:"Gore Plate", 
        imgURL: "../images/gore-plate.png"
    },
]

var counter
var score
var sign

const signsImg = document.querySelector("#signs-img") 
const signNameText = document.querySelector("#sign-name-text")
const signsCounterText = document.querySelector("#signs-counter-text")
const correctNameText = document.querySelector("#correct-name-text")

const answerForm = document.querySelector("#answer-form")
const nextBtn = document.querySelector("#next-btn")
const retryBtn = document.querySelector("#retry-btn")

const rulesContainer = document.querySelector("#rules-container")
const practiceContainer = document.querySelector("#practice-container")
const promptContainer = document.querySelector("#prompt-container")


// Setting elements that need to be hidden...
const hiddens = [
    correctNameText,
    nextBtn,
    retryBtn,
    practiceContainer
]

// Function called when user presses begin button or retry button
function startPractice() {
    counter = 0
    score = 0
    
    signsCounterText.innerText = `${counter + 1}/${signs.length} (${score})`
    getSign()
}

//function to get the image from the array
function getSign() {
    // sign = signs[signs.length - 1]
    sign = signs[counter] 
    signsImg.src =  sign.imgURL
}

function checkAnswer(userAnswer) {
    // Compare the user's answer to the rng rule text
    signNameText.style.color = "red"
    signNameText.innerText = userAnswer 
    if(userAnswer.toLowerCase() === sign.name.toLowerCase()){
        signNameText.style.color = "green"
        score++
    } 
    else 
    {
        correctNameText.innerText = `${sign.name}`
        setDisplay(retryBtn, "block")
        setDisplay(correctNameText, "block")
    }
}

function toggle(element){
    window.getComputedStyle(element).display === "none" ? element.style.display = "block" : element.style.display =  "none"
}

function setDisplay(element, displayType){
    element.style.display = displayType
}

init()
function init() {
    // Hidding elements that don't need to be shown first time,
    hiddens.forEach( element => {
        element.style.display = "none"
    });

    document.querySelector("#begin-btn").addEventListener("click", () => {
        startPractice()

        signsCounterText.innerText = `${counter + 1}/${signs.length} (${score})`
        setDisplay(promptContainer, "none")
        setDisplay(practiceContainer, "flex")
    })

    nextBtn.addEventListener("click", () => {
        if(counter + 1 === signs.length) {
            alert("practice complete: " + signs.length)
            return
        }
        else
            counter++;

        
        // Update counters screen
        signsCounterText.innerText = `${counter + 1}/${signs.length} (${score})`
        getSign()
        
        // Display the answer form and hide next button
        signNameText.style.color = "black"
        signNameText.innerText = "-"
        toggle(nextBtn)
        setDisplay(answerForm, "flex")
        setDisplay(retryBtn, "none")
        setDisplay(correctNameText, "none")
    })
    
    retryBtn.addEventListener("click", () => {
        startPractice()
    })
    
    // Event listner for when user submits answer
    answerForm.addEventListener("submit", (event) => {
        event.preventDefault()
    
        // Comparing the user answer to the correct answer
        const answerInput = document.querySelector("#answer-input")
        const userAnswer = answerInput.value.trim()
        answerInput.value = ""
        checkAnswer(userAnswer)

        // Update counters screen
        signsCounterText.innerText = `${counter + 1}/${signs.length} (${score})`

    
        // Hide form and display next button
        toggle(answerForm)
        toggle(nextBtn)
    })    
}
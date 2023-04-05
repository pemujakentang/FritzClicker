$(document).ready(
    function () {
        var bg = document.getElementById("backsound");
        bg.volume = 0.1;
    }
)

var money = 10000
var viewMoney = document.getElementById("jmlDuit")
viewMoney.innerText = money

var addMoney = 1
var clickerNormalCount = 0
var clickerUltraCount = 0
var clickerOmCount = 0
var clickerAdd = 1
var extraCount = 0

var interval = 1000

const mainBtn = document.getElementById("imgFritz")
const ftzNormal = document.getElementById("ftzNormal")
const ftzUltra = document.getElementById("ftzUltra")
const ftzOm = document.getElementById("ftzOm")
const addFritz = document.getElementById("addFritz")
const normalCount = document.getElementById("normalCount")
const ultraCount = document.getElementById("ultraCount")
const omCount = document.getElementById("omCount")
const fritzCount = document.getElementById("fritzCount")

var costNormal = 25
var costUltra = 200
var costOm = 1000

const viewCostNormal = document.getElementById("costNormal")
const viewCostUltra = document.getElementById("costUltra")
const viewCostOm = document.getElementById("costOm")

var costAdd = 2000

const viewCostAdd = document.getElementById("costAdd")

const containerSpam = document.getElementById("containerSpam")


mainBtn.addEventListener("click", function () {
    incMoney()
    var audio = new Audio("assets/audio/towewew.mp3")
    audio.play()
})

ftzNormal.addEventListener("click", function () {
    if (money >= costNormal) {
        clickerNormalCount++
        money -= costNormal
        viewMoney.innerText = money
        costNormal += Math.round(costNormal / 10)
        viewCostNormal.innerText = `${costNormal} Duit`
        normalCount.innerText = `Fritzer: ${clickerNormalCount}`
        var newFritz = document.createElement("img")
        newFritz.src = "assets/fritzsma.png"
        newFritz.style.width = "5rem"
        newFritz.style.height = "5rem"
        containerSpam.appendChild(newFritz)
    } else {
        alert("Duit ga cukup masseh")
    }
})

function checkNormalCost() {
    if (money < costNormal) {
        viewCostNormal.style.color = "red"
    } else {
        viewCostNormal.style.color = "black"
    }
}
setInterval(checkNormalCost, 100)

ftzUltra.addEventListener("click", function () {
    if (money >= costUltra) {
        clickerUltraCount++
        money -= costUltra
        viewMoney.innerText = money
        costUltra += Math.round(costUltra / 7.5)
        viewCostUltra.innerText = `${costUltra} Duit`
        ultraCount.innerText = `Fritzer Ultra: ${clickerUltraCount}`
        var newFritz = document.createElement("img")
        newFritz.src = "assets/fritzoren.png"
        newFritz.style.width = "5rem"
        newFritz.style.height = "5rem"
        containerSpam.appendChild(newFritz)
    } else {
        alert("Duit ga cukup masseh")
    }
})

function checkUltraCost() {
    if (money < costUltra) {
        viewCostUltra.style.color = "red"
    } else {
        viewCostUltra.style.color = "black"
    }
}
setInterval(checkUltraCost, 100)

ftzOm.addEventListener("click", function () {
    if (money >= costOm) {
        clickerOmCount++
        money -= costOm
        viewMoney.innerText = money
        costOm += Math.round(costOm / 5)
        viewCostOm.innerText = `${costOm} Duit`
        omCount.innerText = `Om Fritz: ${clickerOmCount}`
        var newFritz = document.createElement("img")
        newFritz.src = "assets/fritzitem.png"
        newFritz.style.width = "5rem"
        newFritz.style.height = "5rem"
        containerSpam.appendChild(newFritz)
    } else {
        alert("Duit ga cukup masseh")
    }
})

function checkOmCost() {
    if (money < costOm) {
        viewCostOm.style.color = "red"
    } else {
        viewCostOm.style.color = "black"
    }
}
setInterval(checkOmCost, 100)



addFritz.addEventListener("click", function () {
    if (money >= costAdd) {
        extraCount++
        addMoney++
        money -= costAdd
        viewMoney.innerText = money
        costAdd *= 1.5
        viewCostAdd.innerText = `${costAdd} Duit`
        fritzCount.innerText = `Extra Fritz: ${extraCount}`
        var newFritz = document.createElement("img")
        newFritz.src = "assets/omfritz.png"
        newFritz.style.width = "5rem"
        newFritz.style.height = "5rem"
        containerSpam.appendChild(newFritz)
    } else {
        alert("Duit ga cukup masseh")
    }
})

function checkAddCost() {
    if (money < costAdd) {
        viewCostAdd.style.color = "red"
    } else {
        viewCostAdd.style.color = "black"
    }
}
setInterval(checkAddCost, 100)

function incMoney() {
    money += addMoney
    viewMoney.innerText = money
}

function clickerNormalMoney() {
    money += addMoney * clickerNormalCount
    viewMoney.innerText = money
}
setInterval(clickerNormalMoney, interval)

function clickerUltraMoney() {
    money += addMoney * clickerUltraCount * 2
    viewMoney.innerText = money
}
setInterval(clickerUltraMoney, interval)

function clickerOmMoney() {
    money += addMoney * clickerOmCount * 4
    viewMoney.innerText = money
}
setInterval(clickerOmMoney, interval)

var blitzFritz = document.getElementById("frtBlitz")

blitzFritz.addEventListener("click", function () {
    var i = 60
    function countDown() {
        blitzFritz.disabled = true
        blitzFritz.innerText = `Blitz Fritz ${i}`
        i--
        if (i == 0) {
            clearInterval(countDown)
            blitzFritz.disabled = false
        }
    }
    setInterval(countDown, 1000)
})
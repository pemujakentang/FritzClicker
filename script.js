$(document).ready(
    function () {
        var bg = document.getElementById("backsound");
        bg.volume = 0.1;
    }
)

var money = Math.round(Math.random() * 1000)
var viewMoney = document.getElementById("jmlDuit")
viewMoney.innerText = money

var addMoney = 1
var clickerNormalCount = 0
var clickerUltraCount = 0
var clickerOmCount = 0
var clickerAdd = 1
var extraCount = 0

var interval = 1000

const fritzBtn = document.getElementById("imgFritz")
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
var costOm = 500

const viewCostNormal = document.getElementById("costNormal")
const viewCostUltra = document.getElementById("costUltra")
const viewCostOm = document.getElementById("costOm")

var costAdd = 2000

const viewCostAdd = document.getElementById("costAdd")

const containerSpam = document.getElementById("containerSpam")


fritzBtn.addEventListener("click", function () {
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
        crackerCost = Math.round(crackerCost * (1 + (extraCount / 10)))
        frtCracker.innerText = `Fritz Crackers (${crackerCost} Duits)`
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
    money += addMoney * multiplier
    viewMoney.innerText = money
}

function clickerNormalMoney() {
    money += addMoney * multiplier * clickerNormalCount
    viewMoney.innerText = money
}
setInterval(clickerNormalMoney, interval)

function clickerUltraMoney() {
    money += addMoney * multiplier * clickerUltraCount * 2
    viewMoney.innerText = money
}
setInterval(clickerUltraMoney, interval)

function clickerOmMoney() {
    money += addMoney * multiplier * clickerOmCount * 4
    viewMoney.innerText = money
}
setInterval(clickerOmMoney, interval)

var blitzFritz = document.getElementById("frtBlitz")
var blitzCost = 5000
blitzFritz.innerText = `Blitz Fritz (${blitzCost} Duits)`
var multiplier = 1

blitzFritz.addEventListener("click", function () {
    if (money > blitzCost) {
        var i = 600
        multiplier = 2
        money -= blitzCost
        viewMoney.innerText = money
        blitzCost = Math.round(blitzCost * 1.25)
        blitzFritz.style.backgroundColor = "yellow"
        fritzBtn.setAttribute("src", "/assets/dugemsenyum.gif")
        blitzFritz.disabled = true
        j=900
        function countDown() {
            blitzFritz.innerText = `Blitz Fritz ${Math.floor(i / 10)}`
            i--
            if (i < 0) {
                blitzFritz.innerText = `Blitz Fritz (${blitzCost} Duits) ${Math.floor(j / 10)}`
                j--
                multiplier = 1
                blitzFritz.style.backgroundColor = ""
                fritzBtn.setAttribute("src", "/assets/omfritz.png")
            }
            if (i <= -900) {
                clearInterval(cDown)
                blitzFritz.disabled = false
            }
        }
        cDown = setInterval(countDown, 100)
    }else{
        alert("Duit ga cukup masseh")
    }

})

function checkBlitzCost() {
    if (money < blitzCost) {
        blitzFritz.style.color = "red"
    } else {
        blitzFritz.style.color = "black"
    }
}
setInterval(checkBlitzCost, 100)

var masukSurga = document.getElementById("frtSurga")
var surgaCost = 1
masukSurga.innerText = `Masuk Surga (${surgaCost} Duits)`

masukSurga.addEventListener("click", function () {
    if (money >= surgaCost) {
        money -=surgaCost
        viewMoney.innerText = money
        var i = 50
        fritzBtn.setAttribute("src", "/assets/fritzspin.gif")
        masukSurga.disabled=true
        function delay(){
            i--
            if (i<0) {
                location.href = 'https://www.youtube.com/watch?v=hvL1339luv0'
                clearInterval(delayInterval)
            }
        }
        delayInterval = setInterval(delay, 100)
    } else {
        alert("Duit ga cukup masseh")
    }

})

function checkSurgaCost() {
    if (money < surgaCost) {
        masukSurga.style.color = "red"
    } else {
        masukSurga.style.color = "black"
    }
}
setInterval(checkSurgaCost, 100)

var fritzinator = document.getElementById("frtInator")
var inatorCost = 5000
fritzinator.innerText = `Fritzinator (${inatorCost} Duits)`

fritzinator.addEventListener("click", function(){
    if (money>=inatorCost) {
        money-=inatorCost
        inatorCost = Math.round(inatorCost*1.25)
        fritzinator.innerText = `Fritzinator (${inatorCost} Duits)`
        viewMoney.innerText = money
        var temp = clickerUltraCount
        clickerUltraCount *=2
        ultraCount.innerText = `Fritzer Ultra: ${clickerUltraCount}`
        for (let index = 0; index < temp; index++) {
            var newFritz = document.createElement("img")
            newFritz.src = "assets/fritzoren.png"
            newFritz.style.width = "5rem"
            newFritz.style.height = "5rem"
            containerSpam.appendChild(newFritz)
        }
        var temp = clickerNormalCount
        clickerNormalCount *= 2
        normalCount.innerText = `Fritzer: ${clickerNormalCount}`
        for (let index = 0; index < temp; index++) {
            var newFritz = document.createElement("img")
            newFritz.src = "assets/fritzsma.png"
            newFritz.style.width = "5rem"
            newFritz.style.height = "5rem"
            containerSpam.appendChild(newFritz)
        }
        var temp = clickerOmCount
        clickerOmCount *= 2
        omCount.innerText = `Om Fritz: ${clickerOmCount}`
        for (let index = 0; index < temp; index++) {
            var newFritz = document.createElement("img")
            newFritz.src = "assets/fritzitem.png"
            newFritz.style.width = "5rem"
            newFritz.style.height = "5rem"
            containerSpam.appendChild(newFritz)
        }
        var i = 300
        fritzinator.disabled = true
        function countDown(){
            i--
            fritzinator.innerText = `Fritzinator (${inatorCost} Duits) ${Math.floor(i / 10)}`
            if (i<0) {
                fritzinator.disabled = false
                clearInterval(cDown)
            }
        }
        cDown = setInterval(countDown, 100)
    }else{
        alert("Duit ga cukup masseh")
    }
})

function checkInatorCost() {
    if (money < inatorCost) {
        fritzinator.style.color = "red"
    } else {
        fritzinator.style.color = "black"
    }
}
setInterval(checkInatorCost, 100)

var frtCracker = document.getElementById("frtCracker")
var crackerCost = 400
frtCracker.innerText = `Fritz Crackers (${crackerCost} Duits)`

frtCracker.addEventListener("click", function(){
    if (money>=crackerCost) {
        money -= crackerCost
        crackerCost = Math.round(crackerCost*(1+(extraCount/10)))
        frtCracker.innerText = `Fritz Crackers (${crackerCost} Duits)`
        viewMoney.innerText = money
        frtCracker.style.backgroundColor = "yellow"
        fritzBtn.setAttribute("src", "/assets/fritzmakan.gif")
        frtCracker.disabled = true
        var i = 162
        var j = 900
        function countDown(){
            frtCracker.innerText = `Fritz Crackers ${Math.floor(i / 10)}`
            i--
            if (i<0) {
                frtCracker.innerText = `Fritz Crackers (${crackerCost} Duits) ${Math.floor(j / 10)}`
                j--
                frtCracker.style.backgroundColor = ""
            }
            if (i<=-900) {
                clearInterval(cDown)
                frtCracker.disabled=false
            }
        }
        var x = 5
        function makanCracker(){
            money += 100*addMoney*multiplier
            if (x<=1) {
                clearInterval(cMakan)
                fritzBtn.setAttribute("src", "/assets/omfritz.png")
            }
            x--
        }
        cMakan = setInterval(makanCracker, 3250)
        cDown = setInterval(countDown, 100)

    }else{
        alert("Duit ga cukup masseh.")
    } 
})

function checkCrackerCost() {
    if (money < crackerCost) {
        frtCracker.style.color = "red"
    } else {
        frtCracker.style.color = "black"
    }
}
setInterval(checkCrackerCost, 100)

var frtGacha = document.getElementById("frtGacha")
var gachaCost = 1000
frtGacha.innerText = `Fritz Ngegacha (${gachaCost} Duits)`

frtGacha.addEventListener("click", function(){
    if (money>=gachaCost) {
        money -= gachaCost
        viewMoney.innerText = money
        var ranNum = Math.ceil(Math.random() * 5000) * (Math.round(Math.random()) ? 1 : -1) + 2000
        money += ranNum
        viewMoney.innerText = money
        i = 300
        frtGacha.disabled = true
        function countDown() {
            frtGacha.innerText = `Fritz Ngegacha (${gachaCost} Duits) ${Math.round(i/10)}`
            i--
            if (i < 0) {
                frtGacha.disabled = false
                clearInterval(cDown)
            }
        }
        cDown = setInterval(countDown, 100)
    }else{
        alert("Duit ga cukup masseh")
    }
})

function checkGachaCost() {
    if (money < gachaCost) {
        frtGacha.style.color = "red"
    } else {
        frtGacha.style.color = "black"
    }
}
setInterval(checkGachaCost, 100)

var frtKaya = document.getElementById("frtKaya")
var costKaya = 100
frtKaya.innerText = `Uang Haram (${costKaya} Duits)`

frtKaya.addEventListener("click", function(){
    if (money>=costKaya) {
        money -= costKaya
        viewMoney.innerText = money
        var ranNum = Math.round(Math.random()*2000)
        money += ranNum
        viewMoney.innerText = money
        frtKaya.disabled=true
        frtKaya.style.display="none"
    }else{
        alert("Duit ga cukup masseh")
    }
})

function checkKayaCost() {
    if (money < costKaya) {
        frtKaya.style.color = "red"
    } else {
        frtKaya.style.color = "black"
    }
}
setInterval(checkKayaCost, 100)
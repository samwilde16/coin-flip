let options = ["Heads", "Tails"]

function flipCoin() {
    document.getElementById("coin").innerHTML = options[Math.floor(Math.random()*options.length)];
}
let options = ["heads", "tails"]

function flipCoin() {
    document.getElementById("coin").innerHTML = options[Math.floor(Math.random()*options.length)];
}
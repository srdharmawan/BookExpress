document.getElementById("total").value = 3

function calcPattern(n) {

    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            string += "&#160;&#160;";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "* ";
        }
        string += "<br>";
    }

    document.getElementById("pattern").innerHTML = string;
}
document.getElementById('btn').onclick = function() {

    let x = document.getElementById("total").value
    calcPattern(x)

}
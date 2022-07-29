// let txt = ""
// let n = 8
// for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= i; j++) {
//         // console.log("* ".repeat(i));
//         txt += "*"
//     }
//     for (var x = 0; x <= n - j; x++) {
//         txt += "-"
//     }
//     txt += "\n"
// }
// console.log(txt)

document.getElementById("row").value = 15
document.getElementById("col").value = 25

function calcPattern(n1, n2) {

    let txt = ""
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            // console.log("* ".repeat(i));
            let x0 = i + n2 / 8
            let x = Math.floor(x0)
            if (j < x) {
                txt += "*"
            } else if (j == x) {
                txt += "$"
            } else if (j > i + n2 / 8) {
                txt += "-"
            }
        }
        txt += "<br>"
    }

    document.getElementById("pattern").innerHTML = txt;
}
document.getElementById('btn').onclick = function() {

        let x1 = document.getElementById("row").value
        let x2 = document.getElementById("col").value
        calcPattern(x1, x2)

    }
    // console.log(txt)


// ----  HTMLs  ----

// for (let i = 1; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*" + " ")
//     }
//     document.write("<br>")
// }
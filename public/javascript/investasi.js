/* 
 A = Total Amounts (Accounts), AP = Annualize Payments, R = interest rate (annually), t = number of year
 A = AP ((1 + R)^t – 1) / R

 AP ==> Reverse Maths, So, it would be
 e.g. 1,000,000 = AP ((1 + 0.15)^12 - 1) / 0.15
 => ((1+0.15)^12 - 1) / 0.15 = 29.0016673698247412109375
    1,000,000 / 29.0016673698247412109375 = 34,480.776130839509696460120683431
    Now, 34,480.776130839509696460120683431 is the AP.. Try to apply ^ this number into the first formula, it'd be Exactly 1,000,000
*/

// Under Construction ---

document.getElementById('btn').onclick = function() {

    let targetDana = document.getElementById("targetDana").value
    let tahun = document.getElementById("tahun").value
    let returnInv = document.getElementById("returnInv").value
        // let awalDana = document.getElementById("awalDana").value
    let inflasi = document.getElementById("inflasi").value
    let bulanan
        // let bawaan = 0

    // ------- Counting the total amounts
    // targetDana = (bulanan * 12)((1 + (returnInv - inflasi)) ^ tahun - 1) / returnInv
    // bawaan = awalDana(1 + returnInv) ^ tahun
    // targetDana += bawaan

    // ------- Counting $bulanan
    bulanan = targetDana / (((1 + (returnInv - inflasi)) ^ tahun - 1) / returnInv)
        // bawaan = awalDana(1 + returnInv) ^ tahun
    document.getElementById('hasil').innerHTML = bulanan

}
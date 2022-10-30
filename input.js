const namaProduk = document.getElementsByTagName('input')[0];
const hargaProduk = document.getElementsByTagName("input")[1];
const qty = document.getElementsByTagName("input")[2];
let total = document.getElementsByTagName("input")[3];
const diskon = document.getElementsByTagName("input")[4];
const subTotal = document.getElementsByTagName("input")[5];

const btnPay = document.getElementById('btn-pay');
const btnDiskon = document.getElementById('btn-diskon');
const btnClear = document.getElementById('btn-clear');


btnClear.addEventListener("click",() => {
    namaProduk.value = "";
    hargaProduk.value = "";
    qty.value = "";
    total.value = "";
    diskon.value = "";
    subTotal.value = "";
});
btnPay.addEventListener("click", () => {
    total.value = eval(hargaProduk.value * qty.value);
});
btnDiskon.addEventListener("click", () => {
    subTotal.value = total.value - diskon.value;
});

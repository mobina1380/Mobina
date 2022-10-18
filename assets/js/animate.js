var j = 0;
var tx = "hjhggfgkjkhkh";
var spee = 70;

function typeWriterr() {
    alert("d;lldf");
    if (j < tx.length) {
        document.getElementById("demome").innerHTML += tx.charAt(j);
        j++;
        setTimeout(typeWriterr, spee);
    }
}
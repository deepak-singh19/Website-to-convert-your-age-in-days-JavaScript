
function fn1() {
    let j = prompt("What is your birth year")
    console.log(j)

    var m = 2020 - j;
    var n=m*365;
    console.log(n)
    var m1 = document.createElement("m1");
    var res = document.createTextNode("You are "+n+"  days old")
    m1.setAttribute('id', 'f');
    m1.appendChild(res);
    document.getElementById('result').appendChild(m1);
    console.log(n)

}

function reset()
{
    document.getElementById('f').remove();
}
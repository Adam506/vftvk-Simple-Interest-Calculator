
function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    i = document.getElementById("result").value;

    let totalInterest = (r*y*p)/100;
    let year = 2020;
    y = parseInt(y);
    const total = (year + y);
    if (p || r || y <= 0)
    {
        alert("please input positive number");
        document.getElementById('principal').value = ''
        document.getElementById('years').value = ''
    }
    document.getElementById('result').innerHTML=
    "If you deposit " + p + "<br>" +
    'at an interest rate of ' + r + '%' + "<br>" +
    'You will receive an amount of ' + totalInterest + "<br>" +
    'in the year ' + total;
    
   
}
   

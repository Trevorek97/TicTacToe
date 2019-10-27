var tab = [];
var isWinner = false;
var sign = 'o';

function makeBoard()
{
    for(var i=0;i<3;i++)
    {
        tab[i]=[];
        for(var j=0;j<3;j++)
        {
            tab[i][j]='';
        }
    }
}


function move()
{
    var a = document.querySelectorAll(".field");
    for(i=0;i<9;i++)
    {
        a[i].onclick=function()
        {
            if(this.innerHTML==='' && isWinner===false)
            {
                changeSign();
                this.innerHTML=sign;
                if(sign === 'o') this.style.color='darkorange';
                else if (sign ==='x') this.style.color='darkblue';
                checkWinner();
                whoIsNext();
            }
        }
    }
}

function changeSign()
{
    if(sign === 'o') sign = 'x';
    else if (sign === 'x') sign = 'o';
}


function checkWinner()
{
    var a=document.querySelectorAll(".field");
    var winner;

         if (a[0].innerHTML === a[1].innerHTML && a[1].innerHTML === a[2].innerHTML && a[0].innerHTML === a[2].innerHTML) winner =  a[0].innerHTML;
    else if (a[3].innerHTML === a[4].innerHTML && a[4].innerHTML === a[5].innerHTML && a[3].innerHTML === a[5].innerHTML) winner =  a[3].innerHTML;
    else if (a[6].innerHTML === a[7].innerHTML && a[7].innerHTML === a[8].innerHTML && a[6].innerHTML === a[8].innerHTML) winner =  a[6].innerHTML;
    else if (a[0].innerHTML === a[3].innerHTML && a[3].innerHTML === a[6].innerHTML && a[0].innerHTML === a[6].innerHTML) winner =  a[0].innerHTML;
    else if (a[1].innerHTML === a[4].innerHTML && a[4].innerHTML === a[7].innerHTML && a[1].innerHTML === a[7].innerHTML) winner =  a[1].innerHTML;
    else if (a[2].innerHTML === a[5].innerHTML && a[5].innerHTML === a[8].innerHTML && a[2].innerHTML === a[8].innerHTML) winner =  a[2].innerHTML;
    else if (a[0].innerHTML === a[4].innerHTML && a[4].innerHTML === a[8].innerHTML && a[0].innerHTML === a[8].innerHTML) winner =  a[0].innerHTML;
    else if (a[2].innerHTML === a[4].innerHTML && a[4].innerHTML === a[6].innerHTML && a[2].innerHTML === a[6].innerHTML) winner =  a[2].innerHTML;

    if(winner === 'o')
    {
        alert("Wygrywa kółko!");
        isWinner = true;
        return;
    }
    else if (winner === 'x')
    {
        alert("Wygrywa krzyżyk!");
        isWinner = true;
        return;
    }

    var test=0;
    while(test<9)
    {
        if(a[test].innerHTML === '') break;
        else test++;
    }
    if(test === 9)
    {
        alert("Remis!");
        isWinner=true;
    }
}

function whoIsNext()
{
    var a = document.getElementById("turn");

    if (sign === 'o')
    {
        a.style.color='darkblue';
        a.innerHTML = 'x';
    }
    else if (sign === 'x')
    {
        a.style.color='darkorange';
        a.innerHTML = 'o';
    }
}

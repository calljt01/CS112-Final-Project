/**
 * Created by Justin Call on 10/30/2016.
 */

moneyList = [.01,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
var sessionList = [];
function Get(element){
    return document.getElementById(element);
}
function RandInt(low, high){
    return Math.floor(Math.random()*(high-low+1) + low);
}
function Fade(element){
    document.getElementById(element).setAttribute("class", "faded");
}
function Disable(element){
    document.getElementById(element).setAttribute("disabled", "true");
}
function Enable(element){
    document.getElementById(element).removeAttribute("disabled");
}
function GetSuitcase(){
    var suitcase;
    if (Get("suitcase1").checked==true){
        suitcase = 1;
    } else if (Get("suitcase2").checked==true){
        suitcase = 2;
    } else if (Get("suitcase3").checked==true){
        suitcase = 3;
    } else if (Get("suitcase4").checked==true){
        suitcase = 4;
    } else if (Get("suitcase5").checked==true){
        suitcase = 5;
    } else if (Get("suitcase6").checked==true){
        suitcase = 6;
    } else if (Get("suitcase7").checked==true){
        suitcase = 7;
    } else if (Get("suitcase8").checked==true){
        suitcase = 8;
    } else if (Get("suitcase9").checked==true){
        suitcase = 9;
    } else if (Get("suitcase10").checked==true){
        suitcase = 10;
    } else if (Get("suitcase11").checked==true){
        suitcase = 11;
    } else if (Get("suitcase12").checked==true){
        suitcase = 12;
    } else if (Get("suitcase13").checked==true){
        suitcase = 13;
    } else if (Get("suitcase14").checked==true){
        suitcase = 14;
    } else if (Get("suitcase15").checked==true){
        suitcase = 15;
    } else if (Get("suitcase16").checked==true){
        suitcase = 16;
    } else if (Get("suitcase17").checked==true){
        suitcase = 17;
    } else if (Get("suitcase18").checked==true){
        suitcase = 18;
    } else if (Get("suitcase19").checked==true){
        suitcase = 19;
    } else if (Get("suitcase20").checked==true){
        suitcase = 20;
    } else if (Get("suitcase21").checked==true){
        suitcase = 21;
    } else if (Get("suitcase22").checked==true){
        suitcase = 22;
    } else if (Get("suitcase23").checked==true){
        suitcase = 23;
    } else if (Get("suitcase24").checked==true){
        suitcase = 24;
    } else if (Get("suitcase25").checked==true){
        suitcase = 25;
    } else if (Get("suitcase26").checked==true){
        suitcase = 26;
    }
    return suitcase;
}
function Shuffle(list){
    var mixList = list;
    var temporary;
    for (var i = 1; i<mixList.length; i++){
        j = RandInt(0,26);
        temporary = mixList[i];
        mixList[i] = mixList[j];
        mixList[j] = temporary;
    }
    return mixList
}

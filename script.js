/**
 * Created by Justin Call on 10/30/2016.
 */

var moneyList = [.01,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
var sessionList = [];
var primaryCase;
var primaryMoney;
var suitcasesLeft;
var deal;
function Get(element){
    return document.getElementById(element);
}
function RandInt(low, high){
    return Math.floor(Math.random()*(high-low+1) + low);
}
function Fade(element){
    Get(element).setAttribute("class", "faded");
}
function Disable(element){
    Get(element).setAttribute("disabled", "true");
}
function Enable(element){
    Get(element).removeAttribute("disabled");
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
    for (var i = 0; i<mixList.length; i++){
        j = RandInt(0,25);
        temporary = mixList[i];
        mixList[i] = mixList[j];
        mixList[j] = temporary;
    }
    moneyList = [.01,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
    return mixList
}
function Load(){
    sessionList = Shuffle(moneyList);
    suitcasesLeft = 26;
    Get("divUserPrompt").innerHTML = "Choose your case.";
}
function findIndex(money){
    for (var i = 0; i < sessionList.length; i++){
        if (moneyList[i] == money){
            return i;
        }
    }
}
function Play(){
    var suitcase = GetSuitcase();
    var money = sessionList[suitcase-1];
    sessionList[suitcase-1] = 0;
    var element = "suitcase" + suitcase;
    Disable(element);
    suitcasesLeft -= 1;
    var index = findIndex(money);
    element = "" + index;
    Fade(element);
    Get("divUserPrompt").innerHTML = "Case #" + suitcase + " held $" + money + ". Choose from the remaining cases." + suitcasesLeft;
    if (suitcasesLeft == 1){
        Disable("btnEnter");
        Get("divUserPrompt").innerHTML = "Your suitcase is the only one left. You win $" + primaryMoney + "!!!";
    }
    if (suitcasesLeft < 13 && suitcasesLeft%2==0){
        Deal();
    }
}
function ChooseCase(){
    primaryCase = GetSuitcase();
    primaryMoney = sessionList[primaryCase - 1];
    var Element = "suitcase" + primaryCase;
    Disable(Element);
    Disable("btnChooseCase");
    Enable("btnEnter");
    Get("divCaseNumber").innerHTML = primaryCase;
    Get("divUserPrompt").innerHTML = "You have chosen case #" + primaryCase + ". Choose from the remaining cases."
}
function Deal(){
    Enable("btnAccept");
    Enable("btnDecline");
    Disable("btnEnter");
    var total = 0;
    for (i = 0; i < sessionList.length; i++){
        total += sessionList[i];
    }
    deal = (total/suitcasesLeft).toFixed(2);
    Get("divDealerPrompt").innerHTML = "The banker has given you an offer of $" + deal + " Do you accept?";
}
function Accept(){
    Disable("btnAccept");
    Disable("btnDecline");
    Get("divUserPrompt").innerHTML = "You have accepted the offer! You win $" + deal + "!!!";
    Get("divDealerPrompt").innerHTML = "Your case held $" + primaryMoney + ".";
}
function Decline(){
    Disable("btnAccept");
    Disable("btnDecline");
    Enable("btnEnter")
    Get("divDealerPrompt").innerHTML = "";
}
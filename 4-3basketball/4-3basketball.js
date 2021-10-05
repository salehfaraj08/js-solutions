function average(score1,score2,score3){
    return (score1+score2+score3)/3;
}

function Winnerteam(JohnsTeam,MikesTeam,MarysTeam){
    let max = Math.max(JohnsTeam,MikesTeam,MarysTeam);
    if(JohnsTeam===MikesTeam&&JohnsTeam===MarysTeam){
        console.log("draw");
    }
    else if(max===JohnsTeam){
        console.log("winner jhons team :",JohnsTeam);
    }
    else if(max===MikesTeam){
        console.log("winner mikes team :",MikesTeam);
    }
    else if(max===MarysTeam){
        console.log("winner marys team :",MarysTeam);
    }
    
}
let JohnsTeam = average(89,120,103);
let MikesTeam = average(116,94,123);
let MarysTeam = average(100,90,70);
Winnerteam(JohnsTeam,MikesTeam,MarysTeam);

JohnsTeam = average(130,120,120);
MikesTeam = average(116,94,123);
MarysTeam = average(130,125,120);
Winnerteam(JohnsTeam,MikesTeam,MarysTeam);

JohnsTeam = average(116,94,123);
MikesTeam = average(116,94,123);
MarysTeam = average(116,94,123);
Winnerteam(JohnsTeam,MikesTeam,MarysTeam);
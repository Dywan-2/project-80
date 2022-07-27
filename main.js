var names=[];
var display=[];
function submit(){
    for(var i=1; i<=4; i++){
        var n=document.getElementById("name_of_the_student_"+i).value;
        names.push(n);
    }
    var len=names.length;
    for(var four=0; four<len; four++){
        display.push("<h3>Name "+names[four]+"</h3>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display;
    var r=display.join("");
    document.getElementById("display_name_without_commas").innerHTML=r;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    names.sort();
    var displaysort=[];
    var len=names.length;
    for(var four=0; four<len; four++){
        displaysort.push("<h3>Name "+names[four]+"</h3>");
    }
    document.getElementById("display_name_with_commas").innerHTML=displaysort;
    var r=displaysort.join("");
    document.getElementById("display_name_without_commas").innerHTML=r;
}
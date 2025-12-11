//MACHINE PROBLEM: 1
function replaceAll(){
    let orig_str = document.getElementById("inputString").value;

    let trimmed_str = orig_str.trim();
    let modified_str = trimmed_str.replace(/ /g, "" );

    document.getElementById("txtResult").innerHTML = modified_str;


}


//MACHINE PROBLEM: 5
function EmailCheck(){
    let checker_str = document.getElementById("inputStringCheckEmail").value;

    if (checker_str.includes("@") && checker_str.includes("gmail.com")){
        document.getElementById("txtResultEmail").innerHTML = checked_str= "Valid Email Address";
    }
    else{
        document.getElementById("txtResultEmail").innerHTML = checked_str= "Invalid Email Address";
    }

    


}

//MACHINE PROBLEM: 2
function SearchAll(){
    let orig_str = document.getElementById("inputStringSearch").value;



     document.getElementById("txtResultSearch").innerHTML = Searched_str;
}

//MACHINE PROBLEM: 3
function replaceWord(){
    let og_str = document.getElementById("inputStringReplaceWord").value;

    let replaced_str = og_str.replace();
    let modified_str = replaced_str.replace();

    document.getElementById("txtResultReplaceWord").innerHTML = modified_str;


}

//MACHINE PROBLEM: 4

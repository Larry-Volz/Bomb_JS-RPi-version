// let $buttonId = ""
// let width=320;
// let height=240;
// // self.moveTo((screen.availwidth-width)/2,(screen.availheight-height)/2);
// window.resizeTo(width,height);

let code = "4590"
let code_guessed = ""

//Get input from buttons - event handler
$("html").on('click', (evt)=> {
    $buttonId = $(evt.target).closest("li").attr("id");

    if ($buttonId == "delete"){
        $buttonId = "";
        if (code_guessed.length>1) {
            code_guessed = code_guessed.slice(0, -1);
            $("#code-output").text(code_guessed);
        } else {
            code_guessed = "";
            $("#code-output").text("Enter 4-Digit Disarm Code");
        }


    } else if ($buttonId == "enter") {
        if (check_guess(code_guessed)) {
                    console.log("win!");
                    $("#code-output").text("WIN!")
                    code_guessed=""
                    //Do win routine with audio
                } else {
                    console.log("lose!");
                    code_guessed="";
                    console.log("code guessed",code_guessed)
                    $("#code-output").text("WRONG! Try again")
                }

        // code_guessed += String($buttonId)
        // // console.log("code guessed",code_guessed)
        // $("#code-output").text(code_guessed)
    } else if ($buttonId) {
        code_guessed += String($buttonId);
        $("#code-output").text(code_guessed);
    }
});




function check_guess(code_guessed){
    if (code_guessed == code){
        return true;
    }
}
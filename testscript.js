// JavaScript source code
// JavaScript source code
function LoadToHtmlMain() {
    if (window.localStorage.length != 0) {
        let indexes = JSON.parse(localStorage.getItem(IndexesString))

    } else {
        let indexes = ["", "", "", "", "", "", "", ""];
        localStorage.setItem(JSON.stringify(indexes), IndexesString);
    }

    function ChatUpload(input) {
        input = document.getElementById('inputflow')
        console.log(input)
        for (let i = 0; (indexes[i]) = ""; i++) {
            if (i = 7) {
                if (indexes[7] != "") {

                    indexes = ["", "", "", "", "", "", "", ""];
                } else {


                }


            } else {
                if (indexes[i] = "") {
                    console.log("emptyslot" + i);
                    indexes[i] = input;
                    localStorage.setItem(JSON.stringify(indexes), IndexesString);
                    break
                }

            }



        }


    }

    function ResetChat() {
        indexes = ["", "", "", "", "", "", "", ""];
        localStorage.clear;

    }

    function LoadToHtml() {
        document.getElementById('flow0').innerHTML = indexes[0];
        document.getElementById('flow1').innerHTML = indexes[1];
        document.getElementById('flow2').innerHTML = indexes[2];
        document.getElementById('flow3').innerHTML = indexes[3];
        document.getElementById('flow4').innerHTML = indexes[4];
        document.getElementById('flow5').innerHTML = indexes[5];
        document.getElementById('flow6').innerHTML = indexes[6];
        document.getElementById('flow7').innerHTML = indexes[7];
    }


































}
console.log("h");

const changetext = ["Language skills","Career life",
"Study in Japan" ];
const gettextani = document.querySelector('.textani');

function* generator(){
    var idx = 0;
    while(true){
        yield idx++;
        if(idx > 2){
            idx = 0;
        }
    }
}

let gen = generator();
showwords(changetext[gen.next().value]);


function showwords(word){
    let x = 0;

    gettextani.innerHTML = "";
    gettextani.classList.add(changetext.indexOf(word));

    let showinterval = setInterval(function(){
        if(x >= word.length){
           clearInterval(showinterval);
           delayTimer();
        //    deletewords();
        }else{
            gettextani.innerHTML += word[x];
            x++;
        }
    },100);

}

let timeoutID;
function delayTimer(){
    timeoutID = setTimeout(deletewords,1500);
}

function deletewords(){
    let getword = gettextani.innerHTML;
    let getlastidx = getword.length - 1;
    let delinterval = setInterval(function(){
        if(getlastidx >= 0){
           
            gettextani.innerHTML = gettextani.innerHTML.substring(0,gettextani.innerHTML.length-1);
            getlastidx--;
        }else{
           
            gettextani.classList.remove(changetext.indexOf(getword));
            showwords(changetext[gen.next().value]);
            clearInterval(delinterval);
        }
    },100);

}







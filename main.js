//let verb2 = "ajaä";
//let verb3 = "saada";
//let verb4 = "kuulla";
//let verb5 = "haluta";
//let verb6 = "Tarvita";
//let verb7 = "Vanheta";

const inputId = document.getElementById("verbInput");
const generateButton = document.getElementById("generateButton");

//table
//const table = document.getElementById("verbTable");
const tableDiv = document.getElementById("tableDiv");
const firstPersonSingular = document.getElementById("1pS");
const secondPersonSingular = document.getElementById("2pS");
const thirdPersonSingular = document.getElementById("3pS");
const firstPersonPlural = document.getElementById("1pP");
const secondPersonPlural = document.getElementById("2pP");
const thirdPersonPlural = document.getElementById("3pP");

generateButton.onclick = function (){
    generateVerbConjugation(inputId.value);
    tableDiv.style.display = "block";
}


function generateVerbConjugation(verb){
    let verblength = verb.length;
    isValidInput(verb);
    //verb type 1

    if(isVocal(verb.at(-2)) && (verb.at(-1) === 'a' || verb.at(-1) ===  'ä')){
        console.log("verb type 1");
        console.log("minä " + verb.substring(0,verblength-1) + "n");
        firstPersonSingular.textContent = verb.substring(0,verblength-1) + "n";

        console.log("sinä " + verb.substring(0,verblength-1) + "t");
        secondPersonSingular.textContent =  verb.substring(0,verblength-1) + "t";

        console.log("hän " + verb.substring(0,verblength-1) + verb.at(-2));
        thirdPersonSingular.textContent =  verb.substring(0,verblength-1) + verb.at(-2);

        console.log("me " + verb.substring(0,verblength-1) + "mme");
        firstPersonPlural.textContent =  verb.substring(0,verblength-1) + "mme";

        console.log("te " + verb.substring(0,verblength-1) + "tte");
        secondPersonPlural.textContent =  verb.substring(0,verblength-1) + "tte";

        console.log("he " + verb.substring(0,verblength-1) + "vat");
        thirdPersonPlural.textContent =  verb.substring(0,verblength-1) + "vat";
    }
    //verb type 2
    else if(verb.at(-2) === 'd' &&( verb.at(-1) === 'a' || verb.at(-1) === 'ä')){
        console.log("verb type 2");
        console.log("minä " + verb.substring(0,verblength-2) + "n");
        console.log("sinä " + verb.substring(0,verblength-2) + "t");
        console.log("hän " + verb.substring(0,verblength-2));
        console.log("me " + verb.substring(0,verblength-2) + "mme");
        console.log("te " + verb.substring(0,verblength-2) + "tte");
        console.log("he " + verb.substring(0,verblength-2) + "vat");
    }
    //verb type 3
    else if(!isVocal(verb.at(-3))&&!isVocal(verb.at(-2)) && (verb.at(-1) === 'a' || verb.at(-1) === 'ä' ) ){
        console.log("verb type 3");
        console.log("minä " + verb.substring(0,verblength-2) + "en");
        console.log("sinä " + verb.substring(0,verblength-2) + "et");
        console.log("hän " + verb.substring(0,verblength-2) + "ee");
        console.log("me " + verb.substring(0,verblength-2) + "emme");
        console.log("te " + verb.substring(0,verblength-2) + "ette");
        console.log("he " + verb.substring(0,verblength-2) + "evat");
    }
    //verb type 4
    else if(isVT4(verb.substring(verblength-3,verblength))){
        console.log("minä " + verb.substring(0,verblength-2)+ verb.substring(verblength-1,verblength) + "n");
        console.log("sinä " + verb.substring(0,verblength-2)+ verb.substring(verblength-1,verblength) + "t");
        if((verb.substring(0,verblength-2)+ verb.substring(verblength-1,verblength)).endsWith("aa")){
            console.log("hän " + verb.substring(0,verblength-2)+ verb.substring(verblength-1,verblength));
        }
        else{
            console.log("hän " + verb.substring(0,verblength-2)+ verb.substring(verblength-1,verblength) + "a");
        }
        console.log("me " + verb.substring(0,verblength-2)+ verb.substring(verblength-1,verblength) + "mme");
        console.log("te " + verb.substring(0,verblength-2)+ verb.substring(verblength-1,verblength) + "tte");
        console.log("he " + verb.substring(0,verblength-2)+ verb.substring(verblength-1,verblength) + "vat");
    }
    // verb type 5
    else if(isVT5(verb.substring(verblength-3,verblength))){
        console.log("verb type 5");
        let stem = verb.substring(0,verblength-2);
        let word = stem + "tse";
        console.log("minä " + word + "n");
        console.log("sinä " + word + "t");
        console.log("hän " + word + "e");
        console.log("me " + word + "mme");
        console.log("te " + word + "tte");
        console.log("he " + word + "vat");
    }
    //verb type 6
    else if(isVT6(verb.substring(verblength-3,verblength))){
        console.log("verb type 6");
        let stem = verb.substring(0,verblength-2);
        let word = stem + "ne";
        console.log("minä " + word + "n");
        console.log("sinä " + word + "t");
        console.log("hän " + word + "e");
        console.log("me " + word + "mme");
        console.log("te " + word + "tte");
        console.log("he " + word + "vat");
    }
}

function isValidInput(input){
    if(typeof input === "string"){
        if(input.length !== 0){
            //TODO: check if illegal chars are used e.g. numbers and @#" etc
            return true;
        }
    }
    alert("Illegal Input: " + input + "\n" + "Input must be a word of size > 0");
    new Error("Illegal Input Error");
}

function isVocal(vocal){
    if(typeof vocal === "string" && vocal.length === 1){
        return vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u" || vocal === "ä" || vocal === "ö";
    }
    else{
        throw new Error("given parameter is either not of type string / char or not of length 1");
    }
}

function isVT4(sequence){
    if(typeof sequence === "string"){
        if(sequence.length === 3){
            return sequence === "ata" || sequence === "ätä" || sequence === "ötä" || sequence === "ota" || sequence === "uta" || sequence === "ytä";
        }
        else{
            throw new Error("given parameter string length is " + sequence.length + " and not 3, input: " + sequence);
        }
    }
    else{
        throw new Error("given parameter is not of type string");
    }
}

function isVT5(sequence){
    if(typeof sequence === "string"){
        if(sequence.length === 3){
            return sequence === "itä" || sequence === "ita";
        }
        else{
            throw new Error("given parameter string length is " + sequence.length + " and not 3, input: " + sequence);
        }
    }
    else{
        throw new Error("given parameter is not of type string");
    }
}

function isVT6(sequence){
     if(typeof sequence === "string"){
         if(sequence.length === 3){
             return sequence === "eta" || sequence === "etä";
         }
         else{
            throw new Error("given parameter string length is " + sequence.length + " and not 3, input: " + sequence);
         }
     }
     else{
         throw new Error("given parameter is not of type string");
     }
}


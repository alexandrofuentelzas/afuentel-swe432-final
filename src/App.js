import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [strings, setStrings] = useState([])
  const [radioChecks, setRadioChecks] = useState([true,false,false])

  function adjustRadioButtons(event){
    let value = event.target.value;

    switch(value){
      case "ascending":
        setRadioChecks([true,false,false])
        break;
      case "descending":
        setRadioChecks([false,true,false])
        break;
      case "textLength":
        setRadioChecks([false,false,true])
        break;
      default:
        setRadioChecks([true,false,false])
    }

  }

  function onSubmit(event){

    let content = document.getElementsByClassName("stringTextWrapper")[0];
    let userInput = document.getElementsByClassName("userInput")[0].value;
    let splitInput = userInput.split(",");

    let set = new Set(splitInput);
    let setArray = Array.from(set);
    
    let trueIndex = 0;

    for(let x in setArray){
      if(radioChecks[x]){
        trueIndex = x;
        break;
      }
    }

    switch(trueIndex){
      case '0':
        setArray.sort();
        break;
      case '1':
        setArray.sort()
        setArray.reverse();
        break;
      case '2':
        setArray.sort((a,b) => b.length - a.length)
        setArray.reverse()
    }

    
    content.innerHTML = "";

    let emptyInput = true;

    for(let x in userInput){
      if(userInput.charAt(x) != ' '){
        emptyInput = false;
        break;
      }
    }

    if(emptyInput || userInput == ""){
      content.innerHTML =  "Here is the example output from below <br/>" +
      "NOTE: Input is delimited by a comma <br/>" +
      "1 <br/>" +
      "2 <br/>" +
      "3 <br/>";
    }

    else{    
      for(let x in setArray){
        content.innerHTML += (setArray[x] + "</br>")
      }
    }

    document.getElementsByClassName("userInput")[0].value = "";
  }


  return (
    <div className="App">
      <div className="final-title">
        Alexandro Fuentelzas SWE 432 Final Exam
      </div>
      <div className="appContainer">
        <div className="stringContentContainer">
          <div className="stringContainer">
            <div className="stringDisplay">
              <div className="stringTextWrapper">
                 Here is the example output from below.
                 Strings entered will only output UNIQUE values and also
                 note that the input is DELIMITED by a COMMA. <br/> <br/>
                 a <br/>
                 b <br/>
                 c <br/>
              </div>
            </div>
          </div>
          <div className="inputContainer">
            <input className="userInput" placeholder="Enter list here. Example: a,b,c"></input>
          </div>
        </div>
        <div className="featureContainer">
          <div className="options">
            Selecting Sorting Type
            <div className="radioOptionWrapper"> <input className="radioOption" onChange={adjustRadioButtons} type="radio" value="ascending" checked={radioChecks[0]}/> Ascending </div>
            <div className="radioOptionWrapper"> <input className="radioOption" onChange={adjustRadioButtons} type="radio" value="descending" checked={radioChecks[1]}/> Descending </div>
            <div className="radioOptionWrapper"> <input className="radioOption" onChange={adjustRadioButtons} type="radio" value="textLength" checked={radioChecks[2]}/> Text Length </div>
          </div>
          <button className="submitButton" onClick={onSubmit}> Submit List </button>
        </div>

      </div>

      
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Form(props) {
  const state = (event) => {
    setText(event.target.value);
  };
  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const sampleText = () => {
    setText(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem commodi asperiores expedita, aspernatur unde nemo, laudantium a repellat vero perferendis sed hic fuga!"
    );
  };

  // const noOfWords = ()=>{
  //   if (text.length===0) {
  //     setText('0')
  //   } else {
  //     text.split(" ").length
  //   }
  // }

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container-fluid  text-${
          props.toggleMode === "light" ? "dark" : "light"
        }`}
        style={{
          backgroundColor: props.toggleMode === "dark" ? "gray" : "white",
          height : '100vh'
        }}
      >
        <form className="container  text-center">
          <h2 className="py-4">Enter text </h2>
          <textarea
            onChange={state}
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </form>
        <div className="buttons container text-center py-3">
          <button
            onClick={toLowerCase}
            className="btn btn-success btn-outline "
          >
            Convert to lower case
          </button>
          <button onClick={toUpperCase} className="btn btn-success mx-2 my-2">
            Convert to upper case
          </button>
          <button onClick={sampleText} className="btn btn-success">
            Add sample text
          </button>
          <div className="acc pt-5">
            <h5>
              
              {"No of words: "+
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
                
              }
            </h5>
              
              <h5>Time for reading in seconds: {Math.round( text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length *2.19)}</h5>
            <h5>
              Preview: <br />
              {text}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
// onClick={props.toUpperCase}
// onClick={props.addSampleText}

export default Form;

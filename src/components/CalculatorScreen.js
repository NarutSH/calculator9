import React, { useState } from "react";

const CalculatorScreen = () => {
  const [numInput, setNumInput] = useState("");
  const [firstNum, setFirstNum] = useState(0);
  const [operatorSymbol, setOperatorSymbol] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [showSum, setShowSum] = useState("");

  const [allowFirstinput, setAllowFirstInput] = useState(true);
  const [allowSecondInput, setAllowSecondInput] = useState(false);

  const init = () => {
    setNumInput("");
    setFirstNum(0);
    setOperatorSymbol("");
    setSecondNum("");
    setShowSum("");
    setAllowFirstInput(true);
    setAllowSecondInput(false);
  };

  const mathCalc = (a, b, symbol, setdata) => {
    if (symbol === "+") setdata(+a + +b || "0");
    if (symbol === "-") setdata(+a - +b || "0");
    if (symbol === "*") setdata(+a * +b || "0");
    if (symbol === "/") setdata(+a / +b || "0");
  };

  const onHandleInput = (ev) => {
    let keyInput;

    if (ev.type === "click") {
      keyInput = numInput + ev.target.value;
    } else if (ev.type === "change") {
      keyInput = +ev.target.value;
    }

    const pureInput = +keyInput || 0;
    setNumInput(pureInput);

    if (allowFirstinput && !showSum) {
      setFirstNum(pureInput);
    }

    if (allowFirstinput && showSum) {
      setFirstNum(pureInput);
      setOperatorSymbol("");
      setSecondNum("");
      setShowSum("");
    }

    if (allowSecondInput) {
      setSecondNum(pureInput);
    }
  };

  const onHandleOperatorPressed = (ev) => {
    const operatorClick =
      ev.target.value === "+" ||
      ev.target.value === "-" ||
      ev.target.value === "*" ||
      ev.target.value === "/";

    const operatorKey =
      ev.key === "+" || ev.key === "-" || ev.key === "*" || ev.key === "/";

    const operatorEvent = ev.key || ev.target.value;

    if ((operatorKey || operatorClick) && !secondNum) {
      console.log("operatorKey && !secondNum");
      setOperatorSymbol(operatorEvent);
      setShowSum("");
      setNumInput("");
      setAllowFirstInput(false);
      setAllowSecondInput(true);
    }

    if ((operatorKey || operatorClick) && secondNum) {
      console.log("operatorKey && secondNum");
      mathCalc(firstNum, secondNum, operatorSymbol, setFirstNum);
      setOperatorSymbol(operatorEvent);
      setSecondNum("");
      setShowSum("");
      setAllowFirstInput(false);
      setAllowSecondInput(true);
    }

    if (operatorEvent === "Enter") {
      console.log("Enter pressed");
      mathCalc(firstNum, secondNum, operatorSymbol, setShowSum);
      console.log(firstNum, secondNum, operatorSymbol);
      setNumInput(0);
      setAllowFirstInput(true);
      setAllowSecondInput(false);
    }

    if (operatorEvent === "%") {
      console.log(" Precent Pressed");
    }

    if (ev.target.value === "Backspace") {
      const sliceInput = numInput.toString().slice(0, -1);
      setNumInput(+sliceInput);

      if (allowFirstinput) {
        setFirstNum(+sliceInput);
      } else if (allowSecondInput) {
        setSecondNum(+sliceInput);
      }
    }

    if (ev.target.value === "Clear" || ev.key === "Escape") {
      init();
    }
  };

  console.log(numInput);
  return (
    <div className="ui container">
      <div className="ui ">
        <div className="ui segment huge label container">
          <span className=" ">{firstNum}</span>
          <span className=" ">{operatorSymbol}</span>
          <span className=" ">{secondNum}</span>
          <span className=" ">{showSum ? `= ${showSum}` : null}</span>
        </div>
        <div className="ui input container ">
          <input
            type="text"
            id="input"
            inputMode="numeric"
            value={numInput}
            onChange={onHandleInput}
            onKeyDown={onHandleOperatorPressed}
            pattern="[0-9]*"
          />
        </div>
      </div>
      <div className="calculator-number">
        <div className="grid-container">
          <div className="" value=""></div>
          <button
            className="ui button circular"
            value="Clear"
            onClick={onHandleOperatorPressed}
          >
            Clear
          </button>
          <button
            className="ui button circular"
            value="%"
            onClick={onHandleOperatorPressed}
          >
            %
          </button>
          <button
            className="ui button circular"
            value="/"
            onClick={onHandleOperatorPressed}
          >
            /
          </button>
          <button
            className="ui button circular"
            value="7"
            onClick={onHandleInput}
          >
            7
          </button>
          <button
            className="ui button circular"
            value="8"
            onClick={onHandleInput}
          >
            8
          </button>
          <button
            className="ui button circular"
            value="9"
            onClick={onHandleInput}
          >
            9
          </button>
          <button
            className="ui button circular"
            value="*"
            onClick={onHandleOperatorPressed}
          >
            X
          </button>
          <button
            className="ui button circular"
            value="4"
            onClick={onHandleInput}
          >
            4
          </button>
          <button
            className="ui button circular"
            value="5"
            onClick={onHandleInput}
          >
            5
          </button>
          <button
            className="ui button circular"
            value="6"
            onClick={onHandleInput}
          >
            6
          </button>
          <button
            className="ui button circular"
            value="-"
            onClick={onHandleOperatorPressed}
          >
            -
          </button>
          <button
            className="ui button circular"
            value="1"
            onClick={onHandleInput}
          >
            1
          </button>
          <button
            className="ui button circular"
            value="2"
            onClick={onHandleInput}
          >
            2
          </button>
          <button
            className="ui button circular"
            value="3"
            onClick={onHandleInput}
          >
            3
          </button>
          <button
            className="ui button circular"
            value="+"
            onClick={onHandleOperatorPressed}
          >
            +
          </button>
          <button
            className="ui button circular"
            value="Backspace"
            onClick={onHandleOperatorPressed}
          >
            {"<"}
          </button>
          <button
            className="ui button circular"
            value="0"
            onClick={onHandleInput}
          >
            0
          </button>
          <button
            className="ui button circular"
            value="."
            onClick={onHandleInput}
          >
            .
          </button>
          <button
            className="ui button circular"
            value="Enter"
            onClick={onHandleOperatorPressed}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorScreen;

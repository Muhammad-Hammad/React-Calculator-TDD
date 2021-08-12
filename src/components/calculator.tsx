import { evaluate, isNaN } from "mathjs";
import React, { Fragment, useState } from "react";
import Screen from "./screen";

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const calcOperators = ["+", "-", "×", "÷"];
const equalSign = "=";
const clear = "C";
const getLastChar = (str: string) => (str.length ? str[str.length - 1] : "");
const isNumber = (str: string) => !isNaN(Number(str));

export const calculateExpression = (expression: string) => {
  if (!expression || expression.length === 0) {
    return "";
  }
  const mulRegex = /×/g;
  const divRegex = /÷/g;
  const divideByZero = /\/0/g;
  let toEvaluate = expression.replace(mulRegex, "*").replace(divRegex, "/");
  try {
    if (divideByZero.test(toEvaluate)) {
      throw new Error("Can not divide by 0!");
    }
    const lastCharaterIsNumber = isNumber(getLastChar(toEvaluate));
    if (!lastCharaterIsNumber) {
      toEvaluate = toEvaluate.slice(0, -1);
    }
    const result = evaluate(toEvaluate).toString();
    return result;
  } catch (err) {
    console.error(err);
    return "";
  }
};

const Calculator = () => {
  const [input, setInput] = useState("");

  const calculate: any = () => {
    const results: any = calculateExpression(input);
    setInput(results);
  };

  const handleOperator: any = (operator: any) => {
    if (
      input[input.length - 1] === "+" ||
      input[input.length - 1] === "-" ||
      input[input.length - 1] === "×" ||
      input[input.length - 1] === "÷"
    ) {
      setInput((prev: any) => {
        let preData = prev;
        preData = preData.replace(/.$/, operator);
        console.log("preData", preData);
        return preData;
      });
    } else {
      setInput((val: any) => val.concat(operator.toString()));
    }
  };

  const clearInput = () => setInput("");

  return (
    <div className="calculator">
      <div>
      <h1>Calculator</h1>
      <Screen input={input} className="screen" />
      <div className="calculator-buttons-container">
      <div role="grid">
        {/* transforming into grid layout */}
        {rows.map((row, index) => (
          <Fragment key={row.toString()}>
            <div role="row">
              {/* left of the zero */}
              {index === 3 && <button onClick={clearInput}>{clear}</button>}
              {row.map((number) => (
                <button
                  key={number}
                  onClick={() =>{
                    if(input.length < 10){
                    setInput((val: any) => val.concat(number.toString()))
                  }
                  }
                  }
                >
                  {number}
                </button>
              ))}
              {/* right of the zero */}
              {index === 3 && <button onClick={calculate}>{equalSign}</button>}
            </div>
          </Fragment>
        ))}
        </div>
          <div className="calculator-operators">
        {calcOperators.map((operator) => (
          <button key={operator} onClick={() => handleOperator(operator)}>
            {operator.toString()}
          </button>
        ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Calculator;

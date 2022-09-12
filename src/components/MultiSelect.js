import React, { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Button } from "reactstrap";
import ShowData from "./ShowData";
function MultiSelect() {
  const [options, setOptions] = useState([""]);
  const [question, setQuestion] = useState("");
  const [show, setShow] = useState(false);
  const addOption = (idx) => {
    if (options.length < 4) {
      // options.splice(idx+1,0,`option ${options.length+1}`);
      // setOptions([...options]);
      const newOptions = [...options, ""];
      const newOptionIdx = idx + 1;
      let currentNewOptionIndex = newOptions.length - 1;
      while (newOptionIdx !== currentNewOptionIndex) {
        newOptions[currentNewOptionIndex] =
          newOptions[currentNewOptionIndex - 1];
        currentNewOptionIndex--;
        newOptions[currentNewOptionIndex] = "";
      }
      setOptions(newOptions);
    }
  };

  const removeOption = (idx) => {
    if (options.length > 1) {
      options.splice(idx, 1);
      setOptions([...options]);
    }
  };

  const setOptionInArray = (value, optionIdx) => {
    options[optionIdx] = value;
    setOptions([...options]);
  };

  const isQuestionAddDisabled = () => {
    return (
      question.trim === "" ||
      options.find((opt) => opt.trim() === "") !== undefined
    );
  };
  return (
    <div className="question-container">
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Your Question"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
        />
      </InputGroup>
      <p className="options-text">Options</p>
      {options.map((option, optionIdx) => (
        <InputGroup className="input-grp">
          <Input
            placeholder={`option ${optionIdx + 1}`}
            value={option}
            key={optionIdx}
            onChange={(e) => setOptionInArray(e.target.value, optionIdx)}
          />
          <InputGroupAddon addonType="append">
            <Button
              onClick={() => addOption(optionIdx)}
              disabled={options.length === 4}
            >
              +
            </Button>
            <Button
              onClick={() => removeOption(optionIdx)}
              disabled={options.length === 1}
            >
              -
            </Button>
          </InputGroupAddon>
        </InputGroup>
      ))}
      {options.length === 4 ? (
        <div className="question button">
          <Button
            onClick={() => {
              setShow(true);
            }}
            className="survey-main-btn"
            disabled={isQuestionAddDisabled()}
          >
            Add Question
          </Button>
          <Button
            onClick={() => {
              setShow(true);
            }}
            className="survey-main-btn"
            disabled={isQuestionAddDisabled()}
          >
            Publish
          </Button>
          {show ? (
            <>
              <p>{question}</p>
              <ShowData ques={question} multi={options} />
            </>
          ) : (
            ""
          )}
        </div>
      ) : null}
    </div>
  );
}

export default MultiSelect;

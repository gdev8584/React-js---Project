import React, { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Button } from "reactstrap";

import ShowSingle from "./ShowSingle";
function SingleSelect() {
  const [options, setOptions] = useState(["", ""]);
  const [question, setQuestion] = useState("");
  const [show, setShow] = useState(false);
  const isQuestionAddDisabled = () =>
    question.trim === "" ||
    options.find((opt) => opt.trim() === "") !== undefined;

  const setOptionInArray = (value, optionIdx) => {
    options[optionIdx] = value;
    setOptions([...options]);
  };

  console.log(question);
  console.log(options);
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
      <InputGroup className="input-grp">
        <Input
          placeholder="option1"
          value={options[0]}
          onChange={(e) => setOptionInArray(e.target.value, 0)}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="input-grp">
        <Input
          placeholder="option2"
          value={options[1]}
          onChange={(e) => setOptionInArray(e.target.value, 1)}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <div className="question button">
        <Button className="survey-main-btn" disabled={isQuestionAddDisabled()}>
          Add Question
        </Button>
        <Button
          className="survey-main-btn"
          onClick={() => setShow(true)}
          disabled={isQuestionAddDisabled()}
        >
          Publish
        </Button>

        {show ? (
          <>
            <p>{question}</p>
            <ShowSingle ques={question} single={options} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SingleSelect;

import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import React, { useState } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function CreateSurvey() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState("Select Question Type");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{dropdownText}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setDropdownText("Multi-select")}>
            Multi-select
          </DropdownItem>
          <DropdownItem onClick={() => setDropdownText("Single Select")}>
            Single Select
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {dropdownText === "Multi-select" ? <MultiSelect /> : null}
      {dropdownText === "Single Select" ? <SingleSelect /> : null}
    </>
  );
}

export default CreateSurvey;

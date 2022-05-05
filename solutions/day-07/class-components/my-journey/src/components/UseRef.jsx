import React, { useRef, useState } from "react";
import Button from "./AButton";

const UseRef = () => {
  const ref = useRef(null);
  const textRef = useRef("");
  const styleRef = useRef(null);
  const [input, setInput] = useState("");
  const [content, setContent] = useState("");

  const handleClick = () => {
    setInput(ref.current.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") handleClick();
  };

  const handleFocus = () => {
    ref.current.focus();
  };

  const handleGetContentOnClick = () => {
    setContent(textRef.current.textContent);
  };

  const setStyle = () => {
    styleRef.current.style.backgroundColor = "#8892b0";
    styleRef.current.style.padding = "1rem";
    styleRef.current.style.textAlign = "center";
    styleRef.current.style.color = "#233554";
  };

  const getLog = () => {
    console.log(input, " ", content);
  };

  return (
    <div id="ref-example" className="action-center mt-4 paragraph">
      <h4       
        onClickCapture={setStyle}
        ref={styleRef}
      >
        Uncontrolled input with useRef()
      </h4>
      <input
        type="text"
        name="text"
        id="text"
        ref={ref}
        onKeyDown={handleEnter}
      />
      <Button onClick={handleClick} text={"Get input"} />
      <p className="paragraph">{input}</p>
      <h4>Focus input element with useRef</h4>
      <Button onClick={handleFocus} text={"Get focus"} />
      <p className="paragraph" ref={textRef}>
        This is a sample text to showcase getting content from the DOM tree
      </p>
      <Button onClick={handleGetContentOnClick} text={"Get content"} />
      <p className="paragraph">{content}</p>

      <Button onClick={getLog} text="Get log" />
    </div>
  );
};

export default UseRef;

import React, { useState } from "react";
import "./styles.css";

interface TextBox {
  id: number;
  left: number;
  top: number;
  text: string;
}
interface Iprops {
  label: string;
  color: string;
}

const DragBox = (props: Iprops) => {
  const [textBoxes, setTextBoxes] = useState<TextBox[]>([]);
  const [counter, setCounter] = useState(0);
  const [indexClicked, setIndexClicked] = useState(0);

  const createTextBox = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedInsideTextBox = false;
    if (clickedInsideTextBox) {
      return;
    }

    const boardRect = event.currentTarget.getBoundingClientRect();
    const left = Math.max(
      0,
      Math.min(event.clientX - boardRect.left, boardRect.width - 200)
    );
    const top = Math.max(
      0,
      Math.min(event.clientY - boardRect.top, boardRect.height - 100)
    );

    const newTextBox: TextBox = {
      id: counter,
      left,
      top,
      text: "",
    };

    setTextBoxes((prevTextBoxes) => [...prevTextBoxes, newTextBox]);

    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    id: number
  ) => {
    event.dataTransfer.setData("text/plain", String(id));
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = Number(event.dataTransfer.getData("text/plain"));

    const boardRect = event.currentTarget.getBoundingClientRect();
    const left = event.clientX - boardRect.left;
    const top = event.clientY - boardRect.top;

    const updatedTextBoxes = textBoxes.map((textBox) =>
      textBox.id === id
        ? {
            ...textBox,
            left: Math.max(0, Math.min(left, boardRect.width - 200)),
            top: Math.max(0, Math.min(top, boardRect.height - 100)),
          }
        : textBox
    );
    setTextBoxes(updatedTextBoxes);
  };

  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    id: number
  ) => {
    const updatedTextBoxes = textBoxes.map((textBox) =>
      textBox.id === id ? { ...textBox, text: event.target.value } : textBox
    );
    setTextBoxes(updatedTextBoxes);
  };
  const handleClicker = (index: number) => {
    setIndexClicked(index);

    textBoxes.splice(index, 1);
  };
  const handleClick = (index: number) => {
    setIndexClicked(index);
  };

  return (
    <div className="app">
      <div
        className="board"
        onDoubleClick={createTextBox}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className={`header-${props.color}`}>{props.label}</div>
        {textBoxes.map((textBox, index) => (
          <div
            key={textBox.id}
            className={index === indexClicked ? "textbox active" : "textbox"}
            draggable
            onDragStart={(event) => handleDragStart(event, textBox.id)}
            style={{ left: textBox.left, top: textBox.top }}
          >
            <textarea
              value={textBox.text}
              onKeyDown={(event) => {
                if (event.key === "Delete") {
                  handleClicker(index);
                }
              }}
              onChange={(event) => handleTextChange(event, textBox.id)}
              placeholder="Digite um texto..."
              className="textbox-textarea"
              onClick={(event) => {
                handleClick(index);
                event.stopPropagation();
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragBox;

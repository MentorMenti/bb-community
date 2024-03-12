import { useState } from "react";
import "./Modal.css";

function Modal(props) {
  const [inpText, setInpText] = useState("");
  const [disable, setDisable] = useState(true);
  return (
    <div className="popup">
      <div className="popup-inner flex flex-col gap-2">
        <div className="border-black border-2 p-4">
          <div className="font-bold">Tips on getting good answers quickly</div>
          <ul>
            <li>Make sure your answer has not been asked already</li>
            <li>Keep your question short and to the point</li>
            <li>Double-check grammar and spelling</li>
          </ul>
        </div>
        {/* <blockquote contenteditable="true">
          <p>Edit this content to add your own quote</p>
        </blockquote> */}
        <input
          className="border-0"
          type="text"
          value={inpText}
          placeholder="Say something"
          onChange={(e) => {
            setInpText(e.target.value);
            if (inpText.length > 0) {
              setDisable(!disable);
            }
          }}
        />
        {/* <div>thin line</div> */}
        <hr className="border-t-2 border-gray-300 rounded-md" />
        <div className="flex flex-row gap-4 justify-end">
          <button onClick={props.toggle}>cancel</button>
          {console.log(disable)}
          <button disabled={disable}>submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

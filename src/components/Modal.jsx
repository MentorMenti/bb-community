import "./Modal.css";

function Modal(props) {
  return (
    <div className="popup">
      <div className="popup-inner p-4 flex flex-col rounded-md shadow-2xl drop-shadow-2xl">
        <div className="flex">
          <div className="bg-blue-700 w-1.5"></div>
          <div className="bg-gradient-to-r from-blue-200 to-blue-100 flex-1 pl-2 py-1">
            <h6 className="font-bold">Tips on getting good answers quickly</h6>
            <p>
              <ul>
                <li>Make sure your answer has not been asked already</li>
                <li>Keep your question short and to the point</li>
                <li>Double-check grammar and spelling</li>
              </ul>
            </p>
          </div>
        </div>

        <textarea
          className="border border-gray-300 w-full rounded-md bg-gray-50 p-2 mt-4 outline-none focus:ring-1 focus:ring-blue-500"
          value={props.newPost}
          placeholder="Say something"
          onChange={(e) => {
            props.setNewPost(e.target.value);
            if (props.newPost > 0) {
              setDisable(false);
            }
          }}
          required
          rows={8}
          maxLength={800}
          autoFocus
        ></textarea>

        <div className="flex flex-row gap-4 ml-auto mt-4">
          <button
            onClick={props.toggle}
            className="px-4 py-1.5 bg-red-500 text-white rounded-md shadow-red-300 shadow-md"
          >
            Cancel
          </button>
          <button
            disabled={props.newPost.length < 1 ? true : false}
            className="px-4 py-1.5 bg-primary disabled:bg-opacity-80 text-white rounded-md shadow-blue-300 shadow-md"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

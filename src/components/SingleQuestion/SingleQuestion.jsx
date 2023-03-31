import React from "react";

const SingleQuestion = (props) => {
  const { question, ans } = props.questionData;
  return (
    <div className="shadow-md py-4 rounded-lg border">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-black">
          {question}
        </div>
        <div className="collapse-content">
          <p>{ans}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;

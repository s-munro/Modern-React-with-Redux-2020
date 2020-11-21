import React from "react";
import "./App.css";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  const arrayOne = [
    {
      name: "Sam",
      image: faker.image.people(),
      date: "Today 6:00PM",
      text: "Nice hair!",
    },
    {
      name: "Sheena",
      image: faker.image.cats(),
      date: "Today 4:25PM",
      text: "Whoa!",
    },
    {
      name: "Tyler",
      image: faker.image.animals(),
      date: "Today 11:00AM",
      text: "Howdy",
    },
  ];

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      {arrayOne.map((item, index) => {
        return (
          <ApprovalCard key={index}>
            <CommentDetail
              key={index}
              avatar={item.image}
              author={item.name}
              date={item.date}
              text={item.text}
            />
          </ApprovalCard>
        );
      })}
    </div>
  );
};

export default App;

import React from "react";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return (
    <div>
      <h2>Hey there!</h2>
    </div>
  );
};

export default App;

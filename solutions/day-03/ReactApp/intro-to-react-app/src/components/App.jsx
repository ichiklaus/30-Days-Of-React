import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const welcomeSection = {
    welcome: "Welcome to my 30 days of React journey",
  };

  const myInfo = {
    author: {
      username: "@ichiklaus",
      firstname: "Nicolás",
      lastname: "Moreira",
    },
    countryBasedOn: "Ecuador",
    getCurrentAge: function () {
      const yearBorn = 1994;
      const currentYear = new Date().getFullYear();
      return currentYear - yearBorn;
    },
    status: function () {
      return myInfo.getCurrentAge() >= 18;
    },
    techStack: [
      "HTML/HTML5",
      "CSS/CSS3",
      "Sass/SCSS",
      "Javascript/ES6+",
      "Node.js",
      "React",
      "Git/Github",
    ],
  };

  // console.log("🚀 ~ file: App.jsx ~ line 22 ~ App ~ status", myInfo.status());

  return (
    <div className="App">
      <div className="content">
        <Header
          // welcome={welcomeSection.welcome}
          // username={myInfo.author.username}
          // country={myInfo.countryBasedOn}
          welcomeSection={welcomeSection}
          myInfo={myInfo}
        />
        <Main
          // firstname={myInfo.author.firstname}
          // lastname={myInfo.author.lastname}
          // getCurrentAge={myInfo.getCurrentAge()}
          // status={myInfo.status()}
          // techStack={myInfo.techStack}
          myInfo={myInfo}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

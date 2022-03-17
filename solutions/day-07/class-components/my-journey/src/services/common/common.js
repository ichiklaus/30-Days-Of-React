export const welcomeSection = {
    welcome: "Welcome to my 30 days of React journey",
};

export const myInfo = {
    author: {
        username: "ichiklaus",
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

const actions = {
    subscribe: {
      text: "Subscribe",
    },
    hiButton: {
      sayHi: function () {
        alert("Hi there! Welcome to my journal.");
      },
      text: "Say hi",
    },
    datetimeButton: {
      showTime: function () {
        alert(new Date());
      },
      text: "Show datetime",
    },
  };

  export default actions;
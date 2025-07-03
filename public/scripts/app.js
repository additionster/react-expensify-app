"use strict";

console.log("app.js is running");

//JSX - JavaScript XML
var app = {
    title: "Indecision App",
    subtitle: "This is subtitle",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
    console.log(option);
};

var removeAllOptions = function removeAllOptions() {
    app.options = [];
    renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(randomNum);
    alert(option);
};

var appRoot = document.getElementById("app");
var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { id: "head1" },
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAllOptions },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (value) {
                return React.createElement(
                    "li",
                    { key: value },
                    value
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();

var user = {
    name: "PKT",
    age: 33,
    location: "Toa Payoh"
};

function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "Location: ",
        location
    );
}
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

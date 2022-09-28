import React from "react";
function JamieComponent() {
    var username = React.useState("")[0];
    var handleSubmit = function (e) {
        e.preventDefault();
        // props.onSubmit(username, password, remember);
    };
    return (React.createElement("form", { "data-testid": "login-form", onSubmit: handleSubmit },
        React.createElement("label", { htmlFor: "username" }, "Username:"),
        React.createElement("input", { "data-testid": "username", type: "text", name: "username", value: username }),
        React.createElement("button", { type: "submit", "data-testid": "submit" }, "Jamie")));
}
export default JamieComponent;

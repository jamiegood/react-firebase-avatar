import React from "react";

function JamieComponent() {
  const [username] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // props.onSubmit(username, password, remember);
  };

  return (
    <form data-testid="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        data-testid="username"
        type="text"
        name="username"
        value={username}
      />
      {/*
      <label htmlFor="password">Password:</label>
      <input
        data-testid="password"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label>
        <input
          data-testid="remember"
          name="remember"
          type="checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
        Remember me?
      </label> */}

      <button type="submit" data-testid="submit">
        Jamie
      </button>
    </form>
  );
}

export default JamieComponent;

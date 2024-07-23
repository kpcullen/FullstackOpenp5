const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
}) => {
  return (
    <form onSubmit={handleLogin}>
      <h2>Log into BlogApp</h2>
      <div>
        Username:
        <input
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        Password:
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
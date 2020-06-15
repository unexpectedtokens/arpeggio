import React from "react"
import { Input, Field } from "../../../UI/Form/FormField"
import Button, { ButtonBar } from "../../../UI/appspecific/Button"

export default props => {
  const { loading, error, setError } = props
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const submit = e => {
    e.preventDefault()
    if (email && password) {
      props.login(email, password)
    } else {
      setError("Please fill in your email and password")
    }
  }
  return (
    <form onSubmit={submit}>
      <Field>
        <label htmlFor="email">Email address</label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </Field>
      <Field>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </Field>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <ButtonBar>
        <Button type="submit" text="Log in" loading={loading} />
        <button
          className="changeMode"
          onClick={e => {
            e.preventDefault()
            props.setMode()
          }}
        >
          Don't have an account yet? <span>Register instead.</span>
        </button>
      </ButtonBar>
    </form>
  )
}

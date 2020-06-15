import React from "react"
import { Input, Field } from "../../../UI/Form/FormField"
import Button, { ButtonBar } from "../../../UI/appspecific/Button"

export default props => {
  const { loading, error, setError } = props
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [password2, setPassword2] = React.useState("")
  const submit = e => {
    e.preventDefault()
    if (email && password && password === password2 && firstName && lastName) {
      props.register(email, password, `${firstName} ${lastName}`)
    } else {
      setError({ message: "All the fields are required" })
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
        <label htmlFor="firstname">First name</label>
        <Input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="first name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
      </Field>
      <Field>
        <label htmlFor="lastname">Last name</label>
        <Input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
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
      <Field>
        <label htmlFor="password">Confirm password</label>
        <Input
          type="password"
          name="password2"
          id="password2"
          placeholder="Confirm password"
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        />
      </Field>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ButtonBar>
        <Button type="submit" text="Register" loading={loading} />
        <button
          className="changeMode"
          onClick={e => {
            e.preventDefault()
            props.setMode()
          }}
        >
          Already have an account? <span>Log in instead.</span>
        </button>
      </ButtonBar>
    </form>
  )
}

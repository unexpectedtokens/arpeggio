import React from "react"
import { Input, Field } from "../../../UI/Form/FormField"
import Button, { ButtonBar } from "../../../UI/appspecific/Button"

export default props => {
  const [loading, setLoading] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [password2, setPassword2] = React.useState("")
  const submit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      if (email && password && password2 && password === password2) {
        props.authenticate()
      } else {
        setLoading(false)
      }
    }, 500)
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
        />
      </Field>
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

<script>
  import axios from "axios"
  import { Form, FormGroup, Input, Button } from "sveltestrap"

  let username, password

  const submit = async () => {
    const res = await axios.post(
      "https://coderhouse-radzik-final-back.herokuapp.com/login",
      {
        username,
        password,
      }
    )
    console.log(res.status)
    if (res.status == 200) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          user: res.data.user.username,
          role: res.data.user.role,
          token: res.data.token,
        })
      )
    } else console.log(res)
  }
</script>

<Form>
  <FormGroup floating label="Ingrese su usuario">
    <Input placeholder="User" bind:value={username} />
  </FormGroup>

  <FormGroup floating label="Ingrese su password">
    <Input placeholder="Password" bind:value={password} />
  </FormGroup>

  <Button color="primary" on:click={submit}>Ingresar</Button>

  <p>No tenes un Usuario? <a href="/register">Reigstrate!</a></p></Form
>

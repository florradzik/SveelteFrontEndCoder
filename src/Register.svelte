<script>
  import { onDestroy } from "svelte"
  import axios from "axios"
  import { user as userStore } from "./stores/user.js"
  import { Form, FormGroup, Input } from "sveltestrap"

  let name, username, avatar, password

  // let result = null
  let currentUser
  const unsuscribeUser = userStore.subscribe((user) => {
    currentUser = user
  })

  $: submit = async () => {
    const res = await axios.post(
      "https://coderhouse-radzik-final-back.herokuapp.com/register",
      {
        name,
        username,
        password,
        avatar,
      }
    )

    if (res.status == 200) {
      window.location.href = "/"
    }
  }

  onDestroy(() => unsuscribeUser())
</script>

<Form>
  <FormGroup floating label="Ingrese su nombre">
    <Input placeholder="Nombre" bind:value={name} />
  </FormGroup>

  <FormGroup floating label="Ingrese su email">
    <Input placeholder="Email" bind:value={username} />
  </FormGroup>

  <FormGroup floating label="Ingrese el link a su avatar">
    <Input placeholder="Imagen" bind:value={avatar} />
  </FormGroup>

  <FormGroup floating label="Ingrese su password">
    <Input placeholder="Password" bind:value={password} />
  </FormGroup>

  <button on:click|preventDefault={submit}>Registrarse</button>
  <p>Ya tenes un Usuario? <a href="/?">Ingresa!</a></p></Form
>

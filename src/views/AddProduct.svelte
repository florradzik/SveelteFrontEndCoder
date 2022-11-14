<script>
  import { onDestroy } from "svelte"
  import axios from "axios"
  import { user as userStore } from "../stores/user"
  import { Form, FormGroup, Input, Button } from "sveltestrap"

  let name, thumbnail, price, description, category

  //   let currentUser
  //   const unsuscribeUser = userStore.subscribe((user) => {
  //     currentUser = user
  //   })

  $: submit = async () => {
    const res = await axios.post(
      "https://coderhouse-radzik-final-back.herokuapp.com/product/",
      {
        name,
        thumbnail,
        price,
        description,
        category,
      },
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzIwMDksImV4cCI6MTY2ODQ1ODQwOX0.3Px-tjVEg7DK1b9WVzhz5q0DcrJZ9eTHHvOlnDiF7E0",
        },
      }
    )
  }

  //   onDestroy(() => unsuscribeUser())
</script>

<Form>
  <FormGroup floating label="Ingrese el nombre de su producto">
    <Input placeholder="Producto" bind:value={name} />
  </FormGroup>

  <FormGroup floating label="Ingrese la descripción">
    <Input placeholder="Descripción" bind:value={description} />
  </FormGroup>

  <FormGroup floating label="Ingrese ;a categoría de su producto">
    <Input placeholder="Categoría" bind:value={category} />
  </FormGroup>

  <FormGroup floating label="Ingrese el link a la imagen de su producto">
    <Input placeholder="Link" bind:value={thumbnail} />
  </FormGroup>

  <FormGroup floating label="Ingrese el precio de su producto">
    <Input placeholder="Precio" bind:value={price} />
  </FormGroup>

  <Button on:click={submit}>Agregar Producto</Button>

  <a href="/product"> Volver a página principal </a>
</Form>

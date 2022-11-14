<script>
  import axios from "axios"
  import Product from "../components/Product.svelte"
  import {
    Alert,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardText,
  } from "sveltestrap"
  let cart
  import { onMount } from "svelte"
  const getCart = async () => {
    let request = await axios.get("http://localhost:8080/cart/", {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzIwMDksImV4cCI6MTY2ODQ1ODQwOX0.3Px-tjVEg7DK1b9WVzhz5q0DcrJZ9eTHHvOlnDiF7E0",
      },
    })

    if (request.status == 200) cart = request.data.cart
  }

  const deleteCart = async () => {
    let request = await axios.delete(
      `http://localhost:8080/cart/?id=${cart.id}`,
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzIwMDksImV4cCI6MTY2ODQ1ODQwOX0.3Px-tjVEg7DK1b9WVzhz5q0DcrJZ9eTHHvOlnDiF7E0",
        },
      }
    )

    if (request.status == 200) cart = null
    //else load login page
  }

  const deleteFromCart = async (product) => {
    const toDelete = product.product
    let request = await axios.post(
      `http://localhost:8080/cart/products/${product._id}`,
      {
        toDelete,
      },
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzIwMDksImV4cCI6MTY2ODQ1ODQwOX0.3Px-tjVEg7DK1b9WVzhz5q0DcrJZ9eTHHvOlnDiF7E0",
        },
      }
    )
    getCart()
  }

  const createOrder = async () => {
    let request = await axios.post(
      `http://localhost:8080/order/`,
      { products: cart.products },
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzIwMDksImV4cCI6MTY2ODQ1ODQwOX0.3Px-tjVEg7DK1b9WVzhz5q0DcrJZ9eTHHvOlnDiF7E0",
        },
      }
    )
    console.log(request)
  }

  const endPurchase = async () => {
    await createOrder()
    await deleteCart()
    window.location.href = "/orders"
  }

  onMount(() => getCart())
  $: if (cart) console.log(cart.products.length)
</script>

{#if cart}
  {#if cart.products.length == 0}
    <Alert color="warning">No hay productos en tu carrito</Alert>
  {:else}{#each cart.products as p}
      <Card class="mb-3">
        <CardHeader>
          <CardTitle>{p.product.name}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle>{p.product.category}</CardSubtitle>
          <CardText>
            {p.product.description}
          </CardText>
        </CardBody>
        <Button on:click={() => deleteFromCart(p)}>Eliminar del Carrito</Button>
      </Card>
    {/each}
    <Button color="primary" on:click={endPurchase}>Finalizar Compra</Button>
  {/if}
{:else}
  <Alert color="warning">No hay productos en tu carrito</Alert>
{/if}
<a href="/product"> Volver a página principal </a>

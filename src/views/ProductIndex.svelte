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
  let products
  import { onMount } from "svelte"
  const getProducts = async () => {
    let request = await axios.get("http://localhost:8080/product/get", {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzUwMzEsImV4cCI6MTY2ODQ2MTQzMX0.mKtmoGGWbLv-wcuaDdXsOHNkKdyxc4soVu5AHzXN70Q",
      },
    })

    if (request.status == 200) products = request.data
    //else load login page
  }

  const addToCart = async (product) => {
    let request = await axios.post(
      "http://localhost:8080/cart/products",
      { product },
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzUwMzEsImV4cCI6MTY2ODQ2MTQzMX0.mKtmoGGWbLv-wcuaDdXsOHNkKdyxc4soVu5AHzXN70Q",
        },
      }
    )

    console.log(request)
    //else load login page
  }

  onMount(() => getProducts())
</script>

{#if products}
  {#each products as p}
    <Card class="mb-3">
      <CardHeader>
        <CardTitle>{p.name}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardSubtitle>{p.category}</CardSubtitle>
        <CardText>
          {p.description}
        </CardText>
      </CardBody>

      <Button on:click={() => addToCart(p)}>Agregar al Carrito</Button>
    </Card>
  {/each}
{:else}
  <Alert color="warning">No hay productos en la base de datos</Alert>
{/if}
<Button color="primary" href="/product/add">Agregar Producto</Button>
<Button href="/cart">Ver Carrito</Button>

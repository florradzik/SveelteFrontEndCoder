<script>
  import axios from "axios"
  import Order from "../components/Order.svelte"
  import { Alert } from "sveltestrap"
  let orders = []
  import { onMount } from "svelte"
  const getOrders = async () => {
    let request = await axios.get("http://localhost:8080/order/", {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzUwMzEsImV4cCI6MTY2ODQ2MTQzMX0.mKtmoGGWbLv-wcuaDdXsOHNkKdyxc4soVu5AHzXN70Q",
      },
    })

    if (request.status == 200) orders = request.data
    console.log(orders)
    //else load login page
  }

  onMount(() => {
    getOrders()
    console.log("Hola!")
  })
</script>

{#if orders}
  {#each orders as o}
    <Order order={o} />
  {/each}
{:else}
  <Alert color="warning">No hay ordenes registradas para este usuario</Alert>
{/if}

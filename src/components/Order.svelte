<script>
  import axios from "axios"
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
  export let order
</script>

<Card class="mb-3">
  <CardHeader />
  <CardTitle>Orden {order.createdAt}</CardTitle>

  <CardSubtitle>{order.state}</CardSubtitle>
  <CardText>
    Productos:
    {#each order.products as p}
      {p.product.name}, {p.product.price}
    {/each}
    Total: {order.total}
  </CardText>
</Card>

<Button href="/product">Volver a página inicial</Button>

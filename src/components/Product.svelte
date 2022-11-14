<script>
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
  } from "sveltestrap"

  export let product
  $: console.log(product)
</script>

<Card class="mb-3">
  <CardHeader>
    <CardTitle>{product.product.name}</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle>{product.product.category}</CardSubtitle>
    <CardText>
      {product.product.description}
    </CardText>
  </CardBody>
</Card>

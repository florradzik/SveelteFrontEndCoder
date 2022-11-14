<script>
  import Login from "./views/Login.svelte"
  import { Router, Link, Route } from "svelte-routing"
  import Register from "./Register.svelte"
  import Cart from "./views/Cart.svelte"
  import OrderIndex from "./views/OrderIndex.svelte"
  import ProductIndex from "./views/ProductIndex.svelte"
  import Messages from "./views/Messages.svelte"
  import AddProduct from "./views/AddProduct.svelte"
</script>

<body>
  <Router>
    <div>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/product" component={ProductIndex} />
      <Route path="/orders" component={OrderIndex} />
      <Route path="/messages" component={Messages} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/add" component={AddProduct} />
    </div>
  </Router>
</body>

<style>
</style>

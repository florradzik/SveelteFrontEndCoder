<script>
  import axios from "axios"
  import { onMount } from "svelte"
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

  //   const socket = new WebSocket("ws://localhost:3000")

  //   socket.addEventListener("open", (event) => {
  //     socket.send("Hello Server!")
  //   })

  let message
  let messages = []

  //   // Listen for messages
  //   socket.addEventListener("message", (event) => {
  //     console.log("Message from server ", event.data)
  //   })

  //   const onSendMessage = () => {
  //     socket.send(message)
  //   }

  //   onDestroy(() => socket.close())

  //   $: messages = [...messages, message]

  const getMessages = async () => {
    let request = await axios.get("http://localhost:8080/message/", {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzIwMDksImV4cCI6MTY2ODQ1ODQwOX0.3Px-tjVEg7DK1b9WVzhz5q0DcrJZ9eTHHvOlnDiF7E0",
      },
    })
    console.log(request)
    if (request.status == 200) messages = request.data
  }

  const onSendMessage = async () => {
    let request = await axios.post(
      "http://localhost:8080/message/",
      { message },
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcxNTU5ZTQ1YWYxNTJhMmM4NjRjZjEiLCJpYXQiOjE2NjgzNzIwMDksImV4cCI6MTY2ODQ1ODQwOX0.3Px-tjVEg7DK1b9WVzhz5q0DcrJZ9eTHHvOlnDiF7E0",
        },
      }
    )

    if (request.status == 200) {
      console.log("Hola!")
      getMessages()
      message = ""
    }
  }

  onMount(() => getMessages())
</script>

{#each messages as message}
  <Card>
    <CardBody>{message.message}</CardBody>
  </Card>
{/each}

<input type="text" bind:value={message} />
<Button on:click={onSendMessage}>Send Message</Button>

import { writable } from "svelte/store"

export const user = writable(JSON.parse(localStorage.getItem("user")) || null)

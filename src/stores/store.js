import { writable } from "svelte/store";

export const store = writable({ initialValue: "test" });

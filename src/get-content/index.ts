import { createDirectus, rest, staticToken } from "@directus/sdk";

const createDirectusClient = (url: string, token: string) => createDirectus<Schema>(url).with(staticToken(token)).with(rest())

const getItems = (url: string, token: string, collection: string, query: any) => {
  const client = createDirectusClient(url, token);
  
}
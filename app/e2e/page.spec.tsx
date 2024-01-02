import { expect, test } from "next/experimental/testmode/playwright"
import { env } from "@/env.mjs"

test("/e2e/page.tsx - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === `${env.NEXT_PUBLIC_API_ENDPOINT}/mock/posts/1`) {
      return new Response(
        JSON.stringify({
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        }),
        { headers: { "Content-Type": "application/json" } }
      )
    }

    return new Response(null, { status: 404 })
  })

  await page.goto("http://localhost:3000/e2e")
  const id = await page.textContent("dt:has-text('id') + dd")
  expect(id).toBe("1")
  const title = await page.textContent("dt:has-text('title') + dd")
  expect(title).toBe(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  )
  const body = await page.textContent("dt:has-text('body') + dd")
  expect(body).toBe(
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  )
})

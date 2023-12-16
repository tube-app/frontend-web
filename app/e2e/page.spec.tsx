import { expect, test } from "next/experimental/testmode/playwright"

// Test for successful data rendering
test("/e2e/page.tsx - successful data rendering", async ({ page, next }) => {
  next.onFetch((request) => {
    if (request.url === "http://localhost:3000/api/mock/posts/1") {
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
  expect(await page.textContent("dt:has-text('title') + dd")).toBe(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  )
  expect(await page.textContent("dt:has-text('body') + dd")).toBe(
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  )
})

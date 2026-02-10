import { expect, test } from "@playwright/test"

test.describe("Login form validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login")
  })

  test("shows an error when email is empty", async ({ page }) => {
    await page.getByLabel("Email").fill("")
    await page.getByLabel("Password").fill("free")
    await page.getByRole("button", { name: "Login" }).click()

    await expect(page.getByText("Incorrect email address")).toBeVisible()
  })

  test("shows an error when email is invalid", async ({ page }) => {
    await page.getByLabel("Email").fill("abc")
    await page.getByLabel("Password").fill("free")
    await page.getByRole("button", { name: "Login" }).click()

    await expect(page.getByText("Incorrect email address")).toBeVisible()
  })

  test("shows an error when password is shorter than 1 character", async ({ page }) => {
    await page.getByLabel("Email").fill("free@samuraijs.com")
    await page.getByLabel("Password").fill("")
    await page.getByRole("button", { name: "Login" }).click()

    await expect(page.getByText("Password is required")).toBeVisible()
  })

  test("redirects user to todolists page when credentials are valid", async ({ page }) => {
    await page.getByLabel("Email").fill("free@samuraijs.com")
    await page.getByLabel("Password").fill("free")
    await page.getByRole("button", { name: "Login" }).click()

    await expect(page).toHaveURL("/")
    await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible()
  })
})

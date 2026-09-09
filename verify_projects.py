import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Desktop test
        page = await browser.new_page(viewport={"width": 1280, "height": 900})
        await page.goto("http://127.0.0.1:5173", wait_until="networkidle")

        # Scroll to projects section
        projects = page.locator("#projects")
        await projects.scroll_into_view_if_needed()
        await page.wait_for_timeout(1000)

        await page.screenshot(path="projects_desktop_initial.png")
        print("Desktop initial screenshot captured")

        # Click Next button
        next_btn = page.locator("button[aria-label='Next Project']")
        if await next_btn.is_visible():
            await next_btn.click()
            await page.wait_for_timeout(800)
            await page.screenshot(path="projects_desktop_next.png")
            print("Desktop next screenshot captured")

        # Mobile test
        mobile_page = await browser.new_page(viewport={"width": 390, "height": 844})
        await mobile_page.goto("http://127.0.0.1:5173", wait_until="networkidle")
        mobile_projects = mobile_page.locator("#projects")
        await mobile_projects.scroll_into_view_if_needed()
        await mobile_page.wait_for_timeout(1000)
        await mobile_page.screenshot(path="projects_mobile.png")
        print("Mobile screenshot captured")

        await browser.close()

asyncio.run(run())

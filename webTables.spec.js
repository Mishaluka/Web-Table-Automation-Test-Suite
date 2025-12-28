import { test, expect } from "@playwright/test";

test("Web Table Practice", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("//tr").all();
  expect(rows.length).toBe(9);

  let columns = await table.locator("//th").all();
  expect(columns.length).toBe(13);

  let cells = await table.locator("//td").all();
  expect(cells.length).toBe(104);

  for (let cell of cells) {
    console.log(await cell.textContent());
  }
});
console.log("--------------------------------------------------");

test("Select specific cells ", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("//tr").all();

  // create a loop that can print each cell's data of each row, withpout the first and last column

  for (let row of rows) {
    let cells = await row.locator("//td").all();
    for (let i = 1; i < cells.length - 1; i++) {
      console.log(await cells[i].textContent());
    }
  }
});

console.log("--------------------------------------------------");

test("Gatting table checkbox", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let checkBoxes = await table.locator("//input[@type='checkbox']").all();

  for (let checkbox of checkBoxes) {
    await checkbox.click(); // assuming that the checkboxes are initially unchecked
    await expect(checkbox).toBeChecked(); // verify that the checkbox is now checked
  }
});

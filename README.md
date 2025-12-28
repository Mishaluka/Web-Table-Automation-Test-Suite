# Web-Table-Automation-Test-Suite
This test suite focuses on interacting with HTML web tables using Playwright . It demonstrates end-to-end testing techniques for locating table elements, validating their structure, and interacting with dynamic content such as checkboxes and table rows.

✅ Key Features Covered:
# Page Navigation
Opens the page https://practice.cydeo.com/web-tables to interact with the target web table.

# Table Structure Validation
Verifies the structure of the table:
Counts all rows: expect(rows.length).toBe(9)
Counts all header columns: expect(columns.length).toBe(13)
Counts all data cells: expect(cells.length).toBe(104)

# Content Extraction
Loops through all table cells and prints their content to the console.
Prints each row’s internal cell content (excluding the first and last columns) using nested loops.

# Checkbox Interaction
Locates and clicks all checkboxes within the table.
Verifies each checkbox is checked after clicking using toBeChecked() assertion.


🔧 Technologies Used:
JavaScript (ES6)
Playwright Test Runner
XPath-based locators (//table, //tr, //td, etc.)
Locator API with .all() and textContent()

# Web Application Mimicking Google Sheets
## Demo Link
Check out the live demo of this project [here](https://yourusername.github.io/your-repo-name).

## Overview
This project is a **web-based spreadsheet application** designed to closely mimic the user interface and core functionalities of **Google Sheets**. It provides users with a familiar interface to perform various **mathematical functions**, **data quality functions**, and interactive data management tasks such as **cell dependencies**, **data entry validation**, and **basic formatting**. The app supports **drag functions** for content and formulas, as well as offering the ability to add, delete, and resize rows and columns. 

The goal of this project is to provide an intuitive spreadsheet experience with dynamic calculations, clean data handling, and basic functionalities typically found in tools like Google Sheets.

---

## Features Implemented

### 1. Spreadsheet Interface:
- **Google Sheets UI Mimicry**: The user interface replicates the look and feel of Google Sheets, including the toolbar, formula bar, and grid-based layout for cells.
- **Drag Functions**: Allows users to drag cell content, formulas, and selections to easily copy or move data, just like in Google Sheets.
- **Cell Dependencies**: Formulas and functions dynamically update when related cells change. This ensures that the application accurately reflects cell dependencies.
- **Basic Cell Formatting**: Users can format cells to apply styles such as **bold**, **italics**, **font size**, and **font color**.
- **Row and Column Management**: Users have the ability to add, delete, and resize rows and columns for flexible sheet customization.

### 2. Mathematical Functions:
The application includes several built-in mathematical functions:
- **SUM**: Calculates the sum of a specified range of cells.
- **AVERAGE**: Computes the average value of a range of cells.
- **MAX**: Returns the maximum value within a selected range.
- **MIN**: Returns the minimum value within a selected range.
- **COUNT**: Counts the number of cells that contain numerical values in a range.

### 3. Data Quality Functions:
Users can apply the following data quality functions to clean and manipulate their data:
- **TRIM**: Removes leading and trailing whitespace from text in a cell.
- **UPPER**: Converts all text in a cell to uppercase.
- **LOWER**: Converts all text in a cell to lowercase.
- **REMOVE_DUPLICATES**: Removes duplicate rows from a selected range.
- **FIND_AND_REPLACE**: Allows users to find and replace specific text across a range of cells.

### 4. Data Entry and Validation:
- Users can input **numbers**, **text**, and **dates** in cells.
- Basic **data validation** checks are implemented to ensure that cells accepting numbers contain only numeric data.

### 5. Testing:
- Users can test the implemented functions on their own data, and the results of function execution are displayed clearly in the application for easy verification.

---

## Bonus Features

- **Additional Mathematical and Data Quality Functions**: Support for advanced functions can be added to expand the tool’s capabilities.
- **Complex Formulas and Cell Referencing**: Enhanced support for complex formulas, including relative and absolute references, which is similar to advanced functionality in Google Sheets.
- **Save and Load Functionality**: Users can save their work and load saved spreadsheets, preserving all entered data and applied formulas.
- **Data Visualization**: Basic **charts** and **graphs** to visualize data trends, further enhancing the application’s functionality.

---

## Technologies Used

- **HTML**: Used for structuring the user interface, including the sheet grid, formula bar, and toolbar.
- **CSS**: Provides styling to match the Google Sheets UI, including colors, grid lines, font styles, and cell formatting.
- **JavaScript**: Powers the core functionality of the application. JavaScript handles dynamic interactions, such as:
  - **Formula execution** (SUM, AVERAGE, etc.)
  - **Data validation**
  - **Dynamic updates to cells and sheet structure**
  - **Drag-and-drop operations**
  - **Saving/loading spreadsheets**
  
  Main files:
  - **functionality.js**: Contains the functions for executing **mathematical** and **data quality** operations, managing cell dependencies, and formatting.
  - **sheet.js**: Manages the structure of the spreadsheet, including cells, rows, columns, and sheet-specific operations like adding, resizing, or deleting rows/columns.

- **JSON**: Used for storing and loading sheet data, making it easy to save and retrieve the current state of the spreadsheet.
  
---

## Data Structures Used

### 1. **Array (`sheetData`)**:
   - **Purpose**: Stores all cell values for each sheet in the application. The data is represented as a 2D array, where each entry corresponds to a specific cell in the sheet.
   - **Reason for use**: Arrays allow easy access and modification of cell data. Their indexed nature allows for efficient referencing, particularly when dealing with large grids.

```javascript
let sheetData = [
  ["", "", "", ""], // Row 1
  ["", "", "", ""], // Row 2
  // ...
];
```

### 2. **Objects (`activeCell`)**:
   - **Purpose**: Represents the current active cell, storing properties like cell content, style, and formulas.
   - **Reason for use**: Objects are ideal for encapsulating multiple related properties of a single cell, such as content, formatting, and state.

```javascript
let activeCell = {
  content: "",
  style: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#000000"
  },
  formula: ""
};
```

### 3. **DOM Elements (HTML Elements)**:
   - **Purpose**: Used to represent cells and interactive UI elements. DOM elements are dynamically modified based on user interactions, allowing real-time updates to the grid.
   - **Reason for use**: DOM manipulation enables interaction with the web page in a flexible and efficient manner, making it easy to update the UI in response to user input.

```javascript
let activeCell = document.querySelector('.cell.active');
```

---

## How to Use the Application

1. **Accessing the Sheet**: Upon opening the application, you’ll see a grid with rows and columns that resemble a typical spreadsheet.
2. **Entering Data**: Click on any cell and start typing to input data. You can enter numbers, text, or dates.
3. **Applying Functions**: Use the formula bar to apply any of the supported mathematical or data quality functions. For example, you can calculate the sum of a range of cells using the `SUM` function.
4. **Formatting Cells**: Select a cell or a range of cells to apply formatting options such as bold, italics, font size, and color.
5. **Testing**: Use the test buttons to verify that the functions work as expected with your data.
6. **Saving and Loading**: Save your work to store your spreadsheet data, and load it later to continue from where you left off.

---

## Conclusion
This **web-based spreadsheet application** replicates key features of **Google Sheets** with the added flexibility of mathematical and data quality functions. It enables users to manage and manipulate data with ease and provides a familiar interface for performing complex operations like formulas, data cleaning, and formatting. 

With advanced features such as drag-and-drop functionality, cell dependencies, and support for saving/loading, this application offers a robust toolset for anyone needing a spreadsheet-like experience in a web browser.

# SVG Resizer and Validator

This project is a simple SVG Resizer built using **React (Frontend)** and **.NET (Backend)**. The application allows users to resize an SVG rectangle, view its perimeter, and handles validation for resizing via an artificial delay at the backend.

## Features
- **Initial Dimensions from JSON:** The application loads the initial dimensions of the rectangle from a JSON file using the .NET backend.
- **Resizable by Mouse:** The rectangle is resizable via mouse interaction on the frontend.
- **Display Perimeter:** The perimeter of the rectangle is displayed and updates dynamically as the user resizes the rectangle.
- **Update JSON after Resize:** Once the user finishes resizing, the new dimensions of the rectangle are sent to the backend and the JSON file is updated accordingly.
- **Backend Validation:** After resizing, the new dimensions are validated at the backend. If the width of the rectangle exceeds its height, an error is sent back to the frontend.
- **Artificial Delay:** The backend response for validation is delayed by 10 seconds to simulate long-lasting calculations.
- **Asynchronous Resizing:** Users can continue resizing the rectangle even while the previous validation is still being processed. **Cancellation token**.

## Tech Stack
- **Frontend:**
  - React.js: For rendering the user interface and handling user interactions.
  
- **Backend:**
  - .NET (C#): For serving the initial dimensions, handling resizing requests, validating the dimensions, and updating the JSON file.

## How It Works

1. **Loading Dimensions:**
   - On application load, a request is sent to the backend to fetch the initial rectangle dimensions from a JSON file.
   
2. **Resizing the Rectangle:**
   - The user can resize the rectangle using mouse drag actions. As the rectangle is resized, its perimeter is updated and displayed dynamically.
   
3. **Validation:**
   - When the user finishes resizing, the new dimensions are sent to the backend for validation.
   - If the rectangle's width exceeds its height, an error message is sent back to the UI. Otherwise, the JSON file is updated with the new dimensions.
   
4. **Artificial Delay:**
   - The backend purposely waits for 10 seconds before responding, mimicking a long-running operation.
   
5. **Asynchronous Behavior:**
   - The user is able to continue resizing the rectangle even if the backend validation for the previous resize is still in progress.
   - **Solved with cancellation token**

## Installation and Running the Project

1. **Install all necessary .NET packages if needed:**
  - Run the .NET application from Visual Studio
  - **Make sure your server is running on **PORT 7141**
  - If your server is using another port, please change the **PORT** in **API_URL** variable in front-end **Rectangle_API.js** file.
2. **React Dependencies**
   - Navigate in SVGEditor-Front-End/svg-editor.
   - Execute **yarn install** command
   - All dependencies are now installed
   - Execute **yarn start** to start the front-end application

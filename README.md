# My-Portfolio-v-1.0.0
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

This project serves as a dynamic and interactive portfolio showcasing a collection of modern web development projects built with React.js. It's designed to demonstrate proficiency in various front-end technologies, state management patterns, and responsive design principles. The portfolio currently features:

-   **E-commerce Simulation (Page 1):** A functional e-commerce interface with product listing, categorization, search, a shopping cart, and dark mode capabilities.
-   **Product Management Tool (Page 2):** An interactive application for managing product quantities, featuring increment, decrement, and delete functionalities.
-   **UI Experiment (Page 3):** A simple demonstration of dynamic UI changes, allowing users to alter background colors.

## Key Features

-   **Modular Project Showcase:** Easily navigate between different mini-applications/projects.
-   **Responsive Design:** Ensures optimal viewing and interaction across various devices and screen sizes.
-   **Interactive UI Components:** Engaging user interfaces with dynamic elements.
-   **State Management:** Demonstrates practical use of React's `useState` and `useContext` for managing application state.
-   **Dark Mode Toggle (Page 1):** User-friendly dark/light theme switching.
-   **Shopping Cart Functionality (Page 1):** Add, remove, and update quantities of items in the cart with real-time price calculation.
-   **Product Filtering and Search (Page 1):** Filter products by category and search by name or description.
-   **Reusable Components:** Efficient use of React components for a scalable and maintainable codebase.

## Technologies Used

-   **Frontend Framework:** React.js
-   **Routing:** React Router DOM
-   **Styling:** CSS3, Bootstrap 5
-   **Icons:** React Icons (`react-icons`)
-   **Build Tool:** Create React App

## Installation and Local Development

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm (or Yarn) installed on your system.

-   Node.js (>= 14.0.0)
-   npm (>= 6.0.0) or Yarn (>= 1.0.0)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mrmp2010/My-Portfolio-v-1.0.0.git](https://github.com/mrmp2010/My-Portfolio-v-1.0.0.git)
    cd My-Portfolio-v-1.0.0
    ```
    *Note: Please update the clone URL if the repository name is changed as suggested.*
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will open the application in your browser at `http://localhost:3000`.

## Usage

Once the application is running:

-   The homepage displays three circles (1, 2, 3), each linking to a different project/page.
-   Click on `1` to access the **E-commerce Simulation**.
    -   You can browse products, filter by category (Laptop, Mobile, Tablet, Accessories), and search for specific items.
    -   Add products to the cart, adjust quantities, and remove items.
    -   Toggle between light and dark mode using the sun/moon icon in the navigation bar.
-   Click on `2` to explore the **Product Management Tool**.
    -   Interact with the product list to increment, decrement, or delete items.
    -   Use the "reset" button to set all product counts back to zero.
-   Click on `3` to visit the **UI Experiment**.
    -   Click the "تغییر رنگ" (Change Color) button to randomly change the page background.

## Project Structure

├── public/                    # Public assets (HTML template, manifest, robots.txt)
│   ├── favicon.ico
│   ├── index.html             # Main HTML file
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── component/
│   │   ├── App/
│   │   │   ├── App.css        # Global app styles
│   │   │   └── App.js         # Main application component with routing
│   │   ├── Circle/
│   │   │   ├── Circle.css     # Styles for circular navigation links
│   │   │   ├── CirclePages.js # Component handling navigation to individual pages
│   │   │   └── pages/         # Individual project/page components
│   │   │       ├── page1/     # E-commerce page
│   │   │       │   ├── Cart.css
│   │   │       │   ├── Cart.js
│   │   │       │   ├── Footer.css
│   │   │       │   ├── Footer.js
│   │   │       │   ├── Navbar.css
│   │   │       │   ├── Navbar.js
│   │   │       │   ├── Page1.js
│   │   │       │   ├── Product.js
│   │   │       │   └── page1.css
│   │   │       ├── page2/     # Product management page
│   │   │       │   ├── Navbar.js
│   │   │       │   ├── Page2.js
│   │   │       │   ├── Product.js
│   │   │       │   └── context/
│   │   │       │       └── ProductsContext.js # React Context for Page 2
│   │   │       └── page3/     # UI experiment page
│   │   │           └── Page3.js
│   │   └── index.js           # React entry point
├── .gitignore                 # Specifies intentionally untracked files to ignore
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation (this file)


## Screenshots/Preview

(Placeholder for project screenshots or GIFs. It is highly recommended to add visual demonstrations of your projects here to enhance the README.)

## Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please follow these steps:

1.  **Fork** the repository.
2.  **Create** a new branch (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  **Open a Pull Request**.

Please ensure your code adheres to the existing coding style and includes relevant tests if applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

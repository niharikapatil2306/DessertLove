# DessertLove - Pastry Shop Website

A fully responsive, modern website for a pastry shop and cafe featuring online ordering, reservations, and blog content.

## Features

- **Interactive Menu**: Browse and order from our exquisite selection of pastries and beverages
- **Online Ordering System**: Add items to cart and checkout with delivery options
- **Reservation System**: Book a table directly through the website
- **Blog/News Section**: Read the latest articles about our special creations
- **Responsive Design**: Optimized for all devices from mobile to desktop

## Technology Stack

- **Frontend Framework**: React
- **Routing**: React Router v6
- **Authentication & Database**: Firebase Authentication and Firestore
- **UI Components**: React Bootstrap
- **CSS Utilities**: Tailwind CSS
- **State Management**: React Hooks

## Project Structure

The application consists of the following main sections:

### Pages
- **Home.jsx**: Landing page featuring key sections and highlights
- **AboutPage.jsx**: Information about the pastry shop and its story
- **Menus.jsx**: Complete menu with all offerings
- **Reservations.jsx**: Table booking system
- **News.jsx**: Blog posts and updates
- **Blog1/2/3.jsx**: Individual blog article pages
- **Contact.jsx**: Contact information and form
- **CartPage.jsx**: Shopping cart and checkout

## Components

- **Navigation.jsx**: This component provides the main navigation bar across the site, with options like "Home," "Menus," "Reservations," and more.
  
- **About.jsx**: This component renders the "About" section, displaying the story or description of the business or website.

- **Menu.jsx** & **MenuItem.jsx**: These components manage the display and functionality of the menu. `Menu` shows the overall menu structure, while `MenuItem` represents individual menu items.

- **Cart.jsx**: Handles the shopping cart logic, including adding/removing items and updating the total cost.

- **ReservationContainer.jsx**: Contains the form and logic for making reservations on the site. Users can book a table, select the date and time, and submit their request.

- **AdminForm.jsx**: A simple form for admin users to interact with backend data, such as managing menu items or orders.

- **Footer.jsx**: The footer section displayed at the bottom of each page.

- **MenuCards.jsx**: Displays a list of featured menu items in card format.

- **PictureCards.jsx**: Displays a collection of images in a grid layout, typically for promotional material or galleries.

- **CartContainer.jsx & CartItems.jsx**: Work together to manage the cart, display individual items, and update the total cost dynamically.


## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
   ```
   git clone https://github.com/niharikapatil2306/DessertLove.git
   cd DessertLove
   ```

2. Install dependencies
   ```
   npm install
   ```
   
3. Create a `.env` file in the root directory with your Firebase configuration
   ```
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

4. Start the development server
   ```
   npm start
   ```

## Usage

### Customer Experience
1. **Browse Menu**: View our complete selection of pastries and beverages
2. **Place Orders**: Add items to cart and proceed to checkout
3. **Make Reservations**: Book a table for your visit
4. **Read Blog**: Explore our latest articles about special creations and events

### Admin Features
1. **Admin Form**: Basic administrative functions through a simple form interface

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password recommended)
3. Create a Firestore database with the following structure:
   ```
   - menu (collection)
     - menuItemId (document)
       - name: string
       - description: string
       - price: number
       - image: string
       - category: string
   
   - cart (collection)
     - userId (document)
       - items: array
       - totalCost: number
       - total: number
   
   - reservations (collection)
     - reservationId (document)
       - name: string
       - email: string
       - date: timestamp
       - time: string
       - guests: number
   ```

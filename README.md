# Online Course Server

This is the backend server for an online course platform. It's built using Express.js and MongoDB for handling user authentication, course management, payments, and other related functionalities.

## Overview

This server handles various API routes for user management, course handling, content management, payment processing, and more.



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Atik-Sahariyar/online-course-server.git
2. Navigate to the project directory:
    ```bash
    cd online-course-server
3. Install dependencies:
   ```bash
   npm install
</br>

## Environment Variables

This project utilizes environment variables for configuration. To set up your environment, follow these steps:

1. **Create a `.env` file:** Create a file named `.env` in the root directory of the project.

2. **Copy the contents from `example.env`:** Open `example.env` file and copy its contents:

    ```plaintext
    # Database credentials
    DB_USER=your_database_username
    DB_PASS=your_database_password
    DB_NAME=onlineCourseDB

    # JWT Token secret
    ACCESS_TOKEN_SECRET=your_access_token_secret

    # Stripe secret key
    STRIPE_SECRET_KEY=your_stripe_secret_key

    # Environment settings
    NODE_ENV=development
    ```

3. **Fill in the variables:** Replace the placeholders (`your_database_username`, `your_database_password`, `your_access_token_secret`, `your_stripe_secret_key`) with your actual credentials or keys.

4. **Save the file:** Save the `.env` file in the root directory of the project.

5. **Ensure .env is added to .gitignore:** To prevent sensitive information from being exposed, make sure that `.env` is listed in your `.gitignore` file.

## Run
1. Starts the server in development mode using Nodemon for auto-reloading.
    ```bash
    nodemon index.js
</br>

## Client-side Code:
The client-side code for the online course platform can be found in the [online-course-client](https://github.com/Atik-Sahariyar/online-course-client.git) repository.


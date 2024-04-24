## Tasker Application Documentation
### Improved-Tasker `demo live link `[https://improved-tasker-rust.vercel.app/]
### -Setup Instructions

### Clone the Repository:

    - Clone the Tasker repository from the provided source.

### Install Dependencies:

    - Navigate to the project directory and run npm install to install all the required dependencies.

### Environment Variables:

    - Ensure that you have the necessary environment variables set up. These might include API keys, database URIs, or any other configuration specific to your environment. Refer to the project documentation for details.

### `npm run dev`:

    - Run npm run dev to start the development server.

### Access the Application:

    - Open your web browser and navigate to http://localhost:3000 or somthing to access the Tasker application or you can access the application with the demo live link [https://improved-tasker-rust.vercel.app/].

### `npm run build`

    - Builds the app for production to the `build` folder.\
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.\
    Your app is ready to be deployed!

## Features Overview

### Task Management:

- Create, edit, and delete tasks.
- Mark tasks as completed.
- Search functionality to filter tasks.

### Authentication:

- User authentication using email and password.
- Sign in with Google option available.

### User Interface:

- Responsive design for various screen sizes.
- Intuitive and user-friendly interface.

### Task Management:

- Create, edit, and delete tasks.
- Mark tasks as completed.
- Search functionality to filter tasks.

## Application Structure

### Components:

#### 1. TaskList:

      - Displays the list of tasks with options to edit, delete, and mark tasks as completed.

#### 2. Login:

       - Allows users to log in using email and password or Google authentication.

#### 3. SignUp:

      - Enables users to register with a new account.

#### 4. Navbar:

      - Navigation bar component for easy access to different sections of the application.

#### 5. Hero Component:

      - The Hero component serves as a prominent section of the application, typically located at the top of the landing page. It provides a visually appealing introduction to the application.

### Providers:

#### 1. AuthProvider:

      - Provides authentication context to the application.

#### 2. TanstackProvider:

       - Provider for additional context (if applicable).

### Hooks:

#### 1. useApplication:

      - Custom hook for managing application data.

#### 2. useAuth:

       - Custom hook for handling user authentication.

#### 3. usePublicAxios:

      - Hook for making HTTP requests to the public API.

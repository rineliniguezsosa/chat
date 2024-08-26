# Challengue - Chat mern

Este es un proyecto de aplicación de chat construido utilizando el stack MERN (TypeORM, Express, React, Node.js) con TypeScript. El proyecto está dividido en dos partes principales:

- **Backend (API Chat)**: Construido con Node.js y TypeScript.
- **Frontend (App Chat)**: Construido con React y Vite.


## Table of contents

- [Author](#author)
- [Requirements](#requirements)
- [Install and Deployment](#install)



## Author

- Rinel iñiguez

## Requirements 

- [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor of your choice)
- [Node.js](https://nodejs.org/)
- npm (version 6 or higher) - This comes with Node.js, but make sure you have the latest version by running `npm install -g npm`.
- MySQL (solo si se usa en el proyecto)
 
## Install

Follow these steps to download and run the project locally

1. **Clone this repository:**

  Open your terminal and run the following command:

   ```bash
   git clone https://github.com/rineliniguezsosa/chat.git
   ```

2. **Navigate to the apichat backend folder**

    ```bash
    cd apichat
    ```
3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Create an .env file in the root of the apichat folder and configure the necessary environment variables. Example of .env file:**

    ```bash
        PORTSERVER #express server execution port
        HOST #connection host
        USERNAME #username
        PASSWORD #password
        DB #data base
        DB_PORT #db port
        ORIGIN #url of your front-end so that cors allows input requests
    ```
5. **Start the backend server:**

    ```bash
       npm run dev
    ```

## Front end appchat 

1. **Navigate to the appchat frontend folder:**

    ```bash
    cd appchat
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```
3. Set the .env environment variables in the root of the appchat folder

    ```bash
    VITE_API_URL #backend url to access the user creation service
    ```
4. **Start the frontend server:**

    ```bash
    npm run dev
    ```
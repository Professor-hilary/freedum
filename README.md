# Freedum

## Introduction

**Freedum** is an open platform designed for leisurers to share their thoughts, news, and lifestyle experiences in the form of blogs. The platform enables users to post content and receive reviews and ratings from the community, much like TikTok but tailored for writers and bloggers.

Built with a combination of **Django** (for the backend), **ReactJS** (for the web and UI), and **Electron** (for desktop support), Freedum allows users to easily create and interact with content across multiple platforms. The project may later integrate **Bootstrap** for a more refined and responsive UI.

### Key Features

-   **Blogging Platform**: Users can post articles on a variety of topics, including news, lifestyle, and personal stories.
-   **Reviews and Ratings**: Each post allows the community to interact by providing feedback through reviews and ratings.
-   **Cross-Platform**: Available as both a web app (via ReactJS) and a desktop app (via Electron).

---

## Technologies

-   **Backend**: [Django](https://www.djangoproject.com/)
-   **Frontend**: [ReactJS](https://reactjs.org/)
-   **Desktop Application**: [Electron](https://www.electronjs.org/)
-   **Potential UI Framework**: [Bootstrap](https://getbootstrap.com/)

---

## Project Structure

### Environment Setup (`env` folder)

Before running the project locally, you must set up the environment. This step is essential for configuring dependencies and environment variables.

1. Clone the repository:

    ```bash
    git clone https://github.com/Professor-hilary/freedum.git
    cd freedum
    ```

2. Set up the environment:

    - Install Python dependencies:
        ```bash
        pip install -r requirements.txt
        ```
    - Set up the Node.js environment:
        ```bash
        npm install
        ```

3. Configure the environment variables:
    - Copy the `.env.example` file to `.env` and update the necessary environment variables.

---

## Installation

### Backend (Django)

1. Set up the virtual environment:

    ```bash
    python -m venv env
    source env/bin/activate  # On Windows: env\Scripts\activate
    ```

2. Install the backend dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Run migrations:

    ```bash
    python manage.py migrate
    ```

4. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

### Frontend (ReactJS)

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the ReactJS dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

### Desktop Application (Electron)

1. Navigate to the Electron directory:

    ```bash
    cd electron
    ```

2. Install the Electron dependencies:

    ```bash
    npm install
    ```

3. Start the Electron application:
    ```bash
    npm start
    ```

---

## Development

### Contributing

Contributions are welcome! To contribute to the project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes and commit them (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a pull request

---

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Disclaimer

Freedum is an open platform with no specific inspiration behind its creation. It is intended to provide an avenue for leisurers to share their thoughts freely and engage with a community of like-minded individuals.

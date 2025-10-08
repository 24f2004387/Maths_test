# Multiplication Practice App

## Summary
The Multiplication Practice App is a simple static web application designed to help users practice multiplication through a series of 10 randomly generated questions. Users can submit their answers, receive immediate feedback, and generate a new set of questions for continued practice.

## Setup (Local)
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/multiplication-practice-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd multiplication-practice-app
   ```
3. Open `index.html` in your preferred web browser.

## Usage
1. Upon loading the app, you will see 10 multiplication questions.
2. Enter your answers in the provided input fields.
3. Click the "Submit" button to check your answers.
4. Review the feedback for correct and incorrect answers.
5. Click "Generate New Questions" to start a new practice session.

## Code Explanation
- **index.html**: The main HTML file containing the structure of the app.
- **styles.css**: Contains styles for the app to enhance user experience.
- **script.js**: Handles the logic for generating questions, checking answers, and updating the UI.

Key functions in `script.js`:
- `generateQuestions()`: Creates 10 random multiplication questions.
- `checkAnswers()`: Compares user inputs with correct answers and provides feedback.
- `resetQuestions()`: Resets the input fields and generates a new set of questions.

## Deployment (GitHub Pages)
To deploy the app using GitHub Pages, follow these steps:

1. Push your code to a GitHub repository.
2. Go to the repository settings.
3. Scroll down to the "GitHub Pages" section.
4. Select the branch you want to deploy (usually `main` or `master`).
5. Click "Save" and your app will be available at `https://yourusername.github.io/repository-name`.

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
# Maths Quiz App

## Summary
The Maths Quiz App is a single-page application that presents users with 10 random arithmetic questions (addition, subtraction, multiplication). Built with Bootstrap 5, the app features a clean, centered card layout. Users can select answers from multiple-choice options, receive immediate feedback, and view their final score at the end.

## Setup (Local)
To run the app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/24f2004387/Maths_test.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Maths_test
   ```
3. Open `index.html` in your preferred web browser.

## Usage
1. Start the app by opening `index.html`.
2. Answer each question by selecting one of the four options (A, B, C, D).
3. Receive immediate feedback on your answer.
4. After answering all questions, view your final score summary.

## Code Explanation
The app utilizes JavaScript to generate random arithmetic questions and manage user interactions. Key components include:
- **HTML**: Structure of the quiz card and buttons.
- **CSS**: Styling with Bootstrap 5 for a responsive layout.
- **JavaScript**: Logic for question generation, answer validation, and score tracking.

Key DOM checks:
- Ensure the quiz card is present: `!!document.querySelector('#quiz-card')`
- Ensure the next button is functional: `!!document.querySelector('#next-btn')`
- Ensure the score display is present: `!!document.querySelector('#score')`

## Deployment (GitHub Pages)
To deploy the app using GitHub Pages, follow these steps:

1. Push your local changes to the `main` branch of your GitHub repository.
2. Navigate to the repository settings on GitHub.
3. Scroll down to the "GitHub Pages" section.
4. Select the `main` branch as the source and save.
5. Access your live app at: [https://24f2004387.github.io/Maths_test/](https://24f2004387.github.io/Maths_test/)

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
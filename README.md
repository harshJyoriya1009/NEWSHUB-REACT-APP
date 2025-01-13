# NewsHub

NewsHub is a React-based web application that provides the latest news headlines in various categories such as Business, Entertainment, Health, Science, Sports, and Technology. Users can explore the top news articles and read them directly from their respective sources. The app features smooth navigation, dynamic loading, and category filtering for a better user experience.

## Features

- **Top Headlines**: Displays the latest news articles from different categories (Business, Entertainment, Health, Science, Sports, and Technology).
- **Infinite Scrolling**: Load more articles dynamically as the user scrolls down.
- **Category Navigation**: Easily switch between categories via the top navigation bar.
- **Loading Indicator**: A spinner is shown while news articles are being fetched.
- **Responsive Design**: The app is fully responsive and works well on all screen sizes, including mobile devices.
- **React Router**: Used for navigation and handling different routes for each category.

## Tech Stack

- **Frontend**: React.js
- **State Management**: React's `useState` and `useEffect` hooks
- **Routing**: React Router
- **API**: [News API](https://newsapi.org/) for fetching top headlines
- **Styling**: Bootstrap 5
- **Loading Bar**: React Top Loading Bar for smooth transitions
- **Infinite Scrolling**: React Infinite Scroll Component
- **Prop Validation**: PropTypes for validating props in components

## Installation

1. Clone the repository:
  ```bash
   git clone https://github.com/yourusername/newshub.git
  ```
2. Navigate to the project folder:
```bash
cd newshub
```
3. Install the dependencies:
```bash
   npm install
```
4. Create a .env file in the root directory and add your News API key:
```bash
REACT_APP_API_KEY=your_news_api_key
```
5. Start the development server:
```bash
npm start
```
6. Open http://localhost:3000 in your browser.

**Project Structure**
```bash
src/
│
├── components/
│   ├── Navbar.js            # Navigation bar with category links
│   ├── News.js              # Main news section displaying articles
│   ├── NewsItem.js          # Individual news article component
│   ├── Spinner.js           # Spinner component displayed during loading
│
├── App.js                   # Main app component where routing and layout are defined
├── App.css                  # Styles for the app
├── index.js                 # Entry point for React
├── index.html               # HTML template
└── .env                     # Environment variables for API keys
```

***HOW ITS WORK***

- Fetching Data: The News.js component fetches the news articles based on the selected category and displays them dynamically. News articles are fetched from the News API based on the category passed via the URL.
- Infinite Scrolling: The InfiniteScroll component automatically loads more articles when the user reaches the bottom of the page.
- Routing: The app uses React Router to manage different routes for each category. Each category has its own route and loads the news accordingly. You can access any category by navigating to:
   -/business
   -/entertainment
   -/general
   -/health
   -/science
   -/sports
   -/technology
- Loading Bar: The LoadingBar component provides a smooth loading experience while the app fetches new data.
- Spinner: A spinner is displayed whenever the data is being loaded to let the user know that content is being fetched.

**Usage**

- View Categories: Click on any category in the navigation bar to view top headlines for that category.
- Read More: Click the "Read more" button on any news article to open the full article in a new tab.

**Contributing**
Contributions are welcome! Please feel free to fork the project, make changes, and submit pull requests.

**How to Contribute**
- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes and commit them (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new pull request.

This `README.md` provides a comprehensive overview of your project, including the tech stack, features, installation steps, usage, and contribution guidelines. Make sure to replace the placeholders like the API key and screenshots with the appropriate details from your project.

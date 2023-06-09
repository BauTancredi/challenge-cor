# Coding Challenge

This repository is my approach to a coding challenge including React + Typescript.

## Requirements

- Create a Todo App using React
- The app should have pagination and a filter by status
- Each todo should have a title, description, status and a priority
- You shoud be able to modify the status adn the priority of a todo
- You should be able to delete a todo

## Assumptions and choices

- I decided to use Typescript because it's a good practice and it helps to avoid bugs.
- I used Tailind CSS to style the app because it's a library that I'm familiar with and it's easy to use.
- I used the localStorage to persist the data because it's easy to use and it's a good option to persist data in a small app.
- I avoided uuid to generate the id of the todos because I wanted to the app to be as simple as possible.  

## How to run the app locally

Clone the project

```bash
  git clone https://github.com/BauTancredi/challenge-cor
```

Go to the project directory

```bash
  cd challenge-cor
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Next steps

- Add a filter by priority
- Edit all the fields of a todo
- Persist the data in a database
- Add tests

## License

[MIT](https://choosealicense.com/licenses/mit/)


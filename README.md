# Tic-Tac-Toe Game
[![coverage](https://github.com/guyca/obsidian-tic-tac-toe/raw/gh-pages/badges/coverage-jest%20coverage.svg?raw=true)](https://github.com/guyca/obsidian-tic-tac-toe/tree/master/tests)
<a href="https://discord.gg/MDH2axwaPy"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>


A simple tic-tac-toe game implemented in React using MVVM (Model-View-ViewModel) architecture that utilizes [react-obsidian](https://github.com/wix-incubator/obsidian) for Dependency Injection.

The app demonstrates how dependency injection facilitates writing modular code that is easier to understand and test.

It's adapted from the [Tic-Tac-Toe tutorial](https://react.dev/learn/tutorial-tic-tac-toe) on the React website.

## Key features

- **MVVM Architecture** - The app is structured in a way that separates concerns between the view, view model, and model.
- **Dependency Injection** - The app uses [react-obsidian](https://github.com/wix-incubator/obsidian) for dependency injection.
- **"Dumb views"** - The view is a simple component that only knows how to render the UI. It doesn't contain any business logic.
- **No confusing `useEffect` hooks** - hooks with dependency arrays can be confusing and hard to reason about. This repo demonstrates how to avoid hooks almost entirely by encapsulating logic in classes.

## Tests

The repo contains two types of tests:

- [unit](https://github.com/guyca/obsidian-tic-tac-toe/tree/master/tests/unit) - where single components are tested in isolation
- [integration](https://github.com/guyca/obsidian-tic-tac-toe/tree/master/tests/integration) - where the entire app is tested as a whole. Services that interact with the system are mocked in the [FrameworkGraphForIntegrationTests](https://github.com/guyca/obsidian-tic-tac-toe/blob/master/tests/integration/fakes/FrameworkGraphForIntegrationTests.ts).

## Running locally

1. yarn
2. yarn start

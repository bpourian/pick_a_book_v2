# PickABook

### Overview
This is a web application that allows users to exchange their unwanted used books with other users.

Created by [Benjamin Pourian](https://github.com/bpourian) || [Giada Simonetti](https://github.com/GiadaSimonetti) || [Agata Golebiewska](https://github.com/MissDove) || [Lewis Moore](https://github.com/lewmoore) || [Alex Wilson](https://github.com/alextwilson) || [Alexandra Fina](https://github.com/AlexandraGF)

![Screenshot-2](img/screen.png)

### Tech Stack
This application was build with:
* Elixir
* Phoenix
* ReactJs

Tested with:
* ExUnit
* Jest
* Enzyme

The user stories for PickABook are as follows:

### User Stories

#### MVP
```
As a user
So I can make my book available to other users
I would like to be able to add a book
```

#### Version 1
```
As a user
So I can see what books are available
I would like to see a list of all books
```
```
As a user
So I can see more details about a book
I would like to see an individual book page
```
```
As a user
So I can remove my books
I would like to be able to delete a book
```

#### Version 2
```
As a user
So I can use PickABook
I would like to be able to register
```
```
As a user
So I can return to PickABook
I would like to be able to log in and out
```

#### Version 3
```
As a user
So I can find the books I need
I would like to search for books by title
```
```
As a user
So I can rate my experience
I would like to give other users a review
```
```
As a user
So I can ask for books I like
I would like to request to swap a book
```
```
As a user
So I can swap my books
I would like to respond to requests for my books
```

#### Get Started

Follow these steps to get started with the application:

* Clone the repo
* `cd` in to the folder, open the application and run `mix deps.get` to install Phoenix dependencies
* Run `npm install` to install node dependencies
* Run `mix ecto.create` and `mix ecto.migrate` to create and setup the database
* Run `mix phx.server` to run the application
* You are now running on localhost 4000!

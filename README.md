# PasarGo!

## WebApp Built for Orbital 2021

## 1. Introduction
![poster](https://user-images.githubusercontent.com/77440060/119792654-70ea9f00-bf08-11eb-9ea9-bf3b7abe5b34.jpg)

### Motivation

There are many situations when you want to support smaller businesses to buy items that you are interested in but you simply cannot find the website or item listed online. It is simply frustrating as you will have to constantly search it up online or through social media and contact the sellers directly to purchase it from them. Furthermore, small startups could be deemed as being unreliable and sketchy especially since everything is done online. This discourages people from buying the items from the small businesses simply due to how inconvenient it is. It is also rather expensive to buy a single item from the small businesses, as it is very hard to meet the minimum spending to get free delivery. So why isn’t there an available platform to collate the small businesses and allow you to mass order your items?

### Aim

We hope to give small businesses a chance and opportunity to bring more exposure to their products or services and at the same time, give online shoppers more options and customizability to choose from.

### User Stories

- As somebody who loves to paint and has the time during weekends to do so, I would love to be able to earn some side income from my hobby as I have already invested quite a bit in painting tools. With this web app, I am able to promote my artwork to a wider audience and hopefully get some sales from it.
- As somebody who loves earrings but is unable to find a pair of earrings that truly resonate with me, this web app allow me to be able to look for reliable small businesses that sells earrings and small businesses that are usually more flexible and customisable with their products, hence I will have a higher chance of finding earrings that I like or even earrings that I personally have a say in how they look.
- As a seller that has an interest in sewing and would like to have a go at selling my products to have a sensing of how popular my products will be, I want a platform for me to set up a temporary store to sell my products.
- As a buyer who likes to try out different types of pastry, I generally do not need to purchase in bulk as I am only interested in trying out the flavours. However, many of these small bakeries do not find it worthwhile to bake pastries on a small scale. Hence, this web app will allow me to find other interested buyers so that we can order from the bakery together and share the delivery costs.
- As a party planner, it is difficult for me to customise the party gift accordingly to each guest in one order. This makes the ordering process inefficient and does not guarantee me my ideal product. However, the Web App provides me with the chat feature that links me with the seller to facilitate the personlization process and makes it easier for me to order my products.

## 2. Features

### Scope of project

We are planning to build a Web App to act as the **go-to** website for those who are trying to start a home-based buisness and earn a side income. The Web App will allow them to reach out to a greater audience and foster stronger **buyer-seller** relationship. The chat feature promotes discussions between the buyer and seller so as to provide greater buyer satisfaction and reduce confusions.

### Milestone 1

Features implemented:

1. Main page where users will see upon entering the website (Appendix A)
2. Navigation bar for different parts of the main web page
3. Log in or Sign Up button which redirects them to a page for them to register or login (Appendix B)
4. Changed navigation bar once they have logged in for them to view their listing, wishlist, profile and for them to log out. (Appendix C)

### Milestone 2

Features to be implemented by milestone 2:

1. Listing page where users can see the listings for each category
2. Wishlist page to show the products and services requested by users
3. My Profile page for users to view their products/services listed and products/services on their wishlist

The three pages and features will mainly be implemented using React JS as the library for building this user interface and linked to one another using react router

The wishlist and listings will be connected to a realtime database to enhance the selling/buying experience by allowing them to view the latest updates.

### Milestone 3

Features to be implemented by milestone 3:

1. Chat function for buyer and seller to communicate
    1. Will be implemented using Firechat from firebase for real-time chat
2. Option to find other interested buyers to share delivery cost/group buy
    1. Will be built using html/css and React JS library
3. Sellers can set a limit to the number of products and customers on group orders
    1. Will be built using html/css and React JS library


## 3. Process 

### Tech Stack

1. Frontend User Interface (Client side):
    - HTML/CSS/Javascript (Languages)
    - React JS (library)
        - react-bootstrap
        - react-firebase
        - react-router
    - Material-UI

2. Backend (Server side):
    - Firebase (Database)


### Frontend Development

**ReactJS**

We decided to use ReactJS as it is lightweight and flexible. We installed yarn and used it to specifically install dependencies required for our project.

Dependencies installed include:
- react-bootstrap (CSS framework for styling components)
- react-firebase (To connect with server side)
- react-router (To route to different pages)
- material-ui (CSS framework for styling components)

### Backend Development

**Firebase**

We decided to use Firebase as it is backed by google and has built-in analytics and easy to integrate with other services. Firebase allows for quick exchange of data to and fro from the database which is suitable for out chat messaging feature.

## Appendix

### Appendix A: Home Page
![appendixA](https://user-images.githubusercontent.com/77440060/120092735-b77a0c80-c147-11eb-8dae-1595b191dfaf.png)

### Appendix B: Register & Login Page
![appendixB1](https://user-images.githubusercontent.com/77440060/119792498-5284a380-bf08-11eb-8f66-af34f26fd677.png)
![appendixB2](https://user-images.githubusercontent.com/77440060/120092523-0b83f180-c146-11eb-8311-beacb2b56600.png)

### Appendix C: Honme page after logging in
![appendixC](https://user-images.githubusercontent.com/77440060/120058173-acf24100-c07b-11eb-885e-1184d878306d.png)








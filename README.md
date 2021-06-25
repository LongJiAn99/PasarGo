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

We are planning to build a Web App to act as the **go-to** website for those who are trying to start a home-based buisness and earn a side income. The Web App will allow them to reach out to a greater audience and foster stronger **buyer-seller** relationship. The chat feature promotes discussions between the buyer and seller so as to provide greater buyer satisfaction and reduce confusions. In the case that there are a few buyers that are looking at the same product and are looking for someone to share the delivery cost, if they are living in the same area, the web app will proceed to **help to group them together for a mass order and deliver to that area.** This will be done by adding them to a group with the seller where they can confirm the orders and discuss the delivery dates and options.

A step-by-step guide is provided under **Appendix** for users who want to try out our website.

### Milestone 1

Features implemented:

1. Main page where users will see upon entering the website 
2. Navigation bar for different parts of the main web page
3. Log in or Sign Up button which redirects them to a page for them to register or login 
4. Changed navigation bar once they have logged in for them to view their listing, wishlist, profile and for them to log out. 

### Milestone 2

Features implemented:

1. Listing page where users can see the listings for each category 
2. Wishlist page to show the products and services requested by users 
3. My Profile page for users to view their products/services listed and products/services on their wishlist 

The three pages and featureswere implemented using React JS as the library for building this user interface and are linked to one another using react router. Firebase was used as the backend to store all the relevant data needed.

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

Firebase firestore was used to store all the products and services listed when users add a new listing or when they add a new wishlist. The data is being stored as such:
![image](https://user-images.githubusercontent.com/77440060/123447771-cf409580-d60c-11eb-910e-323f868fd991.png)

Basically, a collection for each category is created to store the listings which belong in that category. This is so that users can better sieve through the listings to look for what they want. Additionally, a collection with the user's own unique authentication id will be created whenever the user adds a new listing or item in his/her wishlist. This way, we are able to fetch all of the user's listings and items in their wishlist with greater ease and efficiency. This is done by using simple queries on the firebase firestore collection when fetching our data.

Firebase storage is also used to store photos of the products 

### Architecture

**UX Flowchart**
![DiagramFlowchart](https://github.com/LongJiAn99/website-repo/blob/master/src/pages/images/Obrital%20Diagram%20Flow.png)

## Appendix

### Link to our website to try:
To start Web App: 
Clone repository from https://github.com/LongJiAn99/website-repo

Open terminal and type “npm install”:

![npm install](https://user-images.githubusercontent.com/77440060/123448739-b97fa000-d60d-11eb-8935-4e8a2f5c8917.png)

Then, type “npm start”:

![npm start](https://user-images.githubusercontent.com/77440060/123448968-d1572400-d60d-11eb-8974-87645be06f48.png)

To register, click on the Sign up button at the top right of the web page or the Sign Up button on the Banner:

![Inkededit_LI](https://user-images.githubusercontent.com/77440060/123449033-e16f0380-d60d-11eb-8ac6-68b96c48cceb.jpg)

Enter the details required to register:

![sign-in](https://user-images.githubusercontent.com/77440060/123449112-f0ee4c80-d60d-11eb-84a1-7bd5fa1908df.png)

Head over to the login page to login with details you have signed up earlier or even sign in with your google account:

![login](https://user-images.githubusercontent.com/77440060/123449171-fd72a500-d60d-11eb-868f-9b0f0351ae3e.png)

To browse the category of your interest, simply select the respective category or click on Browse to be directed to the category options:

![browse](https://user-images.githubusercontent.com/77440060/123451063-f2207900-d60f-11eb-9074-4b553eb076ee.png)

To create a new listing, simply click on New Listing:

At the new listing page, fill up the relevant details of the 
Log out from the web app after using it









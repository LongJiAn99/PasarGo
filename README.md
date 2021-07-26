# PasarGo!

## WebApp Built for Orbital 2021

## 1. Introduction
![newposter](https://github.com/LongJiAn99/website-repo/blob/master/src/images/PasarGo!%20(2).jpg)

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
    - Home: Directs user back to main page
    - Wishlist: Directs user to the wishlist page
    - Browse: Shows the list of products/services categories 
    - Guide: Guide on how to use the webapp
    - About: Motivation behind the webapp and its purpose
    - Profile: User can navigate to view more user information
3. Log in or Sign Up button which redirects them to a page for them to register or login 
    - User can choose to sign in with an account or with google
    - Forgot password feature
4. Changed navigation bar once they have logged in for them to view their listing, wishlist, profile and for them to log out. 

### Milestone 2

Features implemented:

1. Listing page where users can see the listings for each category 
    - Listing page is filtered based on the categories
    - Product details such as price and descriptions are shown 
2. Wishlist page to show the products and services requested by users 
    - Wishlist page is filtered based on the categories
    - Wishlist details and descriptions are shown
3. Profile page for users to view their products/services listed and products/services on their wishlist 

    a. Profile
        - User can view their details (username and email) and update their profile 
        
    b. My Listings
        - Users can view the products that they listed
        
    c. My Wishlist
        - Users can view the wishlist requests they added 
        
    d. Orders
        - Users can check their confirmed orders
        
    e. Sign out button


The three pages and featureswere implemented using React JS as the library for building this user interface and are linked to one another using react router. Firebase was used as the backend to store all the relevant data needed.

The wishlist and listings will be connected to a realtime database to enhance the selling/buying experience by allowing them to view the latest updates.

### Milestone 3

Features to be implemented by milestone 3:

1. Chat function for buyer and seller to communicate
    1. Implemented using Chat Engine for real-time chat
    2. Payment and transaction details will be discussed using this feature between the buyer and the seller
    3. Buyers and sellers will use the chat function to discuss the preferred payment option and complete transaction on their own 
    4. Interested sellers can also contact the Wishlister through the use of the chat to clarify queries regarding the products

2. Option to find other interested buyers to share delivery cost/group buy
    1. Built using html/css and React JS library
    2. If users intend to cut costs on delivery, they are able to view any exising group orders for that product if that product is available for delivery
    3. If there are exisiting group orders that suite their time and location (MRT Station), they can just add on to that group order
    4. If there are no exisiting group orders or none that are convenient for them, they are able to create a new group order and await other potential buyers
    5. Upon having quite a good number of orders, the buyer who created the group order will then be able to close the group order to get the seller's approval

3. Sellers can set a limit to the number of products and customers on group orders
    1. Built using html/css and React JS library
    2. When creating a new listing, sellers will be able to select their mode of delivery (either through self-pickup or through delivery or both)
        * Self-pickup:
            1. Sellers will have to choose a self-pickup location for buyers
            2. Sellers can then state the available time for the self-pickup
        * Delivery:
            1. Sellers can opt for delivery at the buyer's convenicence
            2. Sellers have to enter a delivery fee (0 if free delivery)
            3. Sellers can then state the available time buyers can select if they intend to have a group order


## 3. Process 

### Tech Stack

1. Frontend User Interface (Client side):
    - HTML/CSS/Javascript (Languages)
    - React JS (library)
        - react-bootstrap
        - react-firebase
        - react-router
    - Material-UI
    - Chat Engine

2. Backend (Server side):
    - Firebase (Database)


### Frontend Development

We came up with the colour palette of the WebApp as well as the main design of the WebApp 
**ReactJS**

We decided to use ReactJS as it is lightweight and flexible. We installed yarn and used it to specifically install dependencies required for our project.

Dependencies installed include:
- react-bootstrap (CSS framework for styling components)
- react-router (To route to different pages)
- material-ui (CSS framework for styling components)
- react-icons (Icons to make the WebApp more user friendly)
- react-pro-sidebar (Sidebar navigation)

The frontend was made using a mix of components from multiple libraries as listed above and styled using useStyles and classNames as well as the traditional CSS. 

For example:
- Each product/listing is made using Material UI's card component imbedded in their Grid component 
- Profile page made use of Tab, Nav, Row and Col components from react-bootstrap
- SideBar in the listing/wishlist page is made using MenuItem and SubMenu component from react-pro-sidebar
- Navigation between pages are made using Links from react-router-dom
    - Navigation between pages were planned using the UX flowchart so as to ensure that the different features are easily accessible to make it more user friendly
- Filter in sidebar is made with checkboxes and the filtering feature will be completed in milestone 3

### Backend Development

**Firebase**

We decided to use Firebase as it is backed by google and has built-in analytics and easy to integrate with other services. Firebase allows for quick exchange of data to and fro from the database which is suitable for out chat messaging feature.

Firebase was used to authenticate users by having them either sign up with their google accounts or using their email and a password. There is also a feature in the event which users forget their password. A reset password link will be sent to the email which they registered with.

Firebase firestore was used to store all the products and services listed when users add a new listing or when they add a new wishlist. The data is being stored as such:

![image](https://user-images.githubusercontent.com/77440060/123447771-cf409580-d60c-11eb-910e-323f868fd991.png)

Basically, a collection for each category is created to store the listings which belong in that category. This is so that users can better sieve through the listings to look for what they want. Additionally, a collection with the user's own unique authentication id will be created whenever the user adds a new listing or item in his/her wishlist. This way, we are able to fetch all of the user's listings and items in their wishlist with greater ease and efficiency. This is done by using simple queries on the firebase firestore collection when fetching our data.

![newlisting](https://user-images.githubusercontent.com/77440060/123452129-b1752f80-d610-11eb-9ec7-b4be2c49bcd2.png)


Firebase storage is also used to store photos of the products as users may want to input multiple photos for their listings or wishlist. Hence we save their photos in their storage then proceed to download their urls when we want to fetch these photos to showcase their listing/wishlist.

![image](https://user-images.githubusercontent.com/77440060/123452348-e8e3dc00-d610-11eb-9b0a-03422fc98d8e.png)

### Hosting

We have decided to use Firebase Hosting as our means of deploying our WebApp. Since we have already used Firebase firestore as our database collection method as well as Firebase storage to store any images, we have decided to stick with firebase to deploy our webstite too. This was done by downloading and using the Firebase CLI to deploy our files from local directories to their Hosting services. 

We have also decided to use Firebase Hosting due to the fact that it has lightweight hosting configuration options that allow us to easily rewrite URLs for client-side routing and GitHub Integration. 


### Chat Feature

The Chat feature was implemented using Chat Engine UI. The current user data and newly created user data are extracted from firebase using axios GET. These information are then transferred to Chat Engine and a new chat account is created for the user through the use of axios POST. With that, the firebase authentication is linked to the Chat Engine data. The users can then freely chat with the other users and create new chats to clarify any doubts. 

We have also decided to use Chat Engine UI as the UI is complete and has sufficient features that will allow the smooth usage of our webapp. Not only was the implementation of the Chat feature more efficient, the chat feature is also more complete with the use of the Chat Engine UI as there are more components to the chat function that makes it easier for the user to use.

### Testing and Qualitative Assurance

We carried out the testing in phases to thoroughly test out the application.

During the development phase, we mainly carried unit testing by singling out a feature first and ensuring that it works on our local domain. Once multiple freatures have been implemented, we then try out integration tetsing by going through the whole process of using the webapp to detect any errors. The test cases used are all different and updated to the different categories to ensure that all of the features are functioning well.

**Unit Testing**

We did our unit testing by making use of React JS useState hook to set an error if the user does not fill in a form correctly. This can be seen from the code below:

![registererrorhandlingcode](https://user-images.githubusercontent.com/77440060/126941879-80fb1de5-3bc1-4bf6-9d1f-8bb966743f08.png)
![registererrormsg](https://user-images.githubusercontent.com/77440060/126943585-1f6a242a-8a2d-4ee0-b3f2-b4b6253f5a1d.png)


**Integration Testing**

After adding a new feature, we would also test the previous features that interact with this feature to ensure that everything works together. 
For example,
- Testing page navigation
    - Check whether the right navigation bar shows up pre/post logging in
    - Check whether the products listed are accurately placed based on its categories
- Listing product or posting a wishlist request
    -  Check that after the required information are filled in the request/product shows up at the main listing/wishlist page
- After listing a request or product, test the listing display UI
    - Check that the product shows up at the listing page
    - Check that the user can view their listings at their profile page
- After accepting a pending order, 
    - Both the seller and the buyer should be updated on this change

**System Testing** 

After adding all the features, we ran the webapp and tested to see if it meets our requirements of the web app, mainly to: 
1. List a product
2. Add a wishlist request
3. Browse through the webapp
4. Update our profile page
5. Purchase a product
6. Chat with the seller
7. Make a Group Delivery
8. Accept and Reject orders

We tried the form submitting features and checked if the newly submitted products were reflected accurately on the respective pages and in our database as well
- For example:
    - Listing a product under the Arts and Craft category
    - Then we check if it shows under the listing page
    - Followed by checking if it shows up in My Lisitngs under My Profile

**User Acceptance Testing**

We had a few users to voluntarily try out our webapp and tasked each of them to test out specific cases.
Test cases (simulated user focus group):
- Seller wanting to sell products
- Buyer looking for to browse through with no specific item in mind
- Buyer looking for a certain item
- Seller checking on their exisiting listings 
- Buyer checking on their exisiting requests

***Results***

![registrationtesting](https://user-images.githubusercontent.com/77440060/126959579-ca9fd7a9-4ba9-4f3b-bbe0-38dbe66c0d27.png)
![newlistingtesting](https://user-images.githubusercontent.com/77440060/126959612-305e88e4-b1dd-4794-99c8-c93681d5da10.png)
![orderconfirmationtesting](https://user-images.githubusercontent.com/77440060/126959625-30f35b3a-2df9-4f54-a298-542004813c4d.png)
![newgrpordertesting](https://user-images.githubusercontent.com/77440060/126959653-268ee002-eac9-462d-b1ec-c4894dd5a134.png)
![addinggrporderandclosingordertesting](https://user-images.githubusercontent.com/77440060/126959707-08c0bcd0-7342-4c83-874b-d2b9a784fe22.png)
![acceptordertesting](https://user-images.githubusercontent.com/77440060/126960285-60002af8-3849-434e-92c6-6b709ac92636.png)
![rejectordertesting](https://user-images.githubusercontent.com/77440060/126960294-927b6e01-92e2-4413-ba6b-00ceeee31ae2.png)
![updateprofiletesting](https://user-images.githubusercontent.com/77440060/126959738-9422e019-18cc-4bec-a701-d04252e59f42.png)
    
 **Evaluation**
1. User does not know whether the submission of their listing is completed

    How we solved it: 
    - Added more instructions in the “new listing” page
    - Pop up message to inform user that the product is submitted
    - Redirect user to “listing” page upon successful submission


### Architecture

**UX Flowchart**
![Obrital Diagram Flow](https://user-images.githubusercontent.com/77440060/123536492-1f2e7200-d75d-11eb-9228-0c2361fb4b7c.jpg)

The flowchat shows a breakdown of the website and how the different features are linked. 

We wanted to make the app as user friendly as possible hence the features are not very complicated and easy to understand. The orders and confirming of orders can all be done at the profile page where the user can easily make changes. 

The browsing is also simplified by categorising the different listings into their respective categories. 

This is a simplified flowchat of our frontend structure to give an idea behind what was the structure we had in mind when coding the frontend UI.

## Appendix

### Getting Started:
To start Web App: 

Head on to the website: https://pasargo-faf3a.web.app/

### Login or Register:

To register, click on the Sign up button at the top right of the web page or the Sign Up button on the Banner:

![Inkededit_LI](https://user-images.githubusercontent.com/77440060/123449033-e16f0380-d60d-11eb-8ac6-68b96c48cceb.jpg)

Enter the details required to register:

![sign-in](https://user-images.githubusercontent.com/77440060/123449112-f0ee4c80-d60d-11eb-84a1-7bd5fa1908df.png)

Head over to the login page to login with details you have signed up earlier or even sign in with your google account:

![login](https://user-images.githubusercontent.com/77440060/123449171-fd72a500-d60d-11eb-868f-9b0f0351ae3e.png)

### Listing

To browse the category of your interest, simply select the respective category or click on **Browse** to be directed to the category options:

![browse](https://user-images.githubusercontent.com/77440060/123451063-f2207900-d60f-11eb-9074-4b553eb076ee.png)

![image](https://user-images.githubusercontent.com/77440060/123452936-82ab8900-d611-11eb-85b1-ee97e72721f3.png)

![image](https://user-images.githubusercontent.com/77440060/123549027-d812a200-d799-11eb-904b-db471f8a7992.png)


### New Listing

To create a new listing, simply click on **New Listing**:

![addnewlisting](https://user-images.githubusercontent.com/77440060/123549046-ef518f80-d799-11eb-84a1-59257ae5349f.png)

At the new listing page, fill up the relevant details of the product or service which you are trying to sell, remember to click on upload after selecting your photos and before adding them!

![image](https://user-images.githubusercontent.com/77440060/123453077-abcc1980-d611-11eb-81b4-1d03daced41b.png)

### Wishlist

For sellers, to see what users may request for that category, click on **View Wishlist**

![wishlist](https://user-images.githubusercontent.com/77440060/123548922-74887480-d799-11eb-91a4-592221957bd5.png)

### New Wishlsit

As a buyer, you can add your own wishlist too so that potential sellers may take on your requests:

![newwishlist](https://user-images.githubusercontent.com/77440060/123548980-a7326d00-d799-11eb-87b3-9b1071cf7af6.png)

![image](https://user-images.githubusercontent.com/77440060/123548989-af8aa800-d799-11eb-9883-166aa2dd565f.png)

### New Group Order

As a buyer, if you want to cut costs but there are no existing group orders, simply create your own, either from the group listings page or when confirming your order.

![view grp orders](https://user-images.githubusercontent.com/77440060/126961155-5413d975-36d0-488c-8e48-1d0f6be79379.png)
![addgrp order 1](https://user-images.githubusercontent.com/77440060/126961065-f53cadfc-1919-49a2-9164-28909b7ab0ec.png)
![viewgrporder1](https://user-images.githubusercontent.com/77440060/126961080-530ebb82-382f-4564-8a5c-1403e28fab4c.png)

Afterwhich, simply fill up the the required details to add a new group listing! The available time for delivery as well as the email of the seller is provided for the buyer.

![creategrplisting](https://user-images.githubusercontent.com/77440060/126961310-7de73647-7f7a-4c81-be06-87c05baf1a3f.png)

### Add to Group Order

For the other buyers, the group order listed will now be viewable when they click on view group orders
![addingtogrporder](https://user-images.githubusercontent.com/77440060/126962464-48b57cea-51b1-4ba4-b469-2e96c0c97e75.png)

Just enter the desired quantity and confirm your order!
![add2](https://user-images.githubusercontent.com/77440060/126962555-6674d32e-93a7-45af-96e4-f1d9ab265291.png)

### Closing Group Order

The original buyer who added the group order can then close the group order so that the seller can approve of it. He/she can view all the other orders as well as the email of other buyers. (for chat purposes)

![image](https://user-images.githubusercontent.com/77440060/126964233-1bbeb3de-73e1-4c1d-9ccf-2f168478cc00.png)

### Accept and Reject 

For the sellers, they are able to either accept or reject all group and individual orders which can be seen from their profile under Orders Pending Approval.

![image](https://user-images.githubusercontent.com/77440060/126964393-d4ed3569-9297-4216-8877-86fb16494c0b.png)

If the seller accepts an order, it will be under their confirmed orders tab now, while buyers will be updated that their order has been approved by the seller

![image](https://user-images.githubusercontent.com/77440060/126964696-edcaa1ef-20a1-48e6-8b65-f60ebd105604.png)
![image](https://user-images.githubusercontent.com/77440060/126964735-fb8e85db-f558-41c3-bf27-c35e51ddbfd1.png)

If the seller rejects an order, he/she must provide a reason which the buyers can then see.

![image](https://user-images.githubusercontent.com/77440060/126964805-1529f53c-5712-4b73-8e25-54db96674398.png)
![image](https://user-images.githubusercontent.com/77440060/126964923-2c0cc6d2-28ae-4c20-a1fd-dbda05d273eb.png)


### Profile page

To view your **Profile**, click on the profile icon at the top right of the screen and click on 'My Profile', you can also access your listing, wishlist or orders:

![myprofile](https://user-images.githubusercontent.com/77440060/123453451-28f78e80-d612-11eb-8833-34712aaeaf5e.png)

The tabs shown allows users to view their current listings, their wishlist items, their individual orders and their group orders. For the sellers, they can also view their pending orders awaiting their approval and lastly, their confirmed orders.

![image](https://user-images.githubusercontent.com/77440060/126965455-8c75b174-e1a1-439e-bbca-538289b4ee59.png)


**Update Profile**
Lastly, if users want to update their profile, they are able to do so by clicking on update profile

![image](https://user-images.githubusercontent.com/77440060/126965510-e3dceb99-7720-47c7-b5aa-978d981d7eb7.png)

Simply follow the instructions and the profile will be updated successfully!






<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# That's SoOo 90s - React and Flask app

## About This App

Remember the good ole days of AOL dialup? Or how about the confident, succinct and yet reassuring voice of Elwood Edwards saying "You've got mail" upon login? The good news is that the impending tech apocalpyse of Y2K didn't send mankind back to the stone-age. The bad news is that it's not the 90s anymore! If you have a pulse and love a retro trip down memory lane with your friends then the 90s app is for you! We took inspiration from South Park's 'member berries' for this concept. What better way to get to know your friends better than knowing what parts of their 90s childhood still bring them joy?

## Heroku Link
Open [http://the-90s-app.herokuapp.com/](http://the-90s-app.herokuapp.com/) to view it in the browser.



### Technologies Used 

This is a full CRUD app using Flask and Peewee on the backend and the power of React components and Semantic UI on the frontend. We make excellent use of the seven RESTFUL routes which give the users the ability to create new content, post it, edit it, update it, delete it, and view it all together on an index page. We also incorporate login functionailty and user auth capabilities with a one-to-many relationship between a user and their various posts. We have two to three class models for our SQLITE database. A couple of those other class models (such as users) have their own routes such a POST, GET, and DESTROY. Bcrypt allows for addded user security by hashing user passwords in the database. These types of features are extremely important for creating trust and having credibility with users. We incorporated much custom CSS for a beautiful, fun retro look along with the power of Semantic UI for functionality, consistency and especially... modals! Finally we utilized Git and Github for version control which seemed ever more important and simultaneously challenging in a group-work dynamic. Aditionally, Balsamiq was used for wireframing. 

### Wireframes
Wireframe 1: [https://i.ibb.co/0VScctC/Screen-Shot-2020-11-24-at-8-22-52-AM.png](https://i.ibb.co/0VScctC/Screen-Shot-2020-11-24-at-8-22-52-AM.png) click to view it in the browser.

Wireframe 2: [https://i.ibb.co/vXvT8xq/Screen-Shot-2020-11-24-at-8-22-44-AM.png](https://i.ibb.co/vXvT8xq/Screen-Shot-2020-11-24-at-8-22-44-AM.png) click to view it in the browser.

Wireframe 3: [https://i.ibb.co/s9nRMYB/Screen-Shot-2020-11-24-at-8-23-12-AM.png](https://i.ibb.co/s9nRMYB/Screen-Shot-2020-11-24-at-8-23-12-AM.png) click to view it in the browser.


### User Stories

User goes to landing page. They are greeted with a striking, fun, and funky retro 90s layout. Think Saved By The Bell colors! They immediately see posts lined up symmetrically with a slightly Instagram-esque look and consistency about various 90s nostalgia. But the background and fonts are, you guessed it, SO 90s! The user is dying to sign up for an account upon realizing that they can't post what a huge Sailer Moon fan they were back then unless they are registered and logged in with the site. They click a 'register account' link and a 90s old-school AOL-style login modal pops up for them to input a username and password. They do that and the site immediately logs them in. They still see all the posts but now there is another button that says My Posts. They click the 'Create a Post' button where another modal pops up with input fields for what can be included in the post. These input field include Title, and Image Link Url, a Describe the Nostalgia for a description and an input for Tags. The user begins frantically typing away as they are so excited to share their nostalgia for Sailer Moon. Then they click post. Now they can click all posts page to see everyone's nostalgia posts including their friends and 'my posts' to see there and from there they can edit or delete in order to fine-tune their feed! 90s forever!

### Approch Taken

**In a group-work dynamic, the approach will be much different than a typical project.**

The first things we did upon being assigned our groups is brainstorm project ideas. After we had an idea of what we wanted to do it was time to really crystalize our project-concept throught the use of wireframing and Balsamiq along with user stories. In a group project setting being able to be added on a collaborators in projects that are stored online in the cloud is vital. We did that with Balsamiq cloud to give input on the wireframing. Next, it was time to decide who would have our frontend GitHub repo and our backend Github repo since they did need their own repos.  After that, we set up our individual dev branches on both GitHub repos. There was considerable apprehension about pushing to the main branch with code that doesn't work as there are many people collaborating at once. We got around that by simply pushing to our dev-ian, dev-tyler, dev-dev, and dev-audrey branches with the ability to pull in the early stages from eachother's dev branches too. When we felt reasonably confident with some code, we pushed to a dev-master branch. Only when we felt absolutely confident did we push to the master branch. Using Git and Github in this way was a real birth-by-fire experience but a valueable one indeed!


## Unsolved Problems

Our like button was our big unsolved problem. It create issues with the delete part of our CRUD functionality. We went to every TA session, we were in classroom Zoom everyday asking questions, and we were so close. A TA actually zoomed us on a Sunday to help us with this functionality. There was so much more to it and it was much more tricky than we realized... especially to do it right! We spent hours upon hours on this feature and so much abt it was going right. Our backend routes were working for posting and deleting to our class models for Likes. We had persistent storage for our likes. When you clicked the heart icon the like would only increment for that post. You had to be logged in to like. Then in the page where we map through our posts and filter our likes by the post id they are associated with. For some reason, when you hit delete you get a typeError. This was devastating for our team. I think further instruction on these types of functionalities (many-to-many relationships) would be a GREAT optional lesson for our class. We put so much time and effort into this as well as asking questions along with seeking help early and often.

### Notes

Group notes go here... 

>>>>>>> 9ae323a8370377ca46186c107cfc321c44e290c1

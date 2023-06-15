# b712-summer-camp-client-side-faridul22

## Pro Drawing 
# live website link
[]()


- This website is based on summer school camps. 
- - This website created on drawing related schools.

# Basic User without login
- - A normal user will first visit the website and see the homepage. On the top of this homepage there is a navigation bar, there you will see three routes home, instructors, classes, below that is a slider, under the slider you will see cards of six classes in the popular class section which have more students enrolled, then popular instructor section. , below that is an image gallery related to student work, and below that is a footer.

# Normal login User
- - When a user logs in to the website, his information as a student will be saved in the database, and when he logs in to the website, he will see a route called the dashboard.  If he clicks on the dashboard and enters, he will see three routes, 1.  Selected Classes, 2.  enrolled classes,3.  payment history.  In the first state these routes will contain nothing.  If he clicks on the enroll now button of a class then that class will be added to the selected classes route of his dashboard, there will be some information about the class and there will be two buttons, payment button and delete button.  If he clicks the delete button the class will be deleted from his selected class list.  And if he completes the payment by clicking on the payment button, then that class will be added to his enrolled classes list and it will be deleted from his selected classes list.  And when he completes the payment process, some information related to his payment will be stored in the payment history.

# Instructor user
- - When an instructor user enters the website by logging in, he will see two routes in his dashboard, 1.  add a class From there he can post a class with various information about a class.  There will be another route called my classes where the instructor will see all the classes added by him.  And he can see the status of those classes pending, approved, deny and if the admin has given any feedback in any of his classes he can see them.  See how many students are enrolled in any of his classes.  There will be an update button.  He can update the information of any class by clicking the update button.

# Admin user
- - When the website admin enters her dashboard, he will see two routes.  1.  Manage classes, 2.  Manage users.  In the Manage Classes route, you can see all the classes that instructors have added.  Each class will have three action buttons, 1, approved, 2. Deny, 3.  feedback.  If the inspector clicks on the approved button, the class will be approved and will appear in the classes route.  And if the Deny button is clicked then the class will be Deny and this class will not be visible to anyone except admin and inspector.  And if the admin clicks the feedback button then he can write some feedback about the class.  If the admin writes some feedback then he can see it in the instructor's feedback of my class list. If manage user and admin enter the manage user then he can see all the registered users on this website and from here he can make a student inspector or admin if he wants.

# The packages I used to build this website are:
- -  React js,
   - vite,
   - daisyui,
   - tailwindcss
   - stripe/react-stripe-js,
   - stripe/stripe-js,
   - tanstack/react-query,
   - axios,
   - firebase,
   - match-sorter,
   - moment,
   - react,
   - react-awesome-reveal,
   - react-dom,
   - react-helmet-async,
   - react-hook-form,
   - react-icons,
   - react-responsive-carousel,
   - react-router-dom,
   - sort-by,
   - sweetalert2

#
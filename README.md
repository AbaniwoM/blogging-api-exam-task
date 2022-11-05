# Blogging API
This is an API for a Blog

## Requirements
#### 1. User should be able to register
#### 2. User should be able to login with JWT authentication
#### 3. User should be able to create a blog post
#### 4. User should be able to update a blog post
#### 5. User should be able to delete a blog post
#### 6. User should be able to filter blog posts
#### 7. API should have pagination
#### 8. Test Application

## To start the server
- run `npm start`

## Register User
- Route: /register
- Method: POST
- Body:
`{
  "firstName":"Joseph",
  "lastName":"Example",
  "email":"joeexample@gmail.com",
  "password":"joe123456"
}`
(firstName and lastName should not be less than 6 characters)
- responses
Success
`{
   message: 'Register successful'
   user: {
        "firstName":"Joseph",
        "lastName":"Example",
        "email":"joeexample@gmail.com",
        "password":"joe123456"
   }
}`

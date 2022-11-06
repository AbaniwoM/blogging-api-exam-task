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
- run `npm run dev`

## Hosted link 
- https://real-underclothes-fly.cyclic.app/

## Register User
- Route: /register
- Method: POST
- Body:
```
{
  "firstName":"Joseph",
  "lastName":"Example",
  "email":"joeexample@gmail.com",
  "password":"joe123456"
}
```
(firstName and lastName should not be less than 6 characters)
- responses

Success
```
{
   message: 'Register successful'
   user: {
        "firstName":"Joseph",
        "lastName":"Example",
        "email":"joeexample@gmail.com",
        "password":"joe123456"
   }
}
```

## Login User
- Route: /login
- Method: POST
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
- Body:
```
{
  "email":"joeexample@gmail.com",
  "password":"joe123456"
}
```
(login details must be same as registered details)
- responses

Success

`An authentication token will be given to you which you'll supply in the Header as you go on`

`Note: token is being updated after 1hr`

## Create Post
- Route: /api/posts
- Method: POST
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
    
`Note: token is being updated after 1hr`
 
## Update Post
- Route: /api/posts/:id
- Method: PUT
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
    
`Note: token is being updated after 1hr`

## Delete Post
- Route: /api/posts/:id
- Method: DELETE
- Header
    - Content-Type: application/json
    - auth-token: (token given) 
    
`Note: token is being updated after 1hr`

## Get all Posts
- Route: /api/posts
- Method: GET
- Header
    - Content-Type: application/json
    - auth-token: (token given)
 
 `Note: token is being updated after 1hr`
 
## Get Posts by username, category, author, title, tags
- Route: e.g `/api/posts?user=Johnson`
- Method: GET
- Header
    - Content-Type: application/json
    - auth-token: (token given) 

`Note: token is being updated after 1hr`

## Contributor
- Michael Abaniwo

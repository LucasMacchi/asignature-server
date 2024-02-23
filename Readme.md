# Asignatures server

This servers was made with typescript, nodeJS, Mongoose and MongoDB

User Routes

- POST /user/login --> Route for login --> body = email | password
- POST /user/register --> Route for signing up --> body: email | password | username
- GET /user/:email --> Route to get user info --> parameter: email
- GET /user/activate/:user/:token --> Route to activate user --> parameters: user | token
- POST /user/token/:user_id --> Route will create de token for the password restoration
- PATCH /user/password --> Route to change password --> body: user_id | token_id | new_password

Task Routes

- GET /task/ping --> Does a ping to the route
- GET /task/error --> throws an error
- GET /task/all/:id --> Gets all the task from a user --> parameter: id
- DELETE /task/delete --> Deletes a task --> body = task_id | user_id
- PATCH /task/done --> Change the value of done to true --> body = task_id | user_id
- PATCH /task/undone --> Change the value of done to false --> body = task_id | user_id
- PATCH /task/expire --> Change the value of expire to true --> body = task_id | user_id
- POST /task/add --> Creates a new task --> body = task(title, description, hour, minutes, day, isDone, isExpire, isCheck) | user_id


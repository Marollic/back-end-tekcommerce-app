# To Run the Project

- Clone Repo
  ```bash
  git clone https://github.com/Marollic/back-end-tekcommerce-app.git
  ```


- Jump into the directory
  ```bash
  cd back-end-tekcommerce-app
  ```

- Install:

  ```bash
   npm install
  ```

- Run the app:
  ```bash
   npm start
  ```

# APIs and Payload

1. **Register**\
   URL: http://localhost:3000/api/user/register \
   Method: POST\
   Payload:
   ```JSON
   {
     "name":"Marollic",
     "age":40,
     "email":"Marollic11@gmail.com",
     "address":"P.O. Box 168, 1015 Orci Street",
     "password":"12345"
   }
   ```
   Success Response:
   ```JSON
   {
     "status": "success",
     "data": {
       "name": "Marollic",
       "age": 40,
       "email": "Marollic11@gmail.com",
       "address": "P.O. Box 168, 1015 Orci Street",
       "password": "12345"
     },
     "msg": ""
   }
   ```
   Failure Response:
   ```JSON
   {
     "status": "failed",
     "data": {},
     "msg": "User Already Exists"
   }
   ```
2. **Login**\
   URL: http://localhost:3000/api/user/login \
   Method: POST\
   Payload:
   ```JSON
   {
     "email": "Marollic11@gmail.com",
     "password": "12345"
   }
   ```
   Success Response:
   ```JSON
   {
     "status": "success",
     "data": {
       "name": "Marollic",
       "age": 40,
       "email": "Marollic11@gmail.com",
       "address": "P.O. Box 168, 1015 Orci Street",
       "password": "12345"
     },
     "msg": ""
   }
   ```
   Failure Response:
   ```JSON
   {
     "status": "failed",
     "data": {},
     "msg": "No UserId / Password Found"
   }
   ```
3. **Search**\
   URL: http://localhost:3000/api/user/search?q=Marollic \
   Method: GET\
   User Found Response:
   ```JSON
   {
     "status": "success",
     "data": [
       {
         "name": "Marollic",
         "age": 40,
         "email": "Marollic11@gmail.com",
         "address": "P.O. Box 168, 1015 Orci Street",
         "password": "12345"
       }
       ....
       ....
       ....
     ],
     "msg": ""
   }
   ```
   User Not Found Response:
   ```JSON
   {
     "status": "success",
     "data": [],
     "msg": ""
   }
   ```

## By
[Marollic](https://marollic.com)

# Assessment
Software Engineer Assessment

## Requirement
### Users registration
  - User input required information 
  - After registration, get confirmation information

### Admin report
  - Display all registered users sorted in descending order by date of registration.


## Solution
### Delivered URL
  - Ursers registration: https://ancient-thicket-23142.herokuapp.com/user/register
  - Admin report:https://ancient-thicket-23142.herokuapp.com/admin/report
  - Github repo: https://github.com/JYHan97/Assessment
### Choosed technologies  
  - front-end:
    - EJS
    - Bootstrap
  - back-end:
    - Node.js
    - Express
    - MongoDB
  - Used module:
    - mongoose
    - express-validator
  - Test:
    - Jest

### Acomplished feature
 - User registration
   - Registration and confirmation work flow
   - Client-side validation
   - Server-side validation
 - ```
   - When user access the registration page, they need to fill all required field
   - Then press the "Register" button
   - User will see all the registration information again in confirmation page
   - Then press the "Register Another" button to register another time.
 - Admin report
   - Display all records sorted in descending order by date
   - Display records with specify search filter
- Deployment
  - Project was deployed on Heroku
  - Access with link: https://ancient-thicket-23142.herokuapp.com/user/register
- API Documentation
  - link: https://docs.google.com/document/d/1ELjuxlg6AhziAs0rjKKaHBfMu-D5gzXAf_ZdCipAw-A/edit?usp=sharing

### Next steps
- Database back up
  - MongoDB M0 Cluster is a free solution for cloud database. Unfortunately, the free solution didn't support back up set.
  - However, in advanced cluster solution, we can set the cluster be backed up and restore with AWS, GCP or Azure.
- CRUD support
  - May need support "DELETE" and "UPDATE" in the future
- BDD and TDD
  - already set up test enviroment, do more automate test in the future
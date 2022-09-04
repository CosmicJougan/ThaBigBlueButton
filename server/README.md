# Backend

## Install XAMPP

https://www.apachefriends.org/download.html

## Implement the PHP REST API

Now go to the path “C:\xampp\htdocs” and create a new folder named “react“.\
This folder name must match the name in [registration.js](../big-blue-button/src/components/registration/registration.js) onSumbit URL after "localhost/".\
Then inside the “react“ folder, place the files named "connect.php" and "insert.php".

Start xampp.\
Then type “http://localhost/phpmyadmin/ ” on your browser. After the PHPMyAdmin opened, click on the Databases.
Now create a database named users.\
Then create a table named “users”. Here we need 3 columns to store id, name and password.\
Now give column names and data types (INT for id, VARCHAR for name and password). Here we have to set "id" as Primary Key and Autoincrement (A.I).

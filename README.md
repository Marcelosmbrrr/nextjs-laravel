# Laravel Breeze and NextJs

To initialize the api, run the migrations and create an admin user run all the commands in the api directory. If running with Docker, only the last two commands are needed.

```
php artisan serve
php artisan migrate
php artisan db:seed
```

To initialize the client if the application does not run with Docker:

```
npm run dev 
```


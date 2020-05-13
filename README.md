# smartbrain-api

smartbrain-api from the Complete Web Developer course at Udemy

## Database tables

```SQL
CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    entries BIGINT DEFAULT 0,
    joined TIMESTAMP NOT NULL
);

CREATE TABLE login (
    id serial PRIMARY KEY,
    hash VARCHAR(100) NOT NULL,
    email text UNIQUE NOT NULL
);

```

## Heroku

Deployed to Heroku as randyh-smartbrain-api:

```bash
heroku login
git push heroku master
```

## Local

To run the server locally, you need to set the API_KEY environmental variable to your Clarifai API key.

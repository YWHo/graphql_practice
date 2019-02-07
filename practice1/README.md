# Practice 1
This is the code based on lesson from:
https://adityasridhar.com/posts/what-is-graphql-and-how-to-use-it

## Testing the application

### Setup
- npm install

### Run
node server.js

---

#### Test endpoint: hello

Input:
```javascript
{
  hello
}
```

Expected output:
```javascript
{
  "data": {
    "hello": "Hello World"
  }
}
```

---

#### Test endpoint: movie

Input:
```javascript
{
  movie(id: 1) {
    name
  }
}
```

Expected output:
```javascript
{
  "data": {
    "movie": {
      "name": "Movie 1"
    }
  }
}
```

/////////////////////////////////////////

Input:
```javascript
{
  movie(id: 3) {
    name
    id
    year
  }
}
```

Expected output:
```javascript
{
  "data": {
    "movie": {
      "name": "Movie 3",
      "id": "3",
      "year": 2016
    }
  }
}
```

---

#### Test endpoint: director

Input:
```javascript
{
  director(id: 1) {
    name
    id,
    age
  }
}
```

Expected output:
```javascript
{
  "data": {
    "director": {
      "name": "Director 1",
      "id": "1",
      "age": 20
    }
  }
}
```

/////////////////////////////////////////

Input:
```javascript
{
  director(id: 1) {
    name
    id,
    age,
    movies{
      name,
      year
    }
  }
}
```

Expected output:
```javascript
{
  "data": {
    "director": {
      "name": "Director 1",
      "id": "1",
      "age": 20,
      "movies": [
        {
          "name": "Movie 1",
          "year": 2018
        },
        {
          "name": "Movie 2",
          "year": 2017
        }
      ]
    }
  }
}
```
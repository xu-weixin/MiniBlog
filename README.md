# MiniBlog
A mini-blog SPA using React and Redux.
Use json-server to generate fake datas like
```
{
  "posts": [
    {
      "id": 1,
      "title": "Sunny Days",
      "categories": "Weather",
      "content": "This is a sunny day."
    },
    {
      "id": 2,
      "title": "Cloudy Days",
      "categories": "Weather",
      "content": "I had a bad mood."
    },
    {
      "id": 3,
      "title": "Birthday",
      "categories": "Diary",
      "content": "Happy birthday to you."
    }
  ]
}
```
To start the server, first you need to install the json-server using `npm install -g json-server`.next, save datas above as ##db.json##(the file name should end using '.json'), then use command to start the server:

```
json-server db.json
```

Finally, visit `localhost:3000/posts` to get datas.

### Getting Started


Click [here](https://github.com/xu-weixin/MiniBlog) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

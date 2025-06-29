const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.json());

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

app.get('/users', (req, res) => {
  res.json(users);
});


//**multiple data entry */
// app.post('/users', (req, res) => {
//   const data = req.body;

//   // Check if it's an array (multiple users)
//   if (Array.isArray(data)) {
//     const addedUsers = data.map((user, index) => {
//       const newUser = {
//         id: users.length + 1,
//         name: user.name
//       };
//       users.push(newUser);
//       return newUser;
//     });

//     // Send response: e.g., only first ID
//     return res.status(201).json({ id: addedUsers[0].id });
//   }

//   // If it's a single object
//   const newUser = {
//     id: users.length + 1,
//     name: data.name
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

//single data only
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedName = req.body.name;

  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ message: "user not found " });

  user.name = updatedName;
  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.json({ message: `user ${userId} deleted` })
});


app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})


//run via postman
//GET http://localhost:3000/users
//post http://localhost:3000/users Body: {"name":"charliie" , "id" : 3  }

//put http://localhost:3000/users/2 {"name":"updated bob" }
//delete http://localhost:3000/users/2
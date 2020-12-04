import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
//     {
//     firstName : "Marko",
//     lastName : "Davidovic",
//     age : 32
//     },
//     {
//         firstName : "John",
//         lastName : "Doe",
//         age : 30
//     }
 ]

//all router in here are starting with /users
router.get("/", (req, res) => {
  
    res.send(users);
});

router.post("/", (req,res) => {
    
    const user = req.body;

    users.push({ ... user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
})


router.get("/:id", (req, res) => {
    const {id} = req.parmams;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    res.send(`Userwith the ID ${id} deleted from the database`)
})

 router.patch("/:id", (req, res) => {
     const {id} = req.params;
     const { firstName, lastName, age} = req.body;

     const user = users.findIndex((user) => user.id === id);
     if(firstName) user.firstName = firstName;
     if(lastName) user.lastName = lastName;
     if (age) user.age = age;

     res.send(`User with the id ${id} has been updated`);
     
 })

export default router;
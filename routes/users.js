import express from "express";

const router = express.Router();

const users = [
{
    id: 1,
    name: 'Alicia Keys',
    time: "12:30",
    image:
      'https://i.imgur.com/trl6zVV.jpg',
  },
  {
    id: 2,
    name: 'Johnny Bravo',
    time: "9:40",
    image:
      'https://i.imgur.com/sbjVIvD.jpg',
  },
  {
    id: 3,
    name: 'Gal Gadot',
    time: "10:50",
    image:
      'https://i.imgur.com/4EACi0Y.jpg',
  },
  {
    id: 4,
    name: 'Gabriela Drezden',
    time: "14:15",
    image:
      'https://i.imgur.com/15Z1YVa.jpg',
  },
  {
    id: 5,
    name: 'Dvejn Johnson',
    time: "11:30",
    image:
      'https://i.imgur.com/snovgnr.jpg',
  },
]

router.get('/', (req, res) => {
    res.send(users);
});

export default router

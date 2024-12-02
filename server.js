const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;


app.use(cors());

app.use(express.static(path.join(__dirname)));

app.use('/media', express.static('media'));


const characters = [
  // Main Characters
  {name: 'Gon', type: 'Hunter', description: 'A cheerful and determined boy seeking to find his father and become a Hunter.', image: '/images/Gon.jpeg' },
  {name: 'Killua', type: 'Assassin', description: 'A skilled young assassin with lightning Nen abilities and Gon bestfriend.', image: '/images/killua.jpeg' },
  {name: 'Kurapika', type: 'Hunter', description:'The last Kurta clan survivor, seeking vengeance for his family massacre', image: '/images/kurapika.jpg' },
  {name: 'Leorio', type: 'Hunter/Medical Student', description: 'An aspiring doctor who cares deeply for his friends and justice.', image: '/images/leorio.jpg' },

  // Phantom Troupe
  { name: 'Chrollo', type: 'Leader', description: 'The calm and strategic leader of the Phantom Troupe.', image: '/images/chrollo.jpg' },
  { name: 'Feitan', type: 'Troupe Member', description: 'A ruthless fighter known for his deadly techniques and short temper.', image: '/images/Feitan.jpeg' },
  { name: 'Machi', type: 'Troupe Member', description: 'A skilled Nen user and healer, known for her loyalty to Chrollo.', image: '/images/Machi.jpg' },
  { name: 'Shizuku', type: 'Troupe Member', description: 'A forgetful but lethal vacuum-wielding member of the Phantom Troupe.', image: '/images/Shizuku.jpg' },
  { name: 'Uvogin', type: 'Troupe Member', description: 'The strongest Troupe member in terms of raw physical power.', image:'/images/Uvogin.jpg' },
  { name: 'Nobunaga', type: 'Troupe Member', description: 'A swordsman with extreme loyalty to his comrades.', image: '/images/Nobunaga.jpeg' },
  
  // Zoldyck Family
  {name: 'Silva', type: 'Head of Zoldyck Family', description: 'The father of Killua and a powerful assassian.', image: '/images/Silva.jpg'},
  {name: 'Illumi', type: 'Assassin', description:'Killuas manipulative older brother and a skilled assassin.', image: '/images/Illumi.jpg'},
  {name: 'Zeno', type: 'Elder Assassin', description: 'The grandfather of Killua with vast experience in Nen techniques.', image: '/images/Zeno.jpg'},
  {name: 'Alluka', type: 'Wish Granter', description: 'Killuas sibling with mysterious wish-granting powers.', image: '/images/Alluka.jpg'},

  // Hunter Exam Participants
  {name: 'Hisoka', type: 'Hunter', description: 'A magician-like fighter who thrives on battling strong opponents.', image: '/images/Hisoka.jpg'},
  {name: 'Hanzo', type: 'Hunter', description: 'A skilled ninja who participated in the Hunter Exam.', image: '/images/Hanzo.jpg'},
  {name: 'Tonpa', type: 'Exam Disruptor', description: 'A veteran of the Hunter Exam who tries to sabotage rookies.', image: '/images/tonpa.jpg'},


  // Chimera Ant Arc
  {name: 'Meruem', type: 'King', description: 'The Chimera Ant King, one of the most powerful Nen users.', image: '/images/Meruem.jpg'},
  {name: 'Neferpitou', type: 'Royal Guard', description: 'A loyal Royal Guard with immense Nen abilities.', image: '/images/Neferpitou.jpg'},
  {name: 'Shaiapouf', type: 'Royal Guard', description: 'A manipulative and loyal Royal Guard of Meruem.', image: '/images/Shaiapouf.jpg'},
  {name: 'Menthuthuyoupi', type: 'Royal Guard', description: 'The strongest of the Royal Guards in terms of raw power.', image: '/images/Menthuthuyoupi.jpg'},
  {name: 'Komugi', type: 'Gungi Player', description: 'A blind girl whose bond with Meruem highlights the Chimera Ant King humanity.', image: '/images/Komugi.jpg'},


  // Other Hunters
  {name: 'Isaac', type: 'Hunter Association Chairman', description: 'The chairman of the Hunter Association and one of the strongest Nen users.', image: '/images/Isaac.jpg'},
  {name: 'Biscuit', type: 'Hunter/Trainer', description: 'A skilled Nen trainer with a deceptive appearance.', image: '/images/Biscuit.jpg'},
  {name: 'Wing', type: 'Nen Trainer', description: 'Gon and Killua first Nen teacher.', image: '/images/Wing.jpg'},
  {name: 'Knuckle', type: 'Hunter', description: 'A kind-hearted but strong Nen user.', image: '/images/Knuckle.jpg'},
  {name: 'Morel', type: 'Hunter', description: 'A skilled fighter who uses smoke-based Nen abilities.', image: '/images/Morel.jpg'},
];


app.get('/', (req, res) => {
  res.send('Welcome to the Hunter x Hunter API!');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});


app.get('/api/characters', (req, res) => {
  res.json(characters);
});

app.get('/api/character/:name', (req, res) => {
  const name = req.params.name.toLowerCase().replace(' ', '_');
  const character = characters.find(c => c.name.toLowerCase().replace(' ', '_') === name);

  if (character) {
    res.json(character);
  } else {
    console.error('Character not found:', req.params.name);
    res.status(404).json({ error: 'Character not found' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Simpelt array til at gemme Star Wars karakterer
const characters = [
    { name: 'Luke Skywalker', role: 'Jedi Knight' },
    { name: 'Darth Vader', role: 'Sith Lord' }
];

// Hent alle karakterer gennem en(GET)
exports.getCharacters = (req, res) => {
    res.json(characters);
};

// Tilføj en ny karakter gennem en(POST)
exports.addCharacter = (req, res) => {
    const newCharacter = req.body;
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
};

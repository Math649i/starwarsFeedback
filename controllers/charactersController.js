// Brug et simpelt array til at gemme Star Wars karakterer
const characters = [
    { name: 'Luke Skywalker', role: 'Jedi Knight' },
    { name: 'Darth Vader', role: 'Sith Lord' }
];

// Henter  alle karakterer gennem (GET)
exports.getCharacters = (req, res) => {
    res.json(characters);
};

// Tilføjer en ny karakter gennem (POST)
exports.addCharacter = (req, res) => {
    const newCharacter = req.body;
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
};

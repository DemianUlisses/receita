const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://demian:81303829@cluster0.jo2mv.mongodb.net/TrabalhoFinal?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('Banco de dados conectado'))
    .catch(err => console.error(err));


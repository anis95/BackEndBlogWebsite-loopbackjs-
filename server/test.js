var models = require('./server.js').models;
/*
const toSave = [
    {name : 'anis abaki', email: 'anis.abaki1@gmail.com'},
    {name : 'anis', email :'anis1.abaki@gmail.com'},
    {name : 'anis lol', email:'nis.lol@gmail.com'},
    {name : 'anis', email:'nis3@gmail.com'},
    {name : 'anis4', email:'nis4.abaki@gmail.com'},
    {name : 'anis5', email:'nis5.abaki@gmail.com'},
    {name : 'anis6', email:'nis6.abaki@gmail.com'},
    {name : 'anis7', email:'nis7.abaki@gmail.com'},
    {name : 'anis8', email:'nis8.abaki@gmail.com'},
    {name : 'mahmoud', email:'mahmoud.abaki@email.com'},
    {name : 'khalil', email:'khalil@krout.com'}
];

toSave.map(obj => {
    models.Profile.create(obj, (err , created) => {
        console.log('profile created ?', err , created);
    })
})


var filter = {
 where : {
     name : {like:'anis' }
 },
 order : 'date ASC',
 limit : 3,
};
*/

models.Profile.findById('5f6a437bd0016140903dfc4c', (err, result) => {
    console.log('Find ?', err, result);
    result.destroy();
})
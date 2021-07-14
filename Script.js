firstPartRapperName = ['Rich', 'DJ', 'Lil', 'Forreal','Princess', 'MC', 'Always','Bad', 'K.K.', 'Big', 'Sticky', 'Di$$y', 'Wild', 'Fresh', 'Killa', 'Chrome'];
secondPartRapperName = ['A$$','Leviosa', 'LeLe','Moneybagz','Boaty','Sushi','Fungi','A.F.', 'Soda', 'Jelly B', 'Army', 'East','Mummy','Doo Doo', 'T.G.I.F.', 'Willy\'s','Hangry', 'Smoggy','Daddy','Gucci','Bo$$', 'Farty', 'Chain', '2000', 'Dollars', 'Digger', 'Sausage', 'Mischief', 'Cripple']

const rapperRandomizer = (firstNameArray,secondNameArray) => {
    firstName = firstNameArray[Math.floor(Math.random()*firstNameArray.length)]; //Selects random 1st name from array
    //console.log(firstName);
    secondName = secondNameArray[Math.floor(Math.random()*firstNameArray.length)]; //Selects random 2nd name from array
    rapperName = firstName + ' ' + secondName;
    return 'Rapper Name: ' + rapperName;
}


console.log(rapperRandomizer(firstPartRapperName, secondPartRapperName));


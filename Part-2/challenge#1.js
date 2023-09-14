
/*
    Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
    gymnastics discipline, which works differently.
    Each team competes 3 times, and then the average of the 3 scores is calculated (so 
    one average score per team).
    A team only wins if it has at least double the average score of the other team. 
    Otherwise, no team wins!
    Your tasks:
        1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
        2. Use the function to calculate the average for both teams
        3. Create a function 'checkWinner' that takes the average score of each team 
        as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
        to the console, together with the victory points, according to the rule above. 
        Example: "Koalas win (30 vs. 13)"
        4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
        Data 2
        5. Ignore draws this time
*/

const calcAverage = (avarage1, avarage2, avarage3) => {
    
    const sum = avarage1 + avarage2 + avarage3;
    const totalAvarage = sum/3
    return totalAvarage;
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);


const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >=  avgKoalas){
        return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else if (avgDolphins >=  avgKoalas){
        return console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log('No team wins...');
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(scoreDolphins, scoreKoalas));

//console.log(calcAverage(44, 23, 71));
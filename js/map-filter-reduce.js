const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//TODO: Create an array of user objects where each user object has at least 3 languages in the languages arrau.
//users.filter will go through an arrow function to find any user where languages are 3 or more and display them in the
//console log.
const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

//TODO: Create an array of strings where each element is a user's email address
//.map is used to create a new array with each element being the result of the callback function.
const emails = users.map(user => user.email);
console.log(emails);

//TODO: Use .reduce to get the total combined years from the list of users and use the results to calculate the average.
//Using .reduce returns a value that results from running the reducer callback function to completion over the entire array.
const yearsTotal = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(yearsTotal);
//Getting the average amount of years
const avgYears = yearsTotal / users.length;
console.log(avgYears);

//TODO: use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((longest, user) => {
    //taking the longest email and displaying it in the console log
    return user.email.length > longest.length ? user.email :longest;
}, '');
console.log(longestEmail);

//TODO: get the list of user's names in a single string using .reduce.
const listOfUsers = users.reduce((names, user) => {
    if (names !== ''){
        names += ', ';
    }
    return names + user.name;
},'');
console.log(listOfUsers);

//TODO: BONUS - use .reduce to get the unique list of languages from the list of users.
const getUniqueListOfLanguages = users.reduce((languages, user)=>{
    user.languages.forEach((language) =>{
        if(!languages.includes(language)){
            languages.push(language)
        }
    });
    return languages;
},[]);

console.log(getUniqueListOfLanguages)
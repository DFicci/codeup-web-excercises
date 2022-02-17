//TODO: Create function that gets users date and displays their last commit date

function getUsersHistory(user){
    let gitHubUrl = `https://api.github.com/repos/${user}/codeup-web-excercises/commits`;
    return fetch(gitHubUrl, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}})
        .then(response => response.json()
            .then(userDate => {
                return userDate[0].commit.author.date;
            }));
    }
//Displays last commit date in the console
getUsersHistory('DFicci').then((lastCommitDate => console.log(lastCommitDate)))


//TODO: Create a function that accepts a number as a parameter and returns a promise that resolves after the passed number of milliseconds.
const wait = milliseconds => {
    return new Promise((determine, reject)=>{
        setTimeout(function (){
            determine(milliseconds);
        }, milliseconds);
    });
}

//Displays the amount of seconds that have passed
wait(1000).then(() => console.log(`you\'ll see this after 1 seconds`));
wait(3000).then(() => console.log(`you\'ll see this after 3 seconds`));

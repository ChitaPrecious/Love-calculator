
const doSomething = new Promise( (resolve, reject) => {
    const man = Math. floor (Math. random () *100)
    resolve (man)
    });
    
    const doSomethingElse=(a)=>{
    const man = a
    const woman = Math. floor (Math. random()*100)
    const average = (man + woman) /2;
    const result = {man: a, woman: woman, average: average}
    return result
    }

    const doThirdThing=(a) => {
    switch(true){
    case (a .average >= 70):
    return  (`ahmed is: ${a.man}, amaka is: ${a.woman}, average is: ${a .average},verdict: so compatible`);
    case (a.average >= 60):
    return (` ahmed is: ${a.man}, amaka is: ${a. woman}, average is: ${a .average},verdict: slightly compatible`);
    case (a. average >= 50):
    return (`ahmed is: ${a.man}, amaka is: ${a.woman}, average is: ${a.average} ,verdict:manageable`);
    case (a.average >= 40):
    return ( `ahmed is: ${a.man}, amaka is: ${a.woman}, average is: ${a. average}, verdict: don't marry` );
    default:
    return (` ahmed is: ${a. man}, amaka is: ${a.woman}, average is:${a. average}, run for your life`);
    }
    }
    function failureCallback(error) {
    console. error(`This error happened: ${error}`);
}
    doSomething.then((result) => doSomethingElse(result))
    .then((newResult) => doThirdThing(newResult))
    .then((finaLResult) => {
        console. log(`  ${finaLResult}`);
        })
             .catch(failureCallback);
   
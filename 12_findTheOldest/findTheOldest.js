function getAge(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}
const findTheOldest = function(people) {
    people.sort((a, b) =>  
        getAge(a.yearOfBirth, a.yearOfDeath) - getAge(b.yearOfBirth, b.yearOfDeath))
        .reverse();
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;

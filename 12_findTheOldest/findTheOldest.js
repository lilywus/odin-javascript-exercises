const findTheOldest = function(people) {
    for (let i = 0; i < people.length; i++) {
        people[i].age = getAge(people[i].yearOfBirth, people[i].yearOfDeath);
    }

    people.sort((a, b) => b.age - a.age);
    return people[0];
};

const getAge = function(birthYear, deathYear) {
    if (!deathYear) deathYear = new Date().getFullYear();;
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;

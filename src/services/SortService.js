import faker from 'faker';

export function fetchUsers() {
    const users = [];

    for (let i = 0; i < 25000; i++) {
        let id = faker.random.uuid();
        let name = faker.name.findName();
        let email = faker.internet.email();
        let joinedOn = faker.date.recent();
        let commentCount = faker.random.number();
        let user = {
            id,
            name,
            email,
            joinedOn,
            commentCount
        };
        users.push(user);
    }
    return Promise.resolve(users);
}

export function sortListDescending(users) {
    const copy = [...users];
    for (var i = 0; i < copy.length-1; i++) {
        for (var j = i+1; j < copy.length; j++) {
            if (copy[i].commentCount < copy[j].commentCount) {
                var t = copy[i];
                copy[i] = copy[j];
                copy[j] = t;
            }
        }
    }
    return copy;
}

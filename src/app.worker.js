export default () => {
    self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
        if (!e) return;
        let users = e.data;

        for (let i = 0; i < users.length-1; i++) {
            for (let j = i+1; j < users.length; j++) {
                if (users[i].commentCount > users[j].commentCount) {
                    const t = users[i];
                    users[i] = users[j];
                    users[j] = t;
                }
            }
        }

        postMessage(users);
    })
}

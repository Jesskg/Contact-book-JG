function getContacts() {
    return JSON.parse(localStorage.getItem('contacts') || '[]');
}

function saveContacts(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function generateId() {
    return Date.now();
}

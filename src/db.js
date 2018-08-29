import Dexie from 'dexie';

const db = new Dexie('Account manager');
db.version(1).stores({ users: '++id, name, email' });

export default db;
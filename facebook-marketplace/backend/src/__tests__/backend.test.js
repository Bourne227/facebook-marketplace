// JavaScript source code
const supertest = require('supertest');
const http = require('http');
const db = require('./db');
const app = require('../app');
let server;
beforeAll(() => {
  server = http.createServer(app);
  server.listen();
  request = supertest(server);
  return db.reset();
});

afterAll((done) => {
  server.close(done);
});

test('GET Invalid URL', async () => {
  await request.get('/v0/so-not-a-real-end-point-ba-bip-de-doo-da/')
    .expect(404);
});

test('GET Valid URL', async () => {
  await request.get('/v0/item')
    .expect(200);
});

test('GET Dummy', async () => {
  await request.get('/v0/dummy')
    .expect(200)
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res).toBeDefined();
      expect(res.body).toBeDefined();
      expect(res.body.message).toBeDefined();
      expect(res.body.message.search(/Hello CSE183/)).toEqual(0);
      expect(res.body.message.search(/Database created/)).toBeGreaterThan(60);
    });
});

test('GET item', async () => {
  await request.get('/v0/item')
    .expect(200)
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res).toBeDefined();
    });
});
const user = {
  'username': '1223',
  'name': '2343',
  'password': '4536'
};
const user2 = {
  'username': 'jli563@ucsc.edu',
  'name': '2343',
  'password': '4536'
};
const user3 = {
  'username': 'jli563@ucsc.edu',
  'name': '2343',
  'password': '4536'
};
const user4 = {
  'username': '563jli@ucsc.edu',
  'name': '2343',
  'password': '4536'
};
test('post item', async () => {
  await request.post('/regester')
    .send(user)
    .expect(200)
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res).toBeDefined();
    });
});
test('post false item', async () => {
  await request.post('/regester')
    .send(user2)
    .expect(401)
});

test('post auth', async () => {
  await request.post('/authenticate')
    .send(user)
    .expect(200)
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res).toBeDefined();
    });
});

test('post auth wrong password', async () => {
  await request.post('/authenticate')
    .send(user3)
    .expect(401)
});
test('post auth wrong user', async () => {
  await request.post('/authenticate')
    .send(user4)
    .expect(401)
});
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';
import {getOnlyVisible, getClickable,
  getManyVisible, getAnyVisible, getNotVisible} from './common';
import {Categories} from '../Categories';

// const supertest = require('supertest');
// const db = require('../../../../backend/src/__tests__/db');
// const app = require('../../../../backend/src/app');
// const http = require('http');

// let server;
/**
 */

//  beforeAll(() => {
//   server = http.createServer(app);
//   server.listen();
//   // request = supertest(server);
//   return db.reset();
// });


test('App Renders', async () => {
  render(<App />);
  getOnlyVisible('All');
});

test('Check car', async () => {
  render(<App />);
  getManyVisible('Car');
});

test('test click all', async () => {
  render(<App />);
  fireEvent.click(getOnlyVisible('All'));
});

test('test click car', async () => {
  render(<App />);
  fireEvent.click(getManyVisible('Car'));
});
import { authReducer } from '../../reducers/auth';

const uid = 'uit_testing';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

//
// LOGIN
//
test(`should login by UID ${uid}`, () => {
  const action = {
    type: 'AUTH_LOGIN',
    uid: uid
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid: uid });
});

//
// LOGOUT
//
test(`should logout user`, () => {
  const action = {
    type: 'AUTH_LOGOUT'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({});
});
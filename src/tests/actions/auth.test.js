import { login, logOut } from '../../actions/auth';

const uid = 'uid_testing';
test('should setup login action', () => {
  const action = login(uid);
  expect(action).toEqual({
    type: 'AUTH_LOGIN',
    uid: 'uid_testing'
  });
});

test('should setup logout action', () => {
  const action = logOut();
  expect(action).toEqual({
    type: 'AUTH_LOGOUT'
  });
});

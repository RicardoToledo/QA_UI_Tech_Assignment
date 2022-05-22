import login from '../pages/LoginPage';
import { URL, CREDENTIALS } from '../data/constants';

fixture `Verify the Login functionality:`
    .page `${URL.PRODUCTION}`;

test('TC1 - Login with a valid user', async t => {
    await t.expect(await login.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)).ok();
});

test('TC2 - Login with an invalid user', async t => {
    await t.expect(await login.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)).notOk();
});
import { login, logout } from "../../actions/auth";

test('testLogin', () => {
    const uid = 'testId';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('testLogout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
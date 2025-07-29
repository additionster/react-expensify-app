import authReducer from "../../reducers/auth";

test('testAuthReducerWithDefaultValue', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('testAuthReducerLogin', () => {
    const uid = 'testUid';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({
        uid
    });
});

test('testAuthReducerLogout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'esdfs' }, action);
    expect(state).toEqual({});
});
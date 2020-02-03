import addErrors from '../redux/actionCreators/addErrors';
import removeErrors from '../redux/actionCreators/removeErrors';
import startCall from '../redux/actionCreators/startCall';
import endCall from '../redux/actionCreators/endCall';
import loginSuccess from '../redux/actionCreators/loginSuccess';
import login from '../redux/actionCreators/login';

import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';

import { ADD_ERRORS, REMOVE_ERRORS, START_CALL, END_CALL, LOGIN_SUCCESS } 
    from '../redux/actionTypes';


describe('actionsCreator', ()=>{

    it('Test if the addErrors action creator returns the right action type and the right action errors', ()=>{
            const expectedErrors = [
                {
                    errorName: 'ValidationError',
                    errorMessage: "FirstName is required"
                },
                {
                    errorName: 'ValidationError',
                    errorMessage: "LastName is required"
                },
                {
                    errorName: 'ValidationError',
                    errorMessage: "Age is required"
                }
            ];
            const expectedActionType = ADD_ERRORS;
            let expectAction = {
                type: expectedActionType,
                errors: expectedErrors
            }
            let action = addErrors(expectedErrors);
            expect(action).toEqual(expectAction);
    });

    it('Test if the removeErrors action creator returns the right action type and the right action errors', ()=>{
        
        let expectedAction = {
            type: REMOVE_ERRORS,
            errors: []
        };
        let action = removeErrors();
        expect(action).toEqual(expectedAction);
    });

    it('Test if the startCall action creator returns the right action type', ()=>{
        let expectedAction = {
            type: START_CALL
        }
        let action = startCall();
        expect(action).toEqual(expectedAction);

    });

    it('Test if the endCall action creator returns the right action type', ()=>{
        let expectedAction = {
            type: END_CALL
        }
        let action = endCall();
        expect(action).toEqual(expectedAction);
    });

    it('Test if the loginSuccess creator returns the right action type', ()=>{
        let expectedAction = {
            type: LOGIN_SUCCESS
        };
        let action = loginSuccess();
        expect(action).toEqual(expectedAction);
    });

    
});

describe('async actions', ()=>{
    let mock;
    let middlewares;
    let mockStore;

    beforeAll(()=>{
        mock = new MockAdapter(axios); 
        middlewares = [thunk];
        mockStore = configureMockStore(middlewares)
    });
    afterEach(() => {
        // mock.restore();
    });

    it('Test if the following actions are dispatched for a successful login action: START_CALL, LOGIN_SUCCESS and END_CALL.', ()=>{
        let credentials = {
            email: "coulsorfrancois@gmail.com",
            password: "pass"
        }
        
        mock.onPost('http://localhost:4000/users/login').reply(204);
        //expected actions
        let expectedActions = [
            {type: START_CALL},
            {type: LOGIN_SUCCESS},
            {type: END_CALL}
        ];
        let initialState = {
            error: [],
            signedIn: false,
            isFetching: false
        }
        const store = mockStore(initialState);
        
        return store.dispatch(login(credentials)).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        }); 
    });

    it('Test if the following actions are dispatched for unsuccessful login action.START_CALL, ADD_ERRORS and END_CALL. ', ()=>{
        let credentials = {
            email: "coulsorfrancois@gmail.com",
            password: "pass"
        };
        mock.onPost('http://localhost:4000/users/login').reply(404);
        //expected actions
        let expectedActions = [
            {type: START_CALL},
            {type: ADD_ERRORS},
            {type: END_CALL}
        ];
        let initialState = {
            error: [],
            signedIn: false,
            isFetching: false
        }
        const store = mockStore(initialState);
        return store.dispatch(login(credentials)).then(()=>{
            expect(store.getActions()).toMatchObject(expectedActions);
        }); 
    });

});

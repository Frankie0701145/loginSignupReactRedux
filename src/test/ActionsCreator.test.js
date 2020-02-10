import addErrors from '../redux/actionCreators/addErrors';
import removeErrors from '../redux/actionCreators/removeErrors';
import startCall from '../redux/actionCreators/startCall';
import endCall from '../redux/actionCreators/endCall';
import loginSuccess from '../redux/actionCreators/loginSuccess';
import login from '../redux/actionCreators/login';
import addUserDetails from '../redux/actionCreators/addUserDetails';
import logoutSuccess from '../redux/actionCreators/logoutSuccess';
import removeUserDetails from '../redux/actionCreators/removeUserDetails';
import addSuccessMessages from '../redux/actionCreators/addSucccessMessages';

import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';

import { ADD_ERRORS, REMOVE_ERRORS, START_CALL, END_CALL, LOGIN_SUCCESS, ADD_USER_DETAILS, REMOVE_USER_DETAILS, LOGOUT_SUCCESS, REMOVE_SUCCESS_MESSAGES, ADD_SUCCESS_MESSAGES } 
    from '../redux/actionTypes';
import removeSuccessMessages from '../redux/actionCreators/removeSuccessMessages';



describe('actionsCreator', ()=>{
    //addErrors
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
    //removeErrors
    it('Test if the removeErrors action creator returns the right action type and the right action errors', ()=>{
        
        let expectedAction = {
            type: REMOVE_ERRORS
        };
        let action = removeErrors();
        expect(action).toEqual(expectedAction);
    });
    //startCall
    it('Test if the startCall action creator returns the right action', ()=>{
        let expectedAction = {
            type: START_CALL
        }
        let action = startCall();
        expect(action).toEqual(expectedAction);

    });
    //endCall
    it('Test if the endCall action creator returns the right action', ()=>{
        let expectedAction = {
            type: END_CALL
        }
        let action = endCall();
        expect(action).toEqual(expectedAction);
    });
    //loginSuccess
    it('Test if the loginSuccess action creator returns the right action', ()=>{
        let expectedAction = {
            type: LOGIN_SUCCESS
        };
        let action = loginSuccess();
        expect(action).toEqual(expectedAction);
    });
    //addUserDetails
    it("Test if the addUserDetails action creator returns the right action", ()=>{
        let userDetails = {
            firstName: "Francis",
            lastName: "Njuguna",
            accessToken: "ndnqnqomxmqxdq"
        }
        let expectedAction = {
            type: ADD_USER_DETAILS,
            userDetails
        }
        let action = addUserDetails(userDetails);
        expect(action).toEqual(expectedAction);
    });
    //removeUserDetails
    it("Test if the removeUserDetails action creator returns the right action", ()=>{
        let expectedAction = {
            type: REMOVE_USER_DETAILS
        };
        let action = removeUserDetails();
        expect(action).toEqual(expectedAction);
    });
    //logoutSuccess
    it("Test if the logoutSuccess action creator returns the right action", ()=>{
        let expectedAction = {
            type: LOGOUT_SUCCESS
        }
        let action = logoutSuccess();
        expect(action).toEqual(expectedAction);
    });
    //addSuccessMessages
    it("Test if the addSuccessMessages action creator returns the right action", ()=>{
        let successMessages = [
            {successMessages: "Login successfully"},
            {successMessages: "Logout successfully"}
        ]
        let action = addSuccessMessages(successMessages);
        expect(action).toEqual({successMessages, type: ADD_SUCCESS_MESSAGES });
    });
    //removeSuccessMessages
    it("Test if the removeSuccessMessages action creator returns the right action", ()=>{
        
        let action = removeSuccessMessages();
        expect(action).toEqual({type: REMOVE_SUCCESS_MESSAGES});
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
        mock.reset();
    });
    //Successful login
    it('Test if the following actions are dispatched for a successful login action:REMOVE_ERRORS,START_CALL,ADD_USER_DETAILS and LOGIN_SUCCESS and END_CALL.', ()=>{
        let credentials = {
            email: "coulsorfrancois@gmail.com",
            password: "pass"
        }
        let data ={
            accessToken: "ncancnoancaomcokmaomcac",
            firstName: "Francis",
            lastName: "Njuguna",
            activated: false,
            homeCoordinate: [21,132],
            workCoordinate: [12,35]
        }
        mock.onPost('/users/login', credentials).reply(204, data);
        //expected actions
        let expectedActions = [
            {type: REMOVE_ERRORS},
            {type: START_CALL},
            {type: ADD_USER_DETAILS, userDetails: data},
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
    //Unsuccessful login
    it('Test if the following actions are dispatched for unsuccessful login action.REMOVE_ERRORS,START_CALL, ADD_ERRORS and END_CALL. ', ()=>{
        let credentials = {
            email: "coulsorfrancois@gmail.com",
            password: "pass"
        };
        let error = {};
        error.message = "Login failed. Invalid email or password";
        mock.onPost('/users/login').reply(401, error);
        //expected actions
        let expectedActions = [
            {type: REMOVE_ERRORS},
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

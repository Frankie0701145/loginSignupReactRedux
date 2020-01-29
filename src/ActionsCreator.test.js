import addErrors from './redux/actionCreators/addErrors';
import removeErrors from './redux/actionCreators/removeErrors';
import startCall from './redux/actionCreators/startCall';
import endCall from './redux/actionCreators/endCall';
import { ADD_ERRORS, REMOVE_ERRORS, START_CALL, END_CALL } from './redux/actionTypes';


describe.only('actionsCreator', ()=>{

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

    it('Test is the endCall action creator returns the right action type', ()=>{
        let expectedAction = {
            type: END_CALL
        }
        let action = endCall();
        expect(action).toEqual(expectedAction);
    });
});

import addErrors from './redux/actionCreators/addErrors';
import removeErrors from './redux/actionCreators/removeErrors';
import { ADD_ERRORS, REMOVE_ERRORS } from './redux/actionTypes';


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
});

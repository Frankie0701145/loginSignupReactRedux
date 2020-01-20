import ujumbeAppRedux from './redux/reducers/index';
import addErrors from './redux/actionCreators/addErrors';
import removeErrors from './redux/actionCreators/removeErrors';

describe('Reducer', () => {
    
    describe('Authenticate Reducer', ()=>{

        it('Expect the initial state to have signedIn as false and error to be an empty array', ()=>{
                let state = ujumbeAppRedux(undefined, {});
                let expectedState={ signedIn: false, errors: [] };
                expect(state).toEqual(expectedState);
        }); 

        it('Expect the return state after firing a ADD_ERROR action to contain same errors passed in the addError action creator.', ()=>{
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
            let state= ujumbeAppRedux(undefined, addErrors(expectedErrors));
            expect(state.errors).toEqual(expectedErrors);
        });

        it('Expect the returned state after firing REMOVE_ERROR action to not contain any errors if the previous state had errors', ()=>{
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
            let initialState = {
                errors: expectedErrors
            }
            let state = ujumbeAppRedux(initialState, removeErrors());
            expect(state.errors).toEqual([]);
        });

    });
});

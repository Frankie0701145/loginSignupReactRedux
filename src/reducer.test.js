import ujumbeAppRedux from './redux/reducers/index';
import addErrors from './redux/actionCreators/addErrors';
import removeErrors from './redux/actionCreators/removeErrors';
import startCall from './redux/actionCreators/startCall';

describe('Reducer', () => {
    
    describe('Authenticate Reducer', ()=>{

        it('Expect the initial state to have signedIn as false, error to be an empty array and isFetching to be false.', ()=>{
                let state = ujumbeAppRedux(undefined, {});
                let expectedState={ signedIn: false, errors: [], isFetching: false };
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

        it('Expect the returned state property isFetching after calling START_CALL to be true', ()=>{

            let state = ujumbeAppRedux( undefined, startCall());
            expect(state.isFetching).toEqual(true);
        });

    });
});

import ujumbeAppRedux from './redux/reducers/index';
import addErrors from './redux/actionCreators/addErrors';

describe('Reducer', () => {
    
    describe('Authenticate Reducer', ()=>{

        it('Expect the initial state to have signedIn as false and error to be an empty array', ()=>{
                let state = ujumbeAppRedux(undefined, {});
                let expectedState={ signedIn: false, errors: [] };
                expect(state).toEqual(expectedState);
        }); 

        it('Expect the return state after firing a ADD_ERROR action to contain the errors', ()=>{
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

    });
});

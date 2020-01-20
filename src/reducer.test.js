import ujumbeAppRedux from './redux/reducers/index';


describe('Reducer', () => {
    
    describe.only('Authenticate Reducer', ()=>{

        it('Expect the signedIn property of the initial state to be false and the errors property of the initial state to be an empty array. ', ()=>{
                let state = ujumbeAppRedux(undefined, {});
                let expectedState={ signedIn: false, errors: [] };
                expect(state).toEqual(expectedState);
        }); 

    });
});

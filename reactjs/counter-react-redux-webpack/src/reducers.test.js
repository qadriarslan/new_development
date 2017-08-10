import { counter } from './reducers';
import { incrementAction, decrementAction } from './actions';

test('incrementCount', () => (
    expect(
        counter(0, incrementAction)
    ).toEqual(1),
    
    expect(
        counter(1, incrementAction)
    ).toEqual(2)
));

test('decrementCount', () => (
    expect(
        counter(1, decrementAction)
    ).toEqual(0),
    expect(
        counter(0, decrementAction)
    ).toEqual(-1)
));
test('default', () => (
    expect(
        counter(1, {type: 'DEFAULT'})
    ).toEqual(1),
    expect(
        counter(undefined, {type: 'DEFAULT'})
    ).toEqual(0)
));

describe('ABCD', () => {
    it('AB', () => {
        expect(
            counter(1, {type: 'DEFAULT'})
        ).toEqual(1);
    });

    it('CD', () => {
        expect(
            counter(undefined, {type: 'DEFAULT'})
        ).toEqual(0);
    })
});
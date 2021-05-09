import { useSelector, useDispatch } from 'react-redux';
import { incrementNum, decrementNum } from '../Redux/Actions/counterAction';

const CounterComponent = () => {

    const myNum = useSelector(state => {
        console.log(state);

        return state.changeNum;
    });

    const dispatch = useDispatch();

    return (
        <div align="center">
            <button
                onClick={() => dispatch(incrementNum())}
            >+</button>
            {myNum}
            <button
                onClick={() => dispatch(decrementNum())}
            >-</button>
        </div>
    );
}

export default CounterComponent;

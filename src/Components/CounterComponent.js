import { useSelector, useDispatch } from 'react-redux';
import { addNum, subNum } from '../Redux/actions/counterAction';

const CounterComponent = () => {
    const myData = useSelector(state => state.changeNum)
    const dispatch = useDispatch();

    return (
        <div align="center">
            <button
                onClick={() => dispatch(addNum())}
            >+</button>
            {myData}
            <button
                onClick={() => dispatch(subNum())}
            >-</button>
        </div>
    );
}

export default CounterComponent;

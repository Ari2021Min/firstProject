
import React, {useState} from 'react';

function Counter (){
    const [count, setCount] = useState(0);

    const addCounter = () => {
        setCount(count + 1);
    }

    const subtractCounter = () => {
        if (count > 0){
            setCount(count - 1);
        }
    }


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addCounter}>Add</button>
            <button onClick={subtractCounter} disabled={count===0}>Subtract</button>
        </div>
    )


}

export default Counter
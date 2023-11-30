import {useState, useEffect} from 'react';

const Views = () => {
    const [view, setView] = useState(0)

    useEffect(()=>{
        // gets the view from local storage and sets it to a number or 0 if it is the first load
        let temp = localStorage.getItem('views');
        temp = Number(temp) || 0;
        // updates the view and pushed it into local storage
        setView(temp);
        localStorage.setItem('views', temp+1);
    }, []);

    // resets the count
    const resetViews = (()=>{
        localStorage.setItem('views', 0);
    }
)
  return (
    <>
        <h3 className='views'>Views: {view}</h3>
        <button onClick={()=>resetViews}>Reset Views</button>
    </>
  )
}

export default Views;
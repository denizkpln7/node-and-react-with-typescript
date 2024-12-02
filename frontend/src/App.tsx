import React from 'react';

import {useAppDispatch, useAppSelector} from "./store/store";


function App() {
    const count = useAppSelector((state) => state.counter.value)
    const blog = useAppSelector((state) => state.blog.blogs)
    const dispatch = useAppDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
            {count}
        </h1>
          <div>
             {blog?.map(i=>{
                  return <p>{i.title}</p>
              })}
          </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import Main from './main.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Main/>
        {/* <Routes>
          <Route path='/' element={<App/>}>
            <Route path='Home' element={<Home/>}></Route>
            <Route path='Doc' element={<Doc/>}>
              <Route
                index
                element={
                  <main style={{ padding: 0 }}>
                    <p>aaaaaaaa index</p>
                  </main>
                }
              />
              <Route path='/Doc/:id' element={<DocSub/>}></Route>
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: 0 }}>
                  <p>404</p>
                </main>
              }
            />
          </Route>
        </Routes> */}
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

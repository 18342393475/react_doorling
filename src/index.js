import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import './flex.css';
import Main from './main.js'
import reportWebVitals from './reportWebVitals';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

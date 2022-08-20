import { Input, Button, Form } from 'antd';
import { useState } from 'react';
import TopForm from './contentSearchForm'

const Content = ()=> {
    const [form, setForm] = useState({value: ''});

    return (
        <div>
            <TopForm data={form}/>

        </div>
    )
}

export default Content
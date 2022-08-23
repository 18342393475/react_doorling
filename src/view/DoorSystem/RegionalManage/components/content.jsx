import { Input, Button, Form } from 'antd';
import { useState } from 'react';
import TopForm from './contentSearchForm'

const Content = ()=> {
    const [form, setForm] = useState({value: ''});
    const onChange = (values) => {
        console.log(values);
        setForm(values)
    }
    return (
        <div>
            <TopForm data={form} onChange={onChange}/>
            <pre className="language-bash">{JSON.stringify(form, null, 2)}</pre>
        </div>
    )
}

export default Content
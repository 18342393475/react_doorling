import { Input, Button, Form, Select } from 'antd';
import React, {useState} from 'react';
import { useEffect } from 'react';
const { Option } = Select;

const SearchForm = (props) => {
    // console.log(props);
    const [form] = Form.useForm();
    const onFinish = (value) => {
        console.log(value)
    }
    const onFinishFailed = (value) => {
        console.log(value);
    }
    const onGenderChange = (value) => {
        console.log(value);
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;

            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;

            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
                break;
            default:
                break;
        }
    };
    const onValuesChange = (changedValues, allValues) => {
        let data = form.getFieldsValue(true);
        console.log(changedValues, allValues, data);
        // props.onChange(data);
    }
    const onFieldsChange = (changedFields, allFields) => {
        let data = form.getFieldsValue(true);
        console.log(changedFields, allFields, data);
        props.onChange(data);
    }
    // const nameValue = Form.useWatch('username', form) || '';
    // const noteValue = Form.useWatch('note', form) || '';

    return (
        <Form
            form={form}
            initialValues={props.data}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={onValuesChange}
            onFieldsChange={onFieldsChange}
            autoComplete="off"
        >
            <Form.Item
                label="用户名称"
                name="username"
                rules={[
                    {
                      required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item label="昵称" name="nick" 
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="note"
                label="Note"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item messageVariables={{ another: 'good' }} label="user" rules={[
                {
                    required: true,
                },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item messageVariables={{ label: 'good' }} label={<span>user</span>} rules={[
                {
                    required: true,
                },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Select
                    placeholder="请选择"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
                {({ getFieldValue }) =>{
                    return getFieldValue('gender') === 'other' ? (
                        <Form.Item
                            name="customizeGender"
                            label="Customize Gender"
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }}
            </Form.Item>
            <Form.Item
            >
                <Button type="primary" htmlType='submit'>
                    查询
                </Button>
                <Button>
                    重置
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SearchForm

// const CustomizedForm = ({ onChange, fields }) => (
//     <Form
//       name="global_state"
//       layout="inline"
//       fields={fields}
//       onFieldsChange={(_, allFields) => {
//         console.log(allFields);
//         // onChange(allFields);
//       }}
//     >
//       <Form.Item
//         name="username"
//         label="Username"
//         rules={[
//           {
//             required: true,
//             message: 'Username is required!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//     </Form>
//   );
  
//   const App = () => {
//     const [fields, setFields] = useState([
//       {
//         name: ['username'],
//         value: 'Ant Design',
//       },
//     ]);
//     const getAllValue = () => {
//         console.log(fields);
//     }
//     return (
//       <>
//         <CustomizedForm
//           fields={fields}
//           onChange={(newFields) => {
//             setFields(newFields);
//             getAllValue();
//           }}
//         />
//         <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
//       </>
//     );
//   };
  
//   export default App;
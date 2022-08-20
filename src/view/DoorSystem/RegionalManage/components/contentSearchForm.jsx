import { Input, Button, Form, Select } from 'antd';
const { Option } = Select;

const SearchForm = (props) => {
    console.log(props);

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
    return (
        <Form
            form={form}
            initialValues={props.data}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                <Input></Input>
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
                    placeholder="Select a option and change input text above"
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
                {({ getFieldValue }) =>
                getFieldValue('gender') === 'other' ? (
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
                }
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
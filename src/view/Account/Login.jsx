
import { useNavigate } from 'react-router-dom';
import {Button, Layout, Row, Col, Form, Input, Checkbox} from 'antd';
import style from './Login.module.scss'
import img from '@/Images/logo.png';
const { Header, Footer, Sider, Content } = Layout;


export default function Login(){
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        navigate('/')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onReset = () => {
        form.resetFields();
    };
    
    const onSubmit = () => {
        let o = form.getFieldsValue();
        console.log(o);
    }
    return (
        <Layout className={style.box}>
            <Header className={`d-flex flex-row align-items-center ${style['bg-none']}`}>
                <img src={img} alt="" />
                <h2 className={style.title}>得令开门</h2>
            </Header>
            <Content className={style.bg}>
                <Row>
                    <Col span={8} offset={14} className={`${style['form-box']} ${style['form-test']}`}>
                        <Form
                            name="basic"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 18 }}
                            initialValues={{ remember: true, username: '',  password: ''}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            form={form}
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 5, span: 18 }}>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 5, span: 18 }} className={`${style['btn-box']}`}>
                                <Button type="primary" htmlType="submit" onClick={onSubmit}>
                                登录
                                </Button>
                                <Button htmlType="button" onClick={onReset}>
                                    重置
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Content>
            <Footer>
                门禁
            </Footer>
        </Layout>
        
    )
}
import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
const image = require('../../../assets/images/people.png');
import { Button, Form, Input } from 'antd';
import { login } from '../redux/asyncActions';
import { useAppDispatch } from '../../../app/store';

interface FormState {
  username: string,
  password: string
}

const AuthForm: React.FC = () => {
  const [form] = Form.useForm<FormState>();

  const dispatch = useAppDispatch();
  
  const onLoginSubmit = (values: FormState) => {
    dispatch(login({ username: values.username, password: values.password }));
  }

  return (
    <div className='wrapper'>
      <div className='container_form'>
        <div className='container_form-back'>
          <Form form={form} className='form' name="horizontal_login" layout="inline" onFinish={onLoginSubmit}>
            <Form.Item className='headline'>Авторизация</Form.Item>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true, message: 'Пожалуйста, введите свой логин!'
                }
              ]}
            >
              <Input className='input' placeholder="Логин" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
            >
              <Input
                className='input'
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item shouldUpdate>{() => (
              <Button
                className='button'
                type="primary"
                htmlType="submit"
              >
                Войти в систему
              </Button>
            )}
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className='img_block'> <img src={image} alt="img of peoples" /></div>
      <div className='empty_block'></div>
    </div>


  );
};

export default AuthForm;
import React, { useCallback } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import './forma.css';
import peoples from './peoples.png';

//import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import  { login } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'store';



const Forma: React.FC = () => {
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();
  const onLoginSubmit = (values: any) => {
    console.log('dispatch', values)
    dispatch(login({username :'', password: ''}));
  }  

  return (
    <div className = 'container'>
      <div className='container_form'>
        <div className='container_form-back'>
          
            <Form form={form} className = 'form' name="horizontal_login" layout="inline" onFinish={onLoginSubmit}>
            <Form.Item className='headline'>Авторизация</Form.Item>
              <Form.Item 
                  name="username"
                  rules={[
                      {
                        required: true, message: 'Пожалуйста, введите свой логин!' 
                      }
                  ]}
              >
              <Input className = 'input' placeholder="Логин" />
              </Form.Item>
              <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
              >
              <Input
               className = 'input'
                type="password"
                placeholder="Пароль"
              />
              </Form.Item>
              <Form.Item shouldUpdate>{() => (
                  <Button
                     className = 'button'
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
      <div className='img_block'> <img src={peoples} alt="img of peoples" /></div>
      <div className='empty_block'></div>
    </div>
    
    
  );
};

export default Forma;
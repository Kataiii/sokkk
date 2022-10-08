import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserAvatar from '../../assets/images/user.png';
import AdminAvatar from '../../assets/images/admin.png';
import SisamdinAvatar from '../../assets/images/sisadmin.png';
import '../../app/App.css'
import { Button } from "antd";

const Root: React.FC = () => {

    const navigate = useNavigate();

    const navToAuth = () => navigate('/auth');

    return (
        <>
            <div className="app-wrapper">
                <h1 className="app__title">Аквариум</h1>
                <div className="app__description">
                    Разработка корпоративного веб-приложения для вовлечения сотрудников в рабочую среду и  сплочения коллектива, помощь в адаптации новых сотрудников. Для решения кейса мы решили разработать следующие механики.
                </div>
                <div className="app__info">Для кого наше приложение:</div>
                <div className="users-container">
                    <div className="role__card">
                        <img src={UserAvatar} />
                        <div className="app__title">Пользователь</div>
                        <div className="app_small">Доступ ко всем фишкам сервиса:</div>
                        <ul className="role__action">
                            <li>Добавление друзей, взаимодействие с ментором</li>
                            <li>Участие в офлайн-мероприятиях</li>
                            <li> Участие в онлайн-мероприятиях</li>
                        </ul>
                    </div>
                    <div className="role__card">
                        <img src={AdminAvatar} />
                        <div className="app__title">Администратор</div>
                        <div className="app_small">Доступ ко всем фишкам сервиса:</div>
                        <ul className="role__action">
                            <li>Добавление друзей, взаимодействие с ментором</li>
                            <li>Участие в офлайн-мероприятиях</li>
                            <li> Участие в онлайн-мероприятиях</li>
                            <li> Участие в онлайн-мероприятиях</li>
                            <li>Выдача наград</li>
                        </ul>
                    </div>
                    <div className="role__card">
                        <img src={SisamdinAvatar} />
                        <div className="app__title">Системный администратор</div>
                        <div className="app_small">Доступ ко всем фишкам сервиса:</div>
                        <ul className="role__action">
                            <li>Участие в офлайн-мероприятиях</li>
                            <li> Участие в онлайн-мероприятиях</li>
                            <li> Участие в онлайн-мероприятиях</li>
                            <li>Выдача наград</li>
                            <li> Редактирование мероприятий</li>
                            <li> Редактирование ассортимента магазина</li>
                        </ul>
                    </div>
                </div>
                <div className="about">
                    <div className="app__title">О проекте:</div>
                    <div className="about__wrapper">
                        <div>
                            <div>NFT/Digital Ruble</div>
                            <ul>
                                <li>Ежемесячное получение</li>
                                <li>Передача цифровой валюты друзьям</li>
                                <li>Получение от ментора за выполнение заданий</li>
                                <li>Получение приза за участие в активностях</li>
                            </ul>
                        </div>
                        <div>
                            <div>NFT/Digital Ruble</div>
                            <div>Офлайн мероприятия: </div>
                            <ul>
                                <li>Спортивные состязания </li>
                                <li>Митапы</li>
                                <li>Лекции</li>
                            </ul>
                            <div>Онлайн мероприятия: </div>
                            <ul>
                                <li>Квизы</li>
                                <li>Настольные игры</li>
                                <li>Турниры</li>
                                <li>Курсы</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{textAlign: 'center', marginTop: '20px'}}>
                    <Button color="#1141D3" size='large' onClick={navToAuth}> Войти в систему</Button>
                </div>
            </div>

        </>
    )
}

export default Root;
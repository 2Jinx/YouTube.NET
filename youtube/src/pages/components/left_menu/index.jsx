import React from 'react';
import MenuButton from './components/MenuButton.jsx'
import '../../../assets/left-menu.css';

function LeftMenu({ isOpen }) {
    return (
        <>
            {isOpen ?
                <div className='left-menu'>
                    <div className='sidebar-container'>
                        <div className='first-container'>
                            <MenuButton title={'Главная'} />
                            <MenuButton title={'Shorts'} />
                            <MenuButton title={'Подписки'} />
                        </div>
                        <div className='first-container'>
                            <div className='best-youtube-section-title-container'>
                                <p className='youtube-title-style'>Вы</p>
                            </div>
                            <MenuButton title={'Мой канал'} />
                            <MenuButton title={'История'} />
                            <MenuButton title={'Ваши видео'} />
                            <MenuButton title={'Смотреть позже'} />
                            <MenuButton title={'Развернуть'} />
                        </div>
                        <div className='first-container'>
                            <div className='best-youtube-section-title-container'>
                                <p className='youtube-title-style'>Подписки</p>
                            </div>
                            <button className='sidebar-button'>
                                <div className='svg-container'>
                                    <img src='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg' alt='' />
                                </div>
                                <p className='sidebar-text'>Clever Monkey</p>
                            </button>
                        </div>
                        <div className='first-container'>
                            <div className='best-youtube-section-title-container'>
                                <p className='youtube-title-style'>Навигатор</p>
                            </div>
                            <MenuButton title={'В тренде'} />
                            <MenuButton title={'Музыка'} />
                            <MenuButton title={'Фильмы'} />
                            <MenuButton title={'Видеоигры'} />
                            <MenuButton title={'Спорт'} />
                        </div>
                        <div className='first-container'>
                            <div className='best-youtube-section-title-container'>
                                <p className='youtube-title-style'>Другие возможности</p>
                            </div>
                            <MenuButton title={'Творческая студия'} />
                            <MenuButton title={'YouTube Premium'} />
                            <MenuButton title={'YouTube Music'} />
                        </div>
                        <div style={{ marginTop: 20 }} className='first-container'>
                            <MenuButton title={'Настройки'} />
                            <MenuButton title={'Жалобы'} />
                            <MenuButton title={'Справка'} />
                            <MenuButton title={'Отправить отзыв'} />
                        </div>
                        <div className='content-section-with-links-and-copyright'>
                            <a href='https://www.youtube.com/about/'>О сервисе</a>
                            <a href='https://www.youtube.com/about/press/'>Прессе</a>
                            <a href='https://www.youtube.com/about/copyright/'>Авторские права</a>
                            <a href='https://www.youtube.com/t/contact_us/'>Связаться с нами</a>
                            <a href='https://www.youtube.com/creators/'>Авторам</a>
                            <a href='https://www.youtube.com/ads/'>Рекламодателям</a>
                            <a href='https://developers.google.com/youtube'>Разработчикам</a>
                        </div>
                        <div className='content-section-with-links-and-copyright'>
                            <a href='https://www.youtube.com/t/terms'>Условия использования</a>
                            <a href='https://www.youtube.com/t/privacy'>Конфиденциальность</a>
                            <a href='https://www.youtube.com/about/policies/'>Правила и безопасность</a>
                            <a href='https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen'>Как работает YouTube</a>
                            <a href='https://www.youtube.com/new'>Тестирование новых функций</a>
                            <p className='copyright-text-styling'>© 2024 Google LLC Youtube, компания Google</p>
                        </div>
                    </div>
                </div> :
                <div style={{ width: 60 }} className='left-menu closed-menu'>
                    <MenuButton title={'Главная'} />
                    <MenuButton title={'Shorts'} />
                    <MenuButton title={'Подписки'} />
                    <MenuButton title={'Вы'} />
                </div>
            }
        </>
    );
}

export default LeftMenu;
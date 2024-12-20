import './productcard.css'
import IconBasket from '../../public/icon/icon-basket.svg'
import longsl from '../../public/img/longsl.png'

const ProductCard = () => {
    return (
        <>
            <div className="container">
                <div className="basket-line">
                    <img src={IconBasket} />
                </div>
                <p className='card-button'>Главная  ˙  лонгслив “ВОЛК”</p>
                <div className="card-viewing">
                    <div className="up-viewing">
                        <div className="up-left">
                            <img src={longsl} />
                        </div>
                        <div className="up-right">
                            <p className='txt-upper color-white'>ЛОНГСЛИВ “ВОЛК”</p>
                            <p className='txt-up color-white'> Отправка в течение 7-10 недель.</p>
                            <p className='txt-price color-white'>3990 ₽</p>
                            <p className='txt-size color-white'>Размер:</p>
                            <div className="lineSize-choice">
                                <p className='choice color-white'>S</p>
                                <p className='choice color-white'>M</p>
                                <p className='choice color-white'>L</p>
                                <p className='choice color-white'>XL</p>
                            </div>
                            <button className='bt-order'>Заказать</button>
                        </div>
                    </div>
                </div>
                <div className="description-card">
                    <div className="description-card__block">
                        <div className="description-up"><p className='txt-descr'>Описание:</p></div>
                        <div className="description-down"></div>
                    </div>
                    <div className="description-card__block">
                        <div className="description-up"><p className='txt-descr'>Материал:</p></div>
                        <div className="description-down"></div>
                    </div>
                    <div className="description-card__block">
                        <div className="description-up"><p className='txt-descr'>Рекомендация по уходу:</p></div>
                        <div className="description-down"></div>
                    </div>
                    <div className="description-card__block">
                        <div className="description-up"></div>
                        <div className="description-down"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard
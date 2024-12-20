import "./music.css"
import MusicFace from "../../public/img/music-face.png";
import MusicFaceSmaller from "../../public/img/misicfaceSmaller.png";
import MusicOne from "../../public/img/music1 (12).png";
import MusicTwo from "../../public/img/music1 (11).png";
import MusicThree from "../../public/img/music1 (10).png";
import MusicFour from "../../public/img/music1 (9).png";
import MusicFive from "../../public/img/music1 (8).png";
import MusicSix from "../../public/img/music1 (7).png";
import MusicSeven from "../../public/img/music1 (6).png";
import Musiceight from "../../public/img/music1 (5).png";
import MusicNine from "../../public/img/music1 (4).png";
import MusicTen from "../../public/img/music1 (3).png";
import MusicEleven from "../../public/img/music1 (2).png";
import MusicTwelve from "../../public/img/music1 (1).png";



const Music = ()=>{
    return (
        <>
        <div className="container">
            <div className="album-block">
                <div className="album-left">
                <img src={MusicFace}/>
                </div>
                <div className="album-right">
                    <p className="right-text__album"> альбом «ФУТУРОАРХАИКА»  </p>
                    <p className="right-text__info"> Boulevard Depo заканчивает год с новым альбомом.«Футуроархаика» — это бум-бэп, усложненная музыка и работа с наследием футуристов.  </p>
                    <div className="music-button">
                        <p className="music-text__button"> СЛУШАТЬ </p>
                    </div>
                </div>
            </div>
            <div className="album-showcase">
                <img src={MusicFaceSmaller}/>
                <img src={MusicOne}/>
                <img src={MusicTwo}/>
                <img src={MusicThree}/>
                <img src={MusicFour}/>
                <img src={MusicFive}/>
                <img src={MusicSix}/>
                <img src={MusicSeven}/>
                <img src={Musiceight}/>
                <img src={MusicNine}/>
                <img src={MusicTen}/>
                <img src={MusicEleven}/>
                <img src={MusicTwelve}/>
            </div>
        </div>
        </>
    );
};
export default Music
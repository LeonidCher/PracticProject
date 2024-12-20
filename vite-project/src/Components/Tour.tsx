import './tour.css'
import Accordion from './accordion'

const Tour = ()=>{
    return (
        <>
        <div className="container">
            <p className="mainTitle">Россия тур 2025</p>
            <div className="txtTitles">
                <p className="txtTitle txtTitle_1">дата</p>
                <p className="txtTitle txtTitle_2">город</p>
                <p className="txtTitle txtTitle_3">место</p>
                <p className="txtTitle txtTitle_4">время</p>
            </div>
           <div className="tourAccordions">
            <Accordion date="28.02" city="ульяновск" place="Premio Centre" time="20:00"></Accordion>
            <Accordion date="01.03" city="казань" place="Werk" time="20:00"></Accordion> 
            <Accordion date="07.03" city="саратов" place="Клуб Onyx" time="20:00"></Accordion> 
            <Accordion date="08.03" city="самара" place="Сигнал" time="20:00"></Accordion> 
            <Accordion date="01.03" city="казань" place="Werk" time="20:00"></Accordion> 
            <Accordion date="07.03" city="саратов" place="Клуб Onyx" time="20:00"></Accordion> 


           </div>
        </div>
        </>
    )
}
export default Tour
import './tour.css'
import iconVK from '../../public/icon/vkBlack.png'
import React, { useState } from "react";
interface Data {
    id: number
}
const data : Data = {
    id: 0
}
const hiddenAccordion = (a) => {
    // console.log(a)
    // const hiddenAccordion = document.querySelectorAll('.hiddenAccordion')
    // const accordion = document.querySelectorAll('.tourAccardion')
    // hiddenAccordion[0].classList.toggle('hiddenAccordionOpen')
    // accordion.forEach((el, index) => {
    //     console.log(el, index, )
    // });

    
    
    // hiddenAccordion?..classList.toggle('hiddenAccordionOpen')
    // if(hiddenAccordion?.classList.contains('hiddenAccordionOpen')) {
    //     accordion?.classList.add('hiddenAccordionItemOpen')
    // }else{
    //     accordion?.classList.remove('hiddenAccordionItemOpen')
    // }
    
}

const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
             <div className="tourAccardion" onClick={() => setIsOpen(!isOpen)} key={data.id}>
                <div className={isOpen ? "tourAccardionItem tourAccardionItemOpen" : "tourAccardionItem"}>
                <p className="txtTitle txtTitle_1">{props.date}</p>
                <p className="txtTitle txtTitle_2">{props.city}</p>
                <p className="txtTitle txtTitle_3">{props.place}</p>
                <p className="txtTitle txtTitle_4">{props.time}</p>
                </div>
                {isOpen && (<div className="hiddenAccordionWrap">
                    <div className="hiddenAccordion">
                        <button className="accordionBtn">купить билет</button>
                        <img src={iconVK} alt="" style={{width: '40px', height: '40px'}} />
                    </div>
                </div>)}
                {/* <div className="hiddenAccordionWrap">
                    <div className="hiddenAccordion">
                        <button className="accordionBtn">купить билет</button>
                        <img src={iconVK} alt="" style={{width: '40px', height: '40px'}} />
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default Accordion
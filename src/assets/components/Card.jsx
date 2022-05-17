import React, { useState } from "react";

export default function Card(props) {
    const [selected, setSelected] = useState(false);

    const handleChange = () => {
        setSelected(!selected);
    }

    return (
        <div className={"item " + (selected ? "selected" : "")} onClick={handleChange}>
            <div className={props.colorItem}>
                <h2 className="title">Безлимитный {props.nameTariff}</h2>
            </div>
            <div className={props.colorShell}>
                <div className="tariff" >
                    <span className="text1">руб</span>
                    <h3 className="nameTariff">{props.nameTariff}</h3>
                    <span className="text2"> /мес</span>
                </div>
            </div>
            <p className="rate">до {props.rate} Мбит/сек</p>
            <p className="details">Объем включенного трафика не ограничен</p>
        </div>
    )
}


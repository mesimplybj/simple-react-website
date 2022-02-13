import React from 'react'

export default function CounterList({counterList}) {
    return (
        <>
            {
                counterList.map((counter, index) =>
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <span className="ico-circle"><i className={counter.Icon}></i></span>
                            </div>
                            <div className="counter-num">
                                <p data-purecounter-start="0" data-purecounter-end="450" data-purecounter-duration="1" className="counter purecounter">{counter.Value}</p>
                                <span className="counter-text">{counter.Text}</span>
                            </div>
                        </div>
                    </div>
                )}
        </>

    )
}

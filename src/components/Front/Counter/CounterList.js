import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function CounterList({ counterList }) {
    return (
        <>
            {
                counterList?.map((counter, index) =>
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <span className="ico-circle"><i className={counter.icon}></i></span>
                            </div>
                            <div className="counter-num">
                                <CountUp end={counter.value} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <p className="counter purecounter" ref={countUpRef} ></p>
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <span className="counter-text">{counter.text}</span>
                            </div>
                        </div>
                    </div>
                )}
        </>

    )
}

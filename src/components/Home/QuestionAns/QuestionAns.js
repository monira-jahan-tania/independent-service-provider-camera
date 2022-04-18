import React from 'react';
import { Accordion } from 'react-bootstrap';
import FAQ from '../../../images/qesAns/FAQ.jpg';
import './QuestionAns.css';

const QuestionAns = () => {
    return (
        <div id='FAQ' className='container'>
            <h1 className="d-flex justify-content-center text-secondary mt-5">Frequently Asked Questions</h1>
            <div style={{ height: "2px" }} className='bg-secondary w-2 my-4'></div>
            <div className='ques-ans'>
                <div className='q/a'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <h3>What’s the difference between event design and
                                event planning?</h3> </Accordion.Header>
                            <Accordion.Body>
                                <p>Event design and event planning work hand in hand to deliver a
                                    successful event.Events by Knight offer tailor made events. This
                                    means we incorporate both event design and event planning to
                                    create that perfect event</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> <h3>How early do we need to start planning an event?</h3> </Accordion.Header>
                            <Accordion.Body>
                                <p>We start our decoration including our food
                                    making from the you order according to free time.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> <h3>What is your refund and cancellation policy?</h3> </Accordion.Header>
                            <Accordion.Body>
                                <p>If anyone want to take refund, he or she has to tell at least 5/6 days ago.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='ques-ans-image'>
                    <img src={FAQ} alt="" />
                </div>
            </div>
        </div>
    );
};

export default QuestionAns;
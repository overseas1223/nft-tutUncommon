import React, { useState } from 'react';
import Question from "./Question";
import Cat from "../../assets/ancient_downground.gif";

const questions = [
    {
        title: "What is the total supply of Tutuncommon (TUT)?",
        description: 'There are a total of 5555 unique Tutuncommon on the cornos blockchian.'
    },
    {
        title: "How many can I buy in one transaction?",
        description: 'You can buy 10 TUT in one transaction'
    },
    {
        title: "How many traits does TUT have?",
        description: 'Eact TUT consists of distinct 10 traits.'
    },
    {
        title: "What is the minting cost of TUT?",
        description: 'Buying an TUT costs 380 CRO + any gas fees.'
    },
    {
        title: "Does the collection contain any rare TuTuncommons?",
        description: 'Yes, we have some rare and some super rare TUTs in the collection.'
    },
    {
        title: "What is the contract address of the TUT?",
        description: 'Yes, we have some rare and some super rare TUTs in the collection.'
    },
    {
        title: "What is the Ebisu's Bay collection slug of the TUT?",
        description: 'TutunCommon'
    }
]

const Faq = () => {
    const [index, setIndex] = useState(-1);
    return (
        <div id="faq">
            <h2>Frequently Asked Questions</h2>

            <h6>Commonly asked questions abut TUT</h6>
            <div>
                <div className='row'>
                    <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
                        {questions.map((question, i) => (
                            <Question
                                key={i}
                                title={question.title}
                                description={question.description}
                                isClicked={index === i ? true : false}
                                handleClick={ () => { setIndex(i) } }
                            />
                        ))}
                    </div>
                    <div className="col-lg-6 col-md-6" id='OwnerImage'>
                        <img src={Cat} alt="ancient cat" style={{ width: '100% ', borderRadius: '50%' }} />
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Faq;
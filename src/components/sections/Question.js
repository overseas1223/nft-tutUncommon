import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Question = ({ title, description, isClicked, handleClick }) => {
    return (
        <div id="Question" onClick={handleClick}>
            <div>
                <div>
                    <div className={isClicked ? "d-flex p-3 bg-danger text-white hover1" : "d-flex p-3 mb-2 bg-danger text-white hover1"}>
                        <span className='me-5'>
                            {
                                isClicked === true ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowRight} />
                            }
                        </span>
                        <h5>{title}</h5>
                    </div>

                    {isClicked === true &&
                        <h5 className='p-3 mb-2 bg-light'>{description}</h5>
                    }
                </div>

            </div>


        </div>
    )
}
export default Question;
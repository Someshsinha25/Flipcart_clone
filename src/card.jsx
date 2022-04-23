import React from 'react'
import './card.css'
function Card(props) {

    const { title, imageSrc, rating, specifications, price, discount, deliveryDate, offer, bankOffer, star } = props.cardDetails;
    return (
        <div className='whole'>
            <div className='imag'>
                <img src={imageSrc} alt="non" />
            </div>
            <div className='information'>
                <div className='specification'>
                    <div className='tt'>{title}</div>
                    
                    <div><span className='star'>{star}</span> <span className='rat'>{rating}</span></div>
                    <div>

                        <ul>
                            {specifications.map((item) => (
                                <li >
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <div className='price'>
                    <div className='pi'>{price}</div>
                    <div>
                    <del className='dee'>{discount}</del>
                        
                        </div>
                    <div>Free delivery by <strong>{deliveryDate}</strong></div>
                    <div>Upto <strong>{offer}</strong> off on Exchange</div>
                    <div className='bankoff' >
                        <strong> {bankOffer}</strong>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Card
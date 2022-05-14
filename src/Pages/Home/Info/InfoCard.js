import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div >
            <div class={`card lg:card-side bg-base-100 shadow-xl px-2 text-white ${bgClass}` }>
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
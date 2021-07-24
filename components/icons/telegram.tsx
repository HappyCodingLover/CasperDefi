import React from 'react';

interface IconProps {
    color: string;
}

const Telegram: React.FC<IconProps> = ({ color }) => {
    return <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.93101 12.3822L7.59916 19.0591C7.78138 19.5212 8.38009 19.6448 8.73151 19.2934L11.9723 16.0525L17.9269 20.7902C18.3239 21.109 18.9161 20.9008 19.0332 20.4062L23.4259 1.52084C23.5496 0.974188 23.0159 0.512139 22.4953 0.720385L0.707502 9.46675C0.128316 9.70102 0.128322 10.5275 0.714016 10.7553L4.93101 12.3822ZM3.52534 9.88324L14.7576 5.3734L5.41258 11.0221L3.52534 10.2867C3.34312 10.2216 3.33662 9.96133 3.52534 9.88324ZM16.8531 5.7964L9.05689 12.9288L8.11978 16.4625L6.38222 12.1284L16.8531 5.7964ZM9.63608 16.3454L10.1111 14.5623L10.84 15.1415L9.63608 16.3454ZM17.6275 18.7012L10.801 13.2738L21.4801 3.49918L17.9724 18.571C17.9399 18.7402 17.7577 18.8053 17.6275 18.7012Z" fill={color} />
    </svg>
}

export default Telegram;
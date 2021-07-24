import React from 'react';

interface IconProps {
    color: string;
}

const Discord: React.FC<IconProps> = ({ color }) => {
    return <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.0221 2.62285C19.8919 0.280072 16.9179 0.345149 16.9179 0.345149L16.6121 0.690057C20.3019 1.8224 22.02 3.44933 22.02 3.44933C19.7618 2.21286 17.5492 1.60114 15.4862 1.36686C13.9244 1.19115 12.4211 1.2367 11.1 1.41241C10.9699 1.41241 10.8593 1.43194 10.7291 1.45797C9.9677 1.52304 8.126 1.80288 5.79625 2.82459C4.9958 3.19553 4.51423 3.45583 4.51423 3.45583C4.51423 3.45583 6.31686 1.7378 10.228 0.611967L10.0132 0.351658C10.0132 0.351658 7.03922 0.286581 3.90901 2.62936C3.90901 2.62936 0.778809 8.29757 0.778809 15.2868C0.778809 15.2868 2.60096 18.4366 7.40365 18.5863C7.40365 18.5863 8.20411 17.6101 8.86139 16.7836C6.10212 15.9571 5.06087 14.2196 5.06087 14.2196C5.06087 14.2196 5.27564 14.3693 5.6661 14.5905C5.68563 14.61 5.71164 14.6361 5.75069 14.6556C5.81576 14.7012 5.88085 14.7207 5.94593 14.7662C6.48607 15.0721 7.03272 15.3064 7.53381 15.5016C8.42537 15.8465 9.48613 16.1979 10.7291 16.4322C12.356 16.7381 14.2693 16.8422 16.3517 16.4517C17.3735 16.276 18.4147 15.9767 19.5015 15.5211C20.2629 15.2413 21.1089 14.8248 22.0004 14.2391C22.0004 14.2391 20.9137 16.0222 18.0698 16.8227C18.7206 17.6491 19.5015 18.5797 19.5015 18.5797C24.2977 18.4301 26.1459 15.2803 26.1459 15.2803C26.1459 8.29106 23.0221 2.62285 23.0221 2.62285ZM9.40152 13.2629C8.18458 13.2629 7.1889 12.1762 7.1889 10.8551C7.1889 9.53403 8.16506 8.44725 9.40152 8.44725C10.638 8.44725 11.6402 9.53403 11.6141 10.8551C11.6206 12.1762 10.6445 13.2629 9.40152 13.2629ZM17.3279 13.2629C16.111 13.2629 15.1153 12.1762 15.1153 10.8551C15.1153 9.53403 16.0914 8.44725 17.3279 8.44725C18.5644 8.44725 19.5405 9.53403 19.5405 10.8551C19.5405 12.1762 18.5709 13.2629 17.3279 13.2629Z" fill={color} />
    </svg>

}

export default Discord;
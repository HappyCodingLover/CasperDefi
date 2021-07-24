import React from 'react';
import Discord from '../icons/discord';
import Medium from '../icons/medium';
import Twitter from '../icons/twitter';
import Telegram from '../icons/telegram';

interface SocialButtonProps {
    icon: 'discord' | 'medium' | 'twitter' | 'telegram';
    theme: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, theme }) => {
    const colors: any = {
        light: {
            color: '#786394',
            backgroundColor: '#786394',
        },

        dark: {
            color: '#ffffff',
            backgroundColor: '#1D0E31',
        }
    }

    const [hover, setHover] = React.useState(false);

    return <div className="component-social-button" onPointerEnter={() => { setHover(true) }} style={{ backgroundColor: hover ? 'white' : colors[theme].backgroundColor }} onPointerLeave={() => { setHover(false); }}>
        {icon === 'discord' && <Discord color={hover ? colors[theme].backgroundColor : 'white'} />}
        {icon === 'medium' && <Medium color={hover ? colors[theme].backgroundColor : 'white'} />}
        {icon === 'twitter' && <Twitter color={hover ? colors[theme].backgroundColor : 'white'} />}
        {icon === 'telegram' && <Telegram color={hover ? colors[theme].backgroundColor : 'white'} />}
    </div>
}

export default SocialButton;
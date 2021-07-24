import React from 'react';

interface IconProps {
    color: string;
}

const Medium: React.FC<IconProps> = ({ color }) => {
    return <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.14122 3.73843C3.16725 3.50415 3.07615 3.27638 2.90044 3.11369L1.12384 0.972654V0.653778H6.64237L10.9114 10.0119L14.6599 0.653778H19.9246V0.972654L18.4018 2.43038C18.2716 2.528 18.2066 2.6972 18.2326 2.85989V13.5716C18.2066 13.7343 18.2716 13.897 18.4018 13.9946L19.8855 15.4523V15.7712H12.4147V15.4523L13.9505 13.962C14.1002 13.8124 14.1002 13.7668 14.1002 13.539V4.88379L9.82464 15.7452H9.24545L4.26705 4.88379V12.1659C4.22801 12.4718 4.32563 12.7776 4.54039 12.9989L6.53825 15.4263V15.7452H0.863525V15.4263L2.8614 12.9989C3.07615 12.7776 3.17376 12.4653 3.1217 12.1659C3.14122 12.1529 3.14122 3.73843 3.14122 3.73843Z" fill={color} />
    </svg>
}

export default Medium;
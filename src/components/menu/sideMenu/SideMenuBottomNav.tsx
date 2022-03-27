import React from 'react';


const social = [
    {
        text: 'Youtube',
        href: 'https://www.youtube.com'
    },
    {
        text: 'Telegram',
        href: 'https://web.telegram.org'
    },
    {
        text: 'Instagram',
        href: 'https://www.instagram.com'
    },
    {
        text: 'VK',
        href: 'https://vk.com'
    }
]


const SideMenuBottomNav = () => {
    return (
        <>
            {social.map((item) =>
                <div key={item.text} className={'sideMenu-item'}>
                    <div className={'sideMenu-bottom'}>
                        <button>
                            <a href={item.href}>{item.text}</a>
                        </button>
                    </div>
                </div>
            )}

        </>
    );
};

export default SideMenuBottomNav;
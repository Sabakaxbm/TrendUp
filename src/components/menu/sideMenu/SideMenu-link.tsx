import React, {FC, SVGProps} from 'react';

interface SideMenuLinkProps {
    SomeComponent: React.FC<SVGProps<SVGSVGElement>>;
    text: string,
}


const SideMenuLink: FC<SideMenuLinkProps> = ({SomeComponent, text}) => {
    return (
        <button className={'sideMenu-link'}>
            <div className={'sideMenu-link-container'}>
                <SomeComponent className={'sideMenu-icon'}/>
                {text}
            </div>
        </button>
    );
};

export default SideMenuLink;
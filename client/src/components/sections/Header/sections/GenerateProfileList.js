import React from "react";
import GenerateLi from './GenerateLi';

const generateMyProfileList = (language,link) => {
    const context = { language, link}
    const li = [
        {"to": "/profile/", "onChangeLink": "profile", "ClassName" : "profile", "textFromObject" : "header_my_profile"},
        {"to": "/order/", "onChangeLink": "order", "ClassName" : "order", "textFromObject" : "header_my_orders"},
        {"to": "/sign_in/", "onLogoutHandle": "sign_out", "ClassName" : "order", "textFromObject" : "header_sign_out"},
    ]
    return (
        <div className='flexible_my_profile'>
            <div className='arrow_modal'>
            </div>
            <ul className="flexible vertical jStart aCCenter my_profile_list">
                <GenerateLi context={context} liArray={li}/>
            </ul>
        </div>
    )
}
export default generateMyProfileList;
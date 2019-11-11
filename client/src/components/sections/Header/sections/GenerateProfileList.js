import React from "react";
import GenerateLi from './GenerateLi';

const generateMyProfileList = (language,link) => {
    const li = [
        {"to": "/profile/" + language, "onChangeLink": "profile", "ClassName" : "profile", "textFromObject" : "header_my_profile"},
        {"to": "/order/" + language, "onChangeLink": "order", "ClassName" : "order", "textFromObject" : "header_my_orders"},
        {"to": "/sign_out/" + language, "onLogoutHandle": "sign_out", "ClassName" : "order", "textFromObject" : "header_sign_out"},
    ]
    return (
        <div className='flexible_my_profile'>
            <div className='arrow_modal'>
            </div>
            <ul className="flexible vertical jStart aCCenter my_profile_list">
                <GenerateLi liArray={li} language={language} link={link}/>
            </ul>
        </div>
    )
}
export default generateMyProfileList;
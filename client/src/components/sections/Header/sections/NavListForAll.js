import React, { Component } from "react";
import GenerateLi from "./GenerateLi";
import GuestAndAuthLinks from "./GuestAndAuthLinks";

class NavListForAll extends Component {
    render() {
        const { context } = this.props;
        const li = [
            { "to": "/",        "onChangeLink": "home",   "ClassName" : "home",    "textFromObject" : "header_home" },
            { "to": "/create/", "onChangeLink": "create", "ClassName" : "create",  "textFromObject" : "header_create" },
            { "to": "/shop/",   "onChangeLink": "shop",   "ClassName" : "shop",    "textFromObject" : "header_shop" },
        ]
        return (
            <ul className="flexible aCenter">
                <GenerateLi context={context} liArray={li} />
                <GuestAndAuthLinks context={context} />
            </ul>
        )
    }
}

export default NavListForAll;
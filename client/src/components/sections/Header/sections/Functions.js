import ReactDOM from "react-dom";

const onChangeLink = (link) => {
    alert(1)
    this.setState({ link: link })
    this.toggleHeader()
}
const onLogoutHandle = (logout) =>  {
    alert(2)
    logout()
}
const handleToggleProfile = (func, isOpenMyProfile) => {
    if (!isOpenMyProfile) {
        // attach/remove event handler
        document.addEventListener('click', this.handleOutsideClick, false);
    } else {
        document.removeEventListener('click', this.handleOutsideClick, false);
    }
    func()
}
const handleOutsideClick = (e) => {
    const node = ReactDOM.findDOMNode(this.nodeProfile);
    // ignore clicks on the component itself
    if (node.contains(e.target)) {
        return;
    }
    this.handleToggleProfile();
}

export {
    onChangeLink,
    onLogoutHandle,
    handleToggleProfile,
    handleOutsideClick
}
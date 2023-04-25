

function Header({ setActiveTab }){
    const handleTabClick = (tab)=>{
        setActiveTab(tab)
    }

    return(
        <div className='header-container'>
            <div className='row'>
                <ul>
                    <li onClick={()=> handleTabClick('get')}><a href="#">Your tasks</a></li>
                    <li onClick={()=> handleTabClick('add')}><a href="#"> Add New Tasks</a></li>
                </ul>
                <ul>
                    <li onClick={()=> handleTabClick('login')}><a href="#">Login/Register</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
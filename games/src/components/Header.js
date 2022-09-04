
import styled from 'styled-components'


import { Link } from 'react-router-dom'

function Header() {
    

    return (
        <Nav>
            <Logo className='logo-header' src= 'https://arkanoid.org/img/logoarkanoid.png' />  
                <>
                    <NavMenu className='nav-menu'>
                        <a>
                            <img src= 'images/home-icon.svg'/> 
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </a>
                        <a>
                            <img src= 'images/home-icon.svg'/> 
                            <Link to="/games_list">
                                <span>Games</span>
                            </Link>
                        </a>
                        
                    </NavMenu>
                    <UserImg className='user-image' src = '/images/gato.jpg'/>

                </>
        </Nav>
    )
}

export default Header;


const Nav = styled.nav`
    height: 45px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding: 0 20px;
    overflow-x: hidden;
    color: white;
    background-color: green;
    margin: 0 0 5px 0;

`

const Logo = styled.img`
    width : 50px;
    
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a {
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;
        text-decoration: none;
        color: white;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            text-transform: uppercase;
            position: relative;

            &:after {
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
                
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
   
`

const UserImg  = styled.img`
    width:42px;
    height : 42px;
    border-radius: 50%;
    cursor:pointer;

`

const Login = styled.div`
    border-radius: 4px;
    border: 1px solid #f9f9f9 ;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
        

    }
`


const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

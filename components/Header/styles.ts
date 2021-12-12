import styled from 'styled-components'
import { MenuOutlined } from '@ant-design/icons'
export const HeaderSection = styled('header')`
  background-color: rgba(26, 26, 26, 0.61);
  padding: 1rem 0.5rem;
  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`

export const LogoContainer = styled('div')`
  display: flex;
`

export const NavLink = styled('div')`
  display: inline-block;
  text-align: center;
`

export const CustomNavLink = styled('div')`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`

export const ContactWrapper = styled('div')<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? '100%' : '110px')};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`

export const Burger = styled('div')`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`

export const NotHidden = styled('div')`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`

export const Menu = styled('h5')`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`

// color: #18216d;
export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.4rem;
  font-weight: 900;
  color: white;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`

export const CustomNavLinkSocial = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 1rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 1rem;
  }
`

export const Label = styled('span')`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`

export const Span = styled('span')`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
  }
`

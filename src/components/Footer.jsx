import { Facebook, Instagram, Pinterest, Twitter, Room, MailOutline, Phone} from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;


const Logo = styled.h1`

`;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display:flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;




const Center = styled.div`
  flex:1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const Right = styled.div`
  flex:1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display:flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 100%;

`;



const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>THRIFTY. </Logo>
          <Description>There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </Description>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook/>
            </SocialIcon >
            <SocialIcon color="E4405F">
              <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest/>
            </SocialIcon>
          </SocialContainer>
      </Left>

      <Center>
            <Title>Useful Links</Title>
            <List>
              <ListItems>Home</ListItems>
              <ListItems>Cart</ListItems>
              <ListItems>Man Fashion</ListItems>
              <ListItems>Woman Fashion</ListItems>
              <ListItems>Accessories</ListItems>
              <ListItems>My Account</ListItems>
              <ListItems>Order Tracking</ListItems>
              <ListItems>Wishlist</ListItems>
              <ListItems>Wishlist</ListItems>
              <ListItems>Terms</ListItems>
            </List>
      </Center>

      <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/> ThrityShop, Aalborg, 9000</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/> +1 234 56 78</ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@thirfty.dev</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>

    </Container>
  )
}

export default Footer

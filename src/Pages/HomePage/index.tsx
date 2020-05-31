import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import {useAuthContext} from '../../Contexts/AuthContext';

const HomePage = () => {
  const {signOut} = useAuthContext();
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => signOut()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>HomePage</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>HomePage</Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>HomePage</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default HomePage;

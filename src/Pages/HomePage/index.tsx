import React, {Component} from 'react';
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

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
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
  }
}

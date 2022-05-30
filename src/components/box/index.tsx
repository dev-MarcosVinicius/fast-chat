import React from 'react';
import {
    Container
} from './styles';

type BoxProps = {
    children: React.ReactNode
}

export default class Box extends React.Component<BoxProps> {
  render() {
    return (
      <Container>
          {this.props.children}
      </Container>
    );
  }
}
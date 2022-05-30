import React from 'react';
import {
    Container,
    Content,
    Operator,
    Customer,
    TextArea,
    SafeArea
} from './styles';
import { ChatInterface } from '../../interfaces/chat.interface';
import { Message } from '../../interfaces/message.interface';

type ChatProps = {
  messages: Message[]
}

export default class Chat extends React.Component<ChatProps> {
  constructor(props: ChatInterface) {
    super(props);
  }

  listMessages() {
    return this.props.messages.map((message) =>
      <Content key={message.id}>
        {
          message.sent_by == 'customer' ? 
          <Customer>{message.content}</Customer> : 
          <Operator>{message.content}</Operator>
        }
      </Content>
    );
  }

  render() {
    return (
      <Container>
        {this.listMessages()}
        <SafeArea>
          <TextArea/>
          <button>Send</button>
        </SafeArea>
      </Container>
    );
  }
}
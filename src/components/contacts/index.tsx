import React from 'react';
import { ContactsInterface } from '../../interfaces/contacts.interface';
import {
    Container,
    ProfileName,
    LastMessage,
    Content
} from './styles';

type ContactsProps = {
  contacts: ContactsInterface[]
}

export default class Contacts extends React.Component<ContactsProps> {
  listContacts() {
    return this.props.contacts.map((contact) =>
      <Content key={contact.id}>
        <ProfileName>
          {contact.name}
        </ProfileName>
        <LastMessage>
          {contact.last_message}
        </LastMessage>
      </Content>
    );
  }

  render() {
    return (
      <Container>
        {this.listContacts()}
      </Container>
    );
  }
}
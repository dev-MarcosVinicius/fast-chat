import React from 'react';
import {
    Container
} from './styles';
import Box from '../box';
import Contacts from '../contacts';
import { ContactsInterface } from '../../interfaces/contacts.interface';

type ContactsProps = {
  contacts: ContactsInterface[]
}

export default class SideBar extends React.Component<ContactsProps> {
  render() {
    return (
      <Container>
        <Box>
          <Contacts contacts={this.props.contacts}/>
        </Box>
      </Container>
    );
  }
}
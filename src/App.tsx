import React from 'react';
import './App.css';
import SideBar from './components/sidebar';
import Chat from './components/chat';
import {
  Container
} from './styles';

export default function App() {
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      content: 'Hello World',
      sent_by: 'operator'
    },
    {
      id: 2,
      content: 'Hello World',
      sent_by: 'customer'
    },
    {
      id: 3,
      content: 'Hello World',
      sent_by: 'operator'
    },
    {
      id: 4,
      content: 'Hello World',
      sent_by: 'operator'
    },
    {
      id: 5,
      content: 'Hello World',
      sent_by: 'customer'
    },
    {
      id: 6,
      content: 'Hello World',
      sent_by: 'customer'
    },
    {
      id: 7,
      content: 'Hello World',
      sent_by: 'customer'
    },
    {
      id: 8,
      content: 'Hello World',
      sent_by: 'operator'
    },
    {
      id: 9,
      content: 'Hello World',
      sent_by: 'operator'
    },
    {
      id: 10,
      content: 'Hello World',
      sent_by: 'operator'
    },
    {
      id: 11,
      content: 'Hello World',
      sent_by: 'operator'
    },
  ]);

  const [contacts, setContacts] = React.useState([
    {
      id: 1,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
    {
      id: 2,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
    {
      id: 3,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
    {
      id: 4,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
    {
      id: 5,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
    {
      id: 6,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
    {
      id: 7,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
    {
      id: 8,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
    {
      id: 9,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
    {
      id: 10,
      name: 'Nome da pessoa',
      last_message: 'Ultima mensagem',
    },
  ]);

  return (
    <Container>
      <SideBar contacts={contacts}/>
      <Chat messages={messages}/>
    </Container>
  );
}
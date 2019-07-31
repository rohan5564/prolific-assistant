import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';

import { StudiesPane } from '../containers/StudiesPane';
import { SettingsPane } from '../containers/SettingsPane';

export function App() {
  const [key, setKey] = useState('studies');

  function onSelect(k: string) {
    setKey(k);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Tab.Container activeKey={key} onSelect={onSelect}>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Studies</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Account</Nav.Link>
          </Nav>
        </Navbar>

        <Tab.Content style={{ flex: 1 }}>
          <StudiesPane />
          <SettingsPane />
        </Tab.Content>

        <Nav className="w-100" style={{ bottom: 0 }} variant="pills">
          <Nav.Item className="text-center w-50">
            <Nav.Link eventKey="studies">Studies</Nav.Link>
          </Nav.Item>
          <Nav.Item className="text-center w-50">
            <Nav.Link eventKey="settings">Settings</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
    </div>
  );
}

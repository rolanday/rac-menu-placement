import {MenuTrigger, Button, Popover, Menu, Item} from 'react-aria-components';

export function HMenu() {
  return (<MenuTrigger>
  <Button aria-label="Menu">☰</Button>
  <Popover placement="right bottom">
    <Menu onAction={(id) => console.log(id)}>
      <Item id="open">Open</Item>
      <Item id="rename">Rename…</Item>
      <Item id="duplicate">Duplicate</Item>
      <Item id="share">Share…</Item>
      <Item id="delete">Delete…</Item>
    </Menu>
  </Popover>
</MenuTrigger>)
}
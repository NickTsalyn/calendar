import data from '../data.json';
import { List, ListItem } from './App.styled';
import { Wrapper } from './Layout.styled';


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const App = () => {
  return (
    <Wrapper>
      <List>
        {data.map(date => {
           const backgroundColor = getRandomColor();
          return (
            <ListItem key={date.id} style={{ background: backgroundColor }}>
              <p>{date.id} Day</p>
              <p>{date.bank}</p>
              <p>{date.payment}$</p>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

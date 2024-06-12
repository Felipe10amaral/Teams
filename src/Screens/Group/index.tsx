import { GroupCard } from '../../Components/GroupCard';
import { Header } from '../../Components/Header';
import { Highlight } from '../../Components/Highlight'
import { Container } from './styles';

export default function Group() {
  return (
    <Container>
      <Header />
      
      <Highlight 
        title='Turmas'
        subTitle='Jogue com seus amigos'
      />

      <GroupCard title='Galera da ITEC' />
     
    </Container>
  );
}


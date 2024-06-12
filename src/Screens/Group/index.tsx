import { Header } from '../../Components/Header';
import { Highlight } from '../../Components/Highlight'
import { Container } from './styles';

export default function Group() {
  return (
    <Container>
      <Header showBackButton/>
      
      <Highlight 
        title='Tufão'
        subTitle='Tamires'
      />
     
    </Container>
  );
}


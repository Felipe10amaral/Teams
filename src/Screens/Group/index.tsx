import { useState } from 'react';
import {FlatList} from 'react-native'
import { GroupCard } from '../../Components/GroupCard';
import { Header } from '../../Components/Header';
import { Highlight } from '../../Components/Highlight'
import { Container } from './styles';
import { Button } from '../../Components/Button';

export default function Group() {
  const [groups, setGroups] = useState<string[]>(['tufão', 'tamires'])

  return (
    <Container>
      <Header />
      
      <Highlight 
        title='Turmas'
        subTitle='Jogue com seus amigos'
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={ ({item}) => (
          <GroupCard title={item} />
        )}
      />

      <Button title='Criar nova turma' />
     
    </Container>
  );
}


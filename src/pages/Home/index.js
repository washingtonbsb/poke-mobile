import React from 'react';
import { StatusBar } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { Container, Text } from './styles';
import GridList from '~/components/GridList';
import { GET_ALL_POKEMONS } from '~/graphql/query';

export default function Home({ navigation }) {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <GridList data={data.pokemons} navigation={navigation} />
    </Container>
  );
}

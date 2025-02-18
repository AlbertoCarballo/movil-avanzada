import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react'; 

export default function App() {
  const [pokemonList, setPokemonList] = useState([]); 
  const [filteredPokemonList, setFilteredPokemonList] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedPokemons, setSelectedPokemons] = useState({}); 

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1304')
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results); 
        setFilteredPokemonList(data.results);
      })
      .catch((error) => console.error('Error fetching Pokémon list:', error));
  }, []);

  const handleCheckboxToggle = (pokemonName) => {
    setSelectedPokemons((prevState) => ({
      ...prevState,
      [pokemonName]: !prevState[pokemonName],
    }));
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredData = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPokemonList(filteredData);
  };

  const renderPokemonItem = ({ item }) => (
    <View style={styles.pokemonContainer}>
      <TouchableOpacity onPress={() => handleCheckboxToggle(item.name)} style={styles.checkboxContainer}>
        <View style={selectedPokemons[item.name] ? styles.checkboxChecked : styles.checkboxUnchecked} />
      </TouchableOpacity>
      <Text style={styles.pokemonName}>{item.name.toUpperCase()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cabecera}>PokePhone</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Pokémon"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredPokemonList}
        keyExtractor={(item) => item.name}
        renderItem={renderPokemonItem} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  cabecera: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  searchInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
  },
  pokemonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  pokemonName: {
    fontSize: 24,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginLeft: 20,
  },
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxUnchecked: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#333',
    marginRight: 10,
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    backgroundColor: '#007AFF',
    marginRight: 10,
  },
});

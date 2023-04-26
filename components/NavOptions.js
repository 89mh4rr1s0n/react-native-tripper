import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatScreen',
  },
]

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList style={styles.container}
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.listItem}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={styles.itemText}>{item.title}</Text>
            <Feather
              style={styles.rightArrow}
              name="arrow-right"
              size={24}
              color="white" />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    paddingHorizontal: 20
  },
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#e5e7eb'
  },
  itemText: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center'
  },
  rightArrow: {
    backgroundColor: 'black',
    margin: 'auto',
    borderRadius: 100,
    padding: 5,
    marginVertical: 5
  }
})
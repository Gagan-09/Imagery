import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import ImageItem from './ImageItem';

const Images = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState('');

  const fetchImages = async () => {
    console.log('Fetching images...');
    setLoading(true);
    try {
      const response = await axios.get(
        // 'https://jsonplaceholder.typicode.com/photos?_limit=20',
        'https://picsum.photos/v2/list?page=2&limit=${num}',
      );
      setImages(response.data);
      // setNum('');
    } catch (error) {
      console.error('Failed to fetch images:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Text style={styles.imgGal}>IMAGE GALLERY</Text>
      </View>
      <TextInput
        // value={num}
        placeholder="Enter the number of images: "
        onChangeText={e => setNum(e)}
        style={styles.input}
      />
      <TouchableOpacity onPress={fetchImages} style={styles.button}>
        <Text style={styles.buttonText}>Fetch Images</Text>
      </TouchableOpacity>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={images}
          renderItem={({item}) => <ImageItem image={item} />}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  loadingText: {
    textAlign: 'center',
    margin: 20,
  },
  imgGal: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    color: '#000',
  },
  imgView: {
    backgroundColor: 'yellow',
    margin: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'red',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 20,
    fontSize: 18,
  },
});
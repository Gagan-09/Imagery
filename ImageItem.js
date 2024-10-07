import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const ImageItem = ({image}) => {
  // ------------------------------------xx----------------
  //   const [thumbnailUrl, setThumbnailUrl] = useState(image.thumbnailUrl);
  //   const [url, setUrl] = useState(image.thumbnailUrl);

  //   useEffect(() => {
  //     const randomId1 = Math.floor(Math.random() * 1000); // Random number for uniqueness
  //     // const randomId2 = Math.floor(Math.random() * 1000); // Random number for uniqueness
  //     // setThumbnailUrl(https://picsum.photos/200/150?random=${randomId1});
  //     // setUrl(https://picsum.photos/150/150?random=${randomId2});
  //   }, []);

  //   const thumbnailUrl = image.download_url;
  //   return (
  //     <View style={styles.container}>
  //       {/* <Image source={{uri: thumbnailUrl}} style={styles.thumbnail} /> */}
  //       <Image source={{uri: image.url}} style={styles.thumbnail} />
  //       <Text style={{fontSize: 20}}>Image id: {image.id}</Text>
  //       {/* <Text style={styles.title}>{image.title}</Text> */}
  //       <Text style={styles.title}>{image.author}</Text>
  //       {/* <Image source={{uri: url}} style={styles.thumbnail} /> */}
  //     </View>
  //   );
  // ----------------------------------------------------------xx---------

  const thumbnailUrl = image.download_url;
  return (
    <View style={styles.container}>
      <Image source={{uri: thumbnailUrl}} style={styles.thumbnail} />
      <Text style={{fontSize: 20}}>Image id: {image.id}</Text>
      <Text style={styles.title}>{image.author}</Text>
    </View>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 3,
    padding: 10,
  },
  thumbnail: {
    width: 250,
    height: 200,
    marginBottom: 10,
  },
});

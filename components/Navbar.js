import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Navbar=({ navigation })=> {
  return (
    <View style={styles.container}>
      <View style={styles.camera}>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <Image source={require('../assets/camera.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      <View style={styles.navbar}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/home.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
            <Image source={require('../assets/blogs.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image source={require('../assets/profile.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity  onPress={() => navigation.navigate('Settings')}>
            <Image source={require('../assets/settings.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  camera:{
    width:60,
    borderWidth: 1,
    zIndex:1,
    position:'relative',
    bottom:-25,
    borderRadius:100,
    height:60,
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderColor:'#a2aa7b',
    backgroundColor:'white'
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#a2aa7b',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: '#a2aa7b',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderColor: 'darkgreen',
    borderRadius: 3,
  },
});

export default Navbar;

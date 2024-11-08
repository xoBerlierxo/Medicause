import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

function Blogs({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Card
          title="Unveiling a Personalized Path to getting a Good healthcare"
          description="Dive into the world of AI-powered haelth analysis, explore how it personalizes your healthcare routine, and..."
          imageSource={require('../assets/blog1.webp')}
        />
        <Card
          title="How AI Healthcare Apps provide better and quicker alternate."
          description="Unravel the science behind AI Health analysis, uncover hidden concerns beneath the surface, and..."
          imageSource={require('../assets/blog2.jpg')}
        />
        <Card
          title="My Journey with AI-Driven Healthcare"
          description="After using its dietary plans, I was able to plan my routine for my Dream physique✨- says one customer"
          imageSource={require('../assets/blog3.png')}
        />
      </ScrollView>
    
    <Navbar navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 60, 
  },
});

export default Blogs;

import React, { useRef, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ScrollView } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const NonAutomaticCarousel = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      image: require('.././assets/skin.jpg'),
      heading: 'Your Personalised Skincare AI',
      text: 'Get expert guidance with AI skin analysis & customized routines.',
    },
    {
      image: require('.././assets/skin.jpg'),
      heading: 'Struggling with breakouts or dryness?',
      text: 'Get personalized solutions to achieve your skin goals.',
    },
    {
      image: require('.././assets/skin.jpg'),
      heading: 'Join #Medicause:',
      text: 'See amazing skincare transformations from our community.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      scrollViewRef.current.scrollTo({ x: nextIndex * screenWidth, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); 
    
    return () => clearInterval(interval); 
  }, [currentIndex, data.length]);

  const renderItem = (item, index) => {
    return (
      <View style={styles.slide} key={index}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.para}>{item.text}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      {data.map((item, index) => renderItem(item, index))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: screenWidth,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
  },
  heading: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
  para: {
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default NonAutomaticCarousel;

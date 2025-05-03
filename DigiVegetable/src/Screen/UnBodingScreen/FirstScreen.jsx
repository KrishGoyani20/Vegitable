import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import Images from '../../Image/Index';

const FirstScreen = ({navigation}) => {
  const currentStep = useRef(0);
  const [showContent, setShowContent] = useState(false);
  const [refresh, setRefresh] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentStep.current < 2) {
      currentStep.current += 1;
      setRefresh(prev => !prev);
    } else {
      navigation.navigate('SecondScreen');
    }
  };

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {[0, 1, 2].map(index => (
        <View
          key={index}
          style={[
            styles.dot,
            currentStep.current === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );

  const renderStepContent = () => {
    switch (currentStep.current) {
      case 0:
        return (
          <>
            <Image style={styles.image} source={Images.F1Img} />
            <Text style={styles.text}>
              Find the item you’ve been looking for
            </Text>
            <Text style={styles.textsecond}>
              Rich varieties of goods, carefully classified for seamless
              browsing.
            </Text>
          </>
        );
      case 1:
        return (
          <>
            <Image style={styles.image} source={Images.F2Img} />
            <Text style={styles.text}>Get those shopping bags filled</Text>
            <Text style={styles.textsecond}>
              Add items to cart or wishlist so you don’t miss them later.
            </Text>
          </>
        );
      case 2:
        return (
          <>
            <Image style={styles.image} source={Images.F3Img} />
            <Text style={styles.text}>Fast & secure payment</Text>
            <Text style={styles.textsecond}>
              Multiple payment options for your convenience.
            </Text>
          </>
        );
      default:
        return null;
    }
  };

  if (!showContent) {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

        <Image style={styles.logoImage} source={Images.Logo} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <TouchableOpacity
        style={styles.skip}
        onPress={() => navigation.navigate('SignInFirstScreen')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.contentWrapper}>{renderStepContent()}</View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {renderDots()}
        <Pressable style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skip: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  skipText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#424242',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  logoImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginRight: 30,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  textsecond: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  bottomNav: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00D642',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    width: 16,
    height: 10,
    borderRadius: 12,
    backgroundColor: '#00D642',
    alignSelf: 'center',
  },
});

// const renderStepContent = () => {
//   switch (currentStep.current) {
//     case 0:
//       return (
//         <>
//           <Image style={styles.image} source={Images.F1Img} />
//           <Text style={styles.text}>
//             Find the item you’ve been looking for
//           </Text>
//           <Text style={styles.textsecond}>
//             Here you’ll see rich varieties of goods, carefully classified for
//             seamless browsing experience.
//           </Text>
//           <Pressable style={styles.button} onPress={handleNext}>
//             <Text style={styles.buttonText}>Next</Text>
//           </Pressable>
//         </>
//       );
//     case 1:
//       return (
//         <>
//           <Image style={styles.image} source={Images.F2Img} />
//           <Text style={styles.text}>Get those shopping bags filled</Text>
//           <Text style={styles.textsecond}>
//             Add any item you want to your cart, or save it on your wishlist,
//             so you don’t miss it in your future purchases.
//           </Text>
//           <Pressable style={styles.button} onPress={handleNext}>
//             <Text style={styles.buttonText}>Next</Text>
//           </Pressable>
//         </>
//       );
//     case 2:
//       return (
//         <>
//           <Image style={styles.image} source={Images.F3Img} />
//           <Text style={styles.text}>Fast & secure payment</Text>
//           <Text style={styles.textsecond}>
//             There are many payment options available for your ease.
//           </Text>
//           <Pressable style={styles.button} onPress={handleContinue}>
//             <Text style={styles.buttonText}>Next</Text>
//           </Pressable>
//         </>
//       );
//     default:
//       return null;
//   }
// };

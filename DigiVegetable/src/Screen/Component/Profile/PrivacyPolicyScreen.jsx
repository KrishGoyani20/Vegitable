import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Images from '../../../Image/Index';

const PrivacyPolicyScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const privacyPolicyData = [
      {
        id: 1,
        title: 'Data Collection',
        description:
          'Clearly specify what personally identifiable information (PII) is collected, such as names, email addresses, phone numbers, and payment information.',
      },
      {
        id: 2,
        title: 'Data Usage',
        description:
          'Explain how the collected data will be used, including purposes like order processing, customer service, and marketing communications.',
      },
      {
        id: 3,
        title: 'Data Sharing',
        description:
          'Disclose any third parties with whom data may be shared, including payment processors and marketing partners.',
      },
      {
        id: 4,
        title: 'User  Rights',
        description:
          'Inform users about their rights to access, modify, or delete their personal data, as well as how they can opt out of data collection.',
      },
      {
        id: 5,
        title: 'Data Security',
        description:
          'Describe the measures taken to protect user data, such as encryption and secure storage practices.',
      },
      {
        id: 6,
        title: 'Cookies and Tracking',
        description:
          'Include information on the use of cookies and other tracking technologies, detailing how they enhance user experience and how users can manage their preferences.',
      },
      {
        id: 7,
        title: 'Policy Updates',
        description:
          'State how users will be notified of changes to the privacy policy and include the date of the last update.',
      },
      {
        id: 8,
        title: 'Contact Information',
        description:
          'Provide clear contact details for users to reach out with questions or concerns regarding the privacy policy.',
      },
      {
        id: 9,
        title: 'Legal Compliance',
        description:
          'Ensure the policy complies with local and international laws, such as GDPR in Europe or CCPA in California, which may impose specific obligations on data handling.',
      },
      {
        id: 10,
        title: 'Industry Norms',
        description:
          "Research competitors' privacy policies to understand common practices and ensure your policy meets industry standards.",
      },
      {
        id: 11,
        title: 'Visibility and Accessibility',
        description:
          'Make the privacy policy easily accessible on your website, typically linked in the footer and during data collection processes, such as sign-up forms.',
      },
      {
        id: 12,
        title: 'Clear Language',
        description:
          'Write the policy in clear, straightforward language to ensure it is understandable to the average user, avoiding excessive legal jargon.',
      },
    ];

    setData(privacyPolicyData);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}>
            <Image style={styles.LFImage} source={Images.LF} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Privacy Policy</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    width: '100%',
    minHeight: 50,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftIcon: {
    width: 35,
    height: 35,
    backgroundColor: '#F2F2F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  LFImage: {width: 30, height: 30},
  headerText: {
    flex: 1,
    marginRight: 22,
    fontSize: 24,
    fontWeight: 600,
    color: '#06060F',
    textAlign: 'center',
  },
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
});

export default PrivacyPolicyScreen;

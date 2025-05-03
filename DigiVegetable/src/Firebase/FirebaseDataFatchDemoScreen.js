import { useState, useEffect } from 'react';
import { getFirestore } from '@react-native-firebase/firestore';
import { StyleSheet, Text, View } from 'react-native';

const FirebaseDataFetchDemoScreen = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);  // State for error handling

    useEffect(() => {
        getDataBaseCollections(); // Call function to fetch data
    }, []);

    const getDataBaseCollections = async () => {
        try {
            const docRef = getFirestore().collection('Users').doc('a1b1c1'); // Specify your collection and document ID
            const doc = await docRef.get();  // Fetch the document

            if (doc.exists) {
                console.log('Document data:', doc.data());
                setData(doc.data()); // Set data in state if document exists
            } else {
                console.log('No such document!');
                setError('No such document!');  // If document doesn't exist, set error state
            }
        } catch (err) {
            console.error('Error fetching document:', err);
            setError('Error fetching data');  // If there is any error, set error state
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Firebase Data Fetch Demo</Text>

            {error && <Text style={styles.errorText}>{error}</Text>}

            {data ? (
                <View style={styles.dataContainer}>
                    {Object.entries(data).map(([key, value]) => (
                        <Text key={key} style={styles.dataText}>{key}: {value}</Text>
                    ))}
                </View>
            ) : (
                <Text style={styles.loadingText}>Loading...</Text>
            )}
        </View>
    );
};

export default FirebaseDataFetchDemoScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    dataContainer: {
        marginTop: 20,
        padding: 10,
    },
    dataText: {
        fontSize: 16,
        marginBottom: 5,
    },
    loadingText: {
        fontSize: 18,
        color: 'gray',
    },
    errorText: {
        fontSize: 16,
        color: 'red',  // Display error text in red color
        marginBottom: 20,
    },
});


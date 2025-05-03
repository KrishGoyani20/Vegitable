import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app';  // Import firebase

const FirebaseDemoNavigation = () => {

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

    useEffect(() => {
        // Initialize Firebase if it hasn't been initialized yet
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDbhAvkxjnKw5saZhM1LEBz5JfNGNye_4s",
                authDomain: "digi-vegitable.firebaseapp.com",
                projectId: "digi-vegitable",
                storageBucket: "digi-vegitable.appspot.com", // Corrected the storageBucket URL
                messagingSenderId: "406589162099",
                appId: "1:406589162099:android:a56829d2765f6b48156006",
            });
            console.log("Firebase has been initialized");
        } else {
            console.log("Firebase is already initialized");
        }
    }, []);  // Empty dependency array to ensure this runs only once on mount



    return (
        <View style={{ backgroundColor: '#FFFFFF' }}>
            <Text>Welcome to Firebase!</Text>


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

export default FirebaseDemoNavigation;


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
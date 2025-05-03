import { Image, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../Image/Index'

const SignInNewPassScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} style={styles.StatusBar} />
            <View style={styles.header}>
                <Pressable style={styles.leftIcon} onPress={() => navigation.goBack()}>
                    <Image style={styles.LFImage} source={Images.LF} />
                </Pressable>
                <Text style={styles.headerText}>Set New Password</Text>
            </View>

            <View style={styles.SetNewImage}>
                <Image style={styles.Himage} source={Images.SNP} />
            </View>


            <View style={styles.SecTextMain}>
                <Text style={styles.PassRecov}>Set New Password</Text>
                <Text style={styles.SmallText}>Your new password must be different from previous
                    password.</Text>
            </View>

            <View style={styles.userInput}>

                <View style={styles.InputMain}>
                    <MaterialCommunityIcons name='email' size={30} color={'#B8B5C3'} style={styles.InputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Emain Address'
                        placeholderTextColor={'#B8B5C3'}
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.InputMain}>
                    <MaterialCommunityIcons name='lock-outline' size={30} color={'#B8B5C3'} style={styles.InputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor={'#B8B5C3'}
                        keyboardType='desault'
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnSignin} onPress={() => navigation.navigate('SignInPassChangedScreen')}>
                    <Text style={styles.fotText}>Change Password</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default SignInNewPassScreen

const styles = StyleSheet.create({
    StatusBar: { height: 50 },
    container: { width: '100%', height: '100%', backgroundColor: '#fff' },
    LFImage: { width: 30, height: 30, color: '#000000', },
    header: { width: '100%', minHeight: 50, margin: 10, flexDirection: 'row', marginTop: 10 },
    leftIcon: { width: 35, height: 35, backgroundColor: '#F2F2F3', justifyContent: 'center', alignItems: 'center', borderRadius: 20 },
    headerText: { flex: 10, fontSize: 22, fontWeight: 'bold', textAlign: 'center', },
    SetNewImage: { maxWidth: '100%', maxHeight: '40%', },
    Himage: { objectFit: 'fill', width: '85%', height: '100%', alignSelf: 'center' },
    SecTextMain: { width: '100%', padding: 15, },
    PassRecov: { fontSize: 24, fontFamily: 'Source Sans Pro', fontWeight: 'bold', color: '#000000' },
    SmallText: { fontSize: 16, fontFamily: 'Source sans Pro', color: '#999999', marginTop: 10 },
    userInput: { width: '100%', justifyContent: 'center', alignContent: 'center', marginTop: 18, },
    InputMain: { minWidth: '90%', minHeight: 50, backgroundColor: '#f1f1f1', borderRadius: 12, alignSelf: 'center', flexDirection: 'row', marginBottom: 18, },
    input: { width: '50%', color: '#000000', },
    InputIcon: { alignContent: 'center', justifyContent: 'center', padding: 10, },
    footer: { width: '100%', },
    btnSignin: { minWidth: '90%', minHeight: 45, alignSelf: 'center', borderRadius: 10, backgroundColor: '#00D642', justifyContent: 'center', marginTop: 60 },
    fotText: { textAlign: 'center', alignItems: 'center', fontSize: 20, color: '#ffffff', fontWeight: 'bold' },

})
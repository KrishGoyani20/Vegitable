import { Image, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TurboModuleRegistry, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Images from '../../Image/Index'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignInForgotPassscreen = ({ navigation }) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
            <View style={styles.header}>
                <Pressable style={styles.leftIcon} onPress={() => navigation.goBack()}>
                    <Image style={styles.LFImage} source={Images.LF} />
                </Pressable>
                <Text style={styles.headerText}>Forget Password</Text>
            </View>

            {
                !isFocused && (
                    <View style={styles.forgetpass}>
                        <Image style={styles.Himage} source={Images.FP} />
                    </View>
                )}

            <View style={styles.SecTextMain}>
                <Text style={styles.PassRecov}>Password recovery</Text>
                <Text style={styles.SmallText}>Enter your mail to recover your password.</Text>
            </View>

            <View style={styles.userInput}>

                <View style={styles.InputMain}>
                    <MaterialCommunityIcons name='email' size={30} color={'#B8B5C3'} style={styles.InputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder='Emain Address'
                        placeholderTextColor={'#B8B5C3'}
                        keyboardType='email-address'
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnSignin} onPress={() => navigation.navigate('SignInForgetPassOTP')}>
                    <Text style={styles.fotText}>Next</Text>
                </TouchableOpacity>

                <View style={styles.signupMain}>
                    <Text style={styles.signtext}>Don't have an account?</Text>
                    <Pressable>
                        <Text style={styles.signup}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SignInForgotPassscreen

const styles = StyleSheet.create({
    container: { width: '100%', height: '100%', backgroundColor: '#fff' },
    header: { width: '100%', minHeight: 50, margin: 10, flexDirection: 'row', marginTop: 15 },
    leftIcon: { width: 35, height: 35, backgroundColor: '#F2F2F3', justifyContent: 'center', alignItems: 'center', borderRadius: 20 },
    LFImage: { width: 30, height: 30, color: '#000000',  },
    headerText: { flex: 10, fontSize: 22, fontWeight: 'bold', textAlign: 'center', },
    forgetpass: { maxWidth: '100%', maxHeight: '40%', },
    Himage: { objectFit: 'fill', width: '85%', height: '100%', marginTop: 10, alignSelf: 'center' },
    SecTextMain: { width: '100%', padding: 15, marginTop: 10 },
    PassRecov: { fontSize: 24, fontFamily: 'Source Sans Pro', fontWeight: 'bold', color: '#000000' },
    SmallText: { fontSize: 16, fontFamily: 'Source sans Pro', color: '#999999', marginTop: 10 },
    userInput: { width: '100%', justifyContent: 'center', alignContent: 'center', marginTop: 25, },
    InputMain: { minWidth: '90%', minHeight: 50, backgroundColor: '#f1f1f1', borderRadius: 12, alignSelf: 'center', flexDirection: 'row', marginBottom: 20, },
    input: { width: '60%', color: '#000000', },
    InputIcon: { alignContent: 'center', justifyContent: 'center', padding: 10, },
    footer: { width: '100%', },
    btnSignin: { minWidth: '80%', minHeight: 45, alignSelf: 'center', borderRadius: 10, backgroundColor: '#00D642', justifyContent: 'center', marginTop: 60 },
    fotText: { textAlign: 'center', alignItems: 'center', fontSize: 20, color: '#ffffff', fontWeight: 'bold' },
    signupMain: { minWidth: '80%', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginTop: 20, },
    signtext: { fontSize: 14, textAlign: 'center' },
    signup: { fontSize: 14, color: '#00D642', },
})
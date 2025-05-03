import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { OtpInput } from 'react-native-otp-entry'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../Image/Index'

const SignUpOTPScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.leftIcon} onPress={() => navigation.goBack()}>
                    <Image style={styles.LFImage} source={Images.LF} />
                </Pressable>
                <Text style={styles.headerText}>OTP Verification</Text>
            </View>

            <View style={styles.OPTImage}>
                <Image style={styles.Himage} source={Images.SVOTP} />
            </View>

            <View style={styles.SecTextMain}>
                <Text style={styles.PassRecov}>Verification code</Text>
                <Text style={styles.SmallText}>We have sent the code verification to </Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.emailid}>Sepi***@gmail.com </Text>
                    <Pressable>
                        <Text style={styles.changemail}>Change Your email?</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.inputMain}>
                <OtpInput
                    style={styles.inputbtn}
                    numberOfDigits={4}
                    focusColor="green"
                    placeholder="******"
                    theme={{
                        pinCodeTextStyle: styles.pinCodeText,
                        pinCodeContainerStyle: styles.pinCodeContainer,
                    }}
                    onTextChange={(text) => console.log(text)}
                />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.resendbtn}>
                    <Text style={styles.resend}>Resend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmbtn} onPress={() => navigation.navigate('SignUpLastScreen')}>
                    <Text style={styles.confirm}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default SignUpOTPScreen

const styles = StyleSheet.create({
    container: { width: '100%', height: '100%', backgroundColor: '#fff' },
    header: { width: '100%', minHeight: 50, margin: 10, flexDirection: 'row', },
    leftIcon: { width: 35, height: 35, backgroundColor: '#F2F2F3', justifyContent: 'center', alignItems: 'center', borderRadius: 20 },
    LFImage: { width: 30, height: 30, color: '#000000', },
    headerText: { flex: 10, fontSize: 22, fontWeight: 'bold', textAlign: 'center', },
    OPTImage: { maxWidth: '100%', maxHeight: '40%', },
    Himage: { objectFit: 'fill', width: '85%', height: '100%', alignSelf: 'center' },
    SecTextMain: { width: '100%', padding: 15, marginTop: 10 },
    PassRecov: { fontSize: 24, fontFamily: 'Source Sans Pro', fontWeight: 'bold', color: '#000000' },
    SmallText: { fontSize: 16, fontFamily: 'Source sans Pro', color: '#999999', marginTop: 10 },
    emailid: { fontSize: 16, fontFamily: 'Source sans Pro', color: '#000000', },
    changemail: { fontSize: 14, color: '#00D642', marginTop: 2 },
    inputMain: { width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
    inputbtn: { width: '20%', height: 56, backgroundColor: '#F1F1F1', },
    footer: { width: '90%', flexDirection: 'row', marginTop: 70, justifyContent: 'space-evenly', alignSelf: 'center' },
    resendbtn: { width: '45%', borderColor: '#F1F1F1', borderWidth: 1.5, borderRadius: 12, borderColor: '#00D642', padding: 8 },
    resend: { color: '#00D642', textAlign: 'center', fontSize: 20, fontWeight: 700 },
    confirmbtn: { width: '45%', borderColor: '#00D642', backgroundColor: '#00D642', borderWidth: 1.5, borderRadius: 12, borderColor: '#00D642', padding: 8 },
    confirm: { color: '#ffffff', textAlign: 'center', fontSize: 20, fontWeight: 700 },


})
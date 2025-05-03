import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCart, decrement, RemoveCart } from '../../../Redux/Slice/CounterSlice';
import Images from '../../../Image/Index';

const CartItem = () => {

    const data = useSelector(state => state.cartData.cart);
    const dispatch = useDispatch();
    console.log('Data', data);

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.CartItemMainView}>
                            <View
                                style={[styles.CartImageMain, { backgroundColor: item.bgColor }]}>
                                <View style={styles.cartImage}>
                                    <Image style={styles.image} source={item.image} />
                                </View>
                            </View>
                            <View style={styles.CartTextMain}>
                                <Text style={styles.CartName} numberOfLines={2}>
                                    {item.name}
                                </Text>
                                <Text style={styles.CartKG}>{item.kg}</Text>
                                <Text style={styles.CartPrice}>₹{item.price}</Text>
                            </View>
                            <View style={styles.CartDeleteMain}>
                                <TouchableOpacity
                                    style={styles.DeleteMain}
                                    onPress={() => dispatch(decrement({ id: item.id }))}>
                                    <Image style={styles.CartDelete} source={Images.delete} />
                                </TouchableOpacity>
                                <View style={styles.QuntityMain}>
                                    <TouchableOpacity
                                        onPress={() => dispatch(RemoveCart({ id: item.id }))}>
                                        <Image style={styles.AddSub} source={Images.Sub} />
                                    </TouchableOpacity>

                                    <Text style={styles.QuntityText}>{item.quantity}</Text>

                                    <TouchableOpacity
                                        onPress={() => dispatch(AddtoCart({ id: item.id }))}>
                                        <Image style={styles.AddSub} source={Images.Add} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    CartItemMainView: {
        width: '90%',
        height: 'auto',
        marginTop: 10,
        padding: 7,
        borderWidth: 0.5,
        borderColor: '#B8B8B8',
        borderRadius: 18,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    CartImageMain: { display: 'flex', height: 100, borderRadius: 16 },
    cartImage: { width: 100, height: '100%', objectFit: 'cover', },
    image: { width: '100%', height: '100%', resizeMode: 'center', borderRadius: 16 },
    CartTextMain: { flex: 1, justifyContent: 'center', margin: 7, gap: 3 },
    CartName: { fontSize: 16, fontWeight: 600, color: '#212121' },
    CartKG: { fontSize: 14, fontWeight: 600, color: '#A1A1A1' },
    CartPrice: { fontSize: 18, fontWeight: 700, color: '#212121' },
    CartDeleteMain: { flex: 1, margin: 7 },
    DeleteMain: {
        width: 26,
        height: 26,
        backgroundColor: '#F1F1F1',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    CartDelete: { width: 18, height: 18, alignItems: 'center' },
    QuntityMain: {
        width: '90%',
        height: 35,
        marginTop: 30,
        flexDirection: 'row',
        backgroundColor: '#F1F1F1',
        alignSelf: 'flex-end',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
    },
    QuntityText: { fontWeight: 700, color: '#101010' },
    AddSub: { width: 14, height: 14 },
})
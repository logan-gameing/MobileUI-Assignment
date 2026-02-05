import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const Footer = () => {
    return (
    <View style = {styles.footerContainer}>
        <View style = {styles.footerItem}>
            <AntDesign name="tag" size={24} color="white" />
        </View>
        <View style = {styles.footerItem}>
            <Entypo name="news" size={24} color="white" />
        </View>
        <View style = {styles.footerItem}>
            <Ionicons name="shield" size={24} color="white" />
        </View>
        <View style = {styles.footerItem}>
            <AntDesign name="bell" size={24} color="white" />
        </View>
        <View style = {styles.footerItem}>
            <AntDesign name="bars" size={24} color="white" />
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1f2124',
        height: 80,
        width: '100%',
        paddingBottom: 25

    },
    footerItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Footer;
import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker, TouchableOpacity, Linking, Image, Platform } from "react-native";
import {WebView} from "react-native-webview";
import MediaButton from "../components/MediaButton";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";
import PoisoningsStats1 from "../assets/PoisoningsMM/PoisoningsStats1.png";
import PoisoningsMM2 from "../assets/PoisoningsMM/PoisoningMM2.jpg"
import { ScrollView } from "react-native-gesture-handler";

export default function PoisoningsMM({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToPoisonings = () => {
        navigation.navigate("Poisonings");
    }
    const backToMedia = () => {
        navigation.navigate("Multimedia");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>

    <Text style={styles.title}> Poisonings </Text>

    <View style={styles.container}>
    <ScrollView>

    <Image style={styles.img} source={PoisoningsMM2}/>


    </ScrollView>
    <View style={styles.buttons}>

    <MediaButton
          text="Back to Media"
          onPress={backToMedia}
          txtColor={"black"}
    ></MediaButton>

    <MediaButton
          text="Go to Poisonings"
          onPress={goToPoisonings}
          txtColor={"black"}
    ></MediaButton>

    <MediaButton
          text="Next Page"
          onPress={backToMedia}
          txtColor={"black"}
    ></MediaButton>
    
    </View>
</View>

    <View style = {styles.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    img: {
        height: 500,
        width: 350,
    },

    title: {
        // margin: 100,
        //height: 70,
        fontSize: 40,
        marginBottom: 10,
        marginTop: -50,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline"
    },
    subtitle: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    container: {
        alignItems: "center",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    link: {
        textDecorationLine:'underline',
        color:'blue',
        margin: 10,
    },
    pushdown: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C4C4C4",
    },
});
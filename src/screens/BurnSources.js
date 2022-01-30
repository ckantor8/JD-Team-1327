import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Button, Text, Picker, TouchableOpacity, Linking } from "react-native";
import MainButton from "../components/MainButton";
import InfoButton1 from "../components/InfoButton1";
import InfoButton2 from "../components/InfoButton2";
import { get } from "../Db";
import Background from "../assets/info_background.png";
import { Audio } from "expo-av";
import Navbar from "../components/NavBar";

export default function Falls1({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleInfoNav = () => {
        navigation.navigate("Info");
    };
    const goToPoisonings = () => {
        navigation.navigate("Burns");
    }
    const backToSources = () => {
        navigation.navigate("Sources");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>
    <Text style={styles.title}> Burnings Sources: </Text>
    <Text> {'\n'} </Text>

<View style={styles.container}>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.childrenssafetynetwork.org/child-safety-topics/fire-burn-safety')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [1] Fire & Burn Safety </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://ameriburn.org/wp-content/uploads/2018/12/nbaw2019_statsdataresources_120618-1.pdf')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [2] Scald Statistics and Data </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.stanfordchildrens.org/en/topic/default?id=burns-overview-90-P01737')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> [3] Overview of Burns </Text>
    </TouchableOpacity>

    <Text style={styles.title}> Further Readings </Text>
    <Text> {'\n'} </Text>


    <TouchableOpacity onPress={() => Linking.openURL('https://www.uofmhealth.org/health-library/ue5140')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Child Safety: Preventing Burns </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://kidshealth.org/en/parents/safety-burns.html')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Household Safety: Preventing Burns, Shocks, and Fires </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://raisingchildren.net.au/newborns/safety/burns-scalds-fire/burns-prevention')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Burns prevention in your home </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>


    <TouchableOpacity onPress={() => Linking.openURL('https://www.stanfordchildrens.org/en/topic/default?id=preventing-burn-injuries-90-P01750')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Preventing Burn Injuries </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/child-safety/art-20044027')}>
         <Text style={{textDecorationLine:'underline', color:'blue'}}> Burn safety: Protect your child from burns </Text>
    </TouchableOpacity>

    <Text> {'\n'} </Text>

    <MainButton
          text="Go to Burns"
          onPress={goToPoisonings}
          txtColor={"black"}
    ></MainButton>

    <MainButton
          text="Back to Sources"
          onPress={backToSources}
          txtColor={"black"}
    ></MainButton>
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
    title: {
        // margin: 100,
        //height: 70,
        fontSize: 40,
        marginBottom: 15,
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
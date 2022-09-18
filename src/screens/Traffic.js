import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Background from "../assets/bg.png";
import car from "../assets/carSafetyMM/car.png";
import BackButton from "../components/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/MediaButton";
import MMButton from "../components/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";
import rearSeat from "../assets/carSafetyMM/rearSeat.png";
import foreSeat from "../assets/carSafetyMM/foreSeat.png";
import boostSeat from "../assets/carSafetyMM/boostSeat.png";
import belt from "../assets/carSafetyMM/belt.png";
import carSafety from "../assets/carSafetyMM/carSafety.png";
import safe from "../assets/carSafetyMM/safe.png";
import * as Speech from "expo-speech";
import {CarText} from "../CarText";

export default function Traffic({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleLastNav = () => {
        navigation.navigate("Drownings");
    };
    const handleTrafficSourcesNav = () => {
        navigation.navigate("TrafficSources");
    };
    const handleCarsMMNav = () => {
        navigation.navigate("CarSafetyMM");
    };
    const handleNextNav = () => {
        navigation.navigate("ParentalHealth");
    };
    const backToInfo = () => {
        navigation.navigate("Info");
    };

    async function speakAll() {
        let reading = await Speech.isSpeakingAsync();
        if (!reading) {
            Speech.speak("Car Safety" + ". " + "Types of Car Seats" + ". ", {rate: 0.85});
            for (let i = 0; i < CarText.length; i++) {
                if (i == 5) {
                    Speech.speak("Must Do's While Traveling");
                }
                Speech.speak(CarText[i].title + ". " + CarText[i].body, {rate: 0.85});
            }
        } else {
            Speech.stop();
        }
    }

    async function speak(text) {
        let speaking = await Speech.isSpeakingAsync();
        if (!speaking) {
            Speech.speak(CarText[text].title + "." + CarText[text].body, {rate: 0.85});
        } else {
            Speech.stop();
        }
    }

    return (
    <ImageBackground source={Background} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={handleLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Info"
              onPress={backToInfo}
              txtColor={"black"}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={handleNextNav}
        ></BackButton>
    </View>

    <ScrollView>

    <Text style={CoreStyle.title}> Car Safety </Text>
    <TouchableOpacity onPress={() => speakAll()}>
        <Image style={styles.hdrimg} source={carSafety}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subtitle}> Types of Car Seats </Text>

    <CollapsibleBox header={CarText[0].title} headerstyle={CoreStyle.bullet}>
        <TouchableOpacity onPress={() => speak(0)}>
            <Image style={styles.rearimg} source={rearSeat}/>
        </TouchableOpacity>
        <Text style={CoreStyle.subbullet}>{CarText[0].body}</Text>
    </CollapsibleBox>

    <CollapsibleBox header={CarText[1].title} headerstyle={CoreStyle.bullet}>
        <TouchableOpacity onPress={() => speak(1)}>
            <Image style={styles.foreimg} source={foreSeat}/>
        </TouchableOpacity>
        <Text style={CoreStyle.subbullet}>{CarText[1].body}</Text>
    </CollapsibleBox>

    <CollapsibleBox header={CarText[2].title} headerstyle={CoreStyle.bullet}>
        <TouchableOpacity onPress={() => speak(2)}>
            <Image style={styles.boostimg} source={boostSeat}/>
        </TouchableOpacity>
        <Text style={CoreStyle.subbullet}>{CarText[2].body}</Text>
    </CollapsibleBox>

    <CollapsibleBox header={CarText[3].title} headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>{CarText[3].body}</Text>
    </CollapsibleBox>

    <TouchableOpacity onPress={() => speak(4)}>
        <Image style={CoreStyle.headimg} source={belt}/>
    </TouchableOpacity>

    <Text style={CoreStyle.subtitle}>{CarText[4].title}</Text>
        <Text style={CoreStyle.content}>{CarText[4].body}</Text>

    <Text style={CoreStyle.subtitle}> Must-Dos while traveling </Text>

    <CollapsibleBox header={CarText[5].title} headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>{CarText[5].body}</Text>
    </CollapsibleBox>

    <CollapsibleBox header={CarText[6].title} headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>{CarText[6].body}</Text>
    </CollapsibleBox>

    <CollapsibleBox header={CarText[7].title} headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>{CarText[7].body}</Text>
    </CollapsibleBox>

    <CollapsibleBox header={CarText[8].title} headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>{CarText[8].body}</Text>
    </CollapsibleBox>

    <TouchableOpacity onPress={() => speak(9)}>
        <Image style={styles.foreimg} source={safe}/>
    </TouchableOpacity>

     <Text style={CoreStyle.subtitle}>{CarText[9].title}</Text>
        <Text style={CoreStyle.content}>{CarText[9].body}</Text>

    <Image style={CoreStyle.headimg} source={car}/>

    <View style={CoreStyle.buttons}>

    <SourcesButton
        onPress={handleTrafficSourcesNav}
    ></SourcesButton>

    <MMButton
        onPress={handleCarsMMNav}
    ></MMButton>

    </View>

    </ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={navigation}/>
    </View>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    hdrimg: {
        height: 150,
        width: 175,
        alignSelf: "center",
    },
    rearimg: {
        height: 160,
        width: 120,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    foreimg: {
        height: 160,
        width: 120,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    boostimg: {
        height: 120,
        width: 170,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
    },
});

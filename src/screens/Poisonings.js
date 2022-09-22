import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Background from "../assets/app/bg.png";
import poison_hdr from "../assets/PoisoningsMM/poison_hdr.png";
import berries from "../assets/PoisoningsMM/berries.png";
import house from "../assets/PoisoningsMM/house.png";
import pills from "../assets/PoisoningsMM/Pill.png";
import poison from "../assets/PoisoningsMM/poison.png";
import prevent from "../assets/PoisoningsMM/prevent.png";

import BackButton from "../components/buttons/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/buttons//MediaButton";
import MMButton from "../components/buttons/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/buttons/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";
import * as Speech from "expo-speech";
import {PoisonText} from "../json/PoisonText.json";

export default function Poisonings({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleLastNav = () => {
        navigation.navigate("Burns");
    };
    const handlePoisoningSourcesNav = () => {
        navigation.navigate("PoisoningSources");
    };
    const handlePoisoningMMNav = () => {
        navigation.navigate("PoisoningsMM");
    };
    const handleNextNav = () => {
        navigation.navigate("Drownings");
    };
    const backToInfo = () => {
        navigation.navigate("Info");
    };

    async function speakAll() {
        let reading = await Speech.isSpeakingAsync();
        if (!reading) {
            Speech.speak("Poisonings" + ". " + "Tips to prevent child poisoning:" + ". ", {rate: 0.90});
            for (let i = 0; i < PoisonText.length; i++) {
                Speech.speak(PoisonText[i].title + ". " + PoisonText[i].body, {rate: 0.90});
            }
        } else {
            Speech.stop();
        }
    }

    async function speak(text) {
        let speaking = await Speech.isSpeakingAsync();
        if (!speaking) {
            Speech.speak(PoisonText[text].title + "." + PoisonText[text].body, {rate: 0.90});
        } else {
            Speech.stop();
        }
    }

    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={global.text}
            onPress={handleLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Info"
              onPress={backToInfo}
              txtColor={global.text}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={handleNextNav}
        ></BackButton>
    </View>
    
    <ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}>Poisonings</Text>

    <TouchableOpacity onPress={() => speakAll()}>
    <Image style={styles.hdrimg} source={poison_hdr}/>
    </TouchableOpacity>

    <Text allowFontScaling={true} style={CoreStyle.subtitle}>Tips to prevent child poisoning:</Text>

        <CollapsibleBox header={PoisonText[0].title} headerstyle={CoreStyle.bullet}>
            <TouchableOpacity onPress={() => speak(0)}>
            <Image style={styles.pillImg} source={pills}/>
            </TouchableOpacity>
            <Text allowFontScaling={true} style={CoreStyle.subbullet}>{PoisonText[0].body}</Text>
         </CollapsibleBox>
        
         <CollapsibleBox header={PoisonText[1].title} headerstyle={CoreStyle.bullet}>
             <TouchableOpacity onPress={() => speak(1)}>
            <Image style={styles.houseImg} source={house}/>
            </TouchableOpacity>
            <Text allowFontScaling={true} style={CoreStyle.subbullet}>{PoisonText[1].body}</Text>
        </CollapsibleBox>
        
        <CollapsibleBox header={PoisonText[2].title} headerstyle={CoreStyle.bullet}>
            <TouchableOpacity onPress={() => speak(2)}>
            <Image style={styles.berriesImg} source={berries}/>
            </TouchableOpacity>
            <Text allowFontScaling={true} style={CoreStyle.subbullet}>{PoisonText[2].body}</Text>
         </CollapsibleBox>

        <TouchableOpacity onPress={() => speak(3)}>
            <Image style={styles.poisonImg} source={poison}/>
        </TouchableOpacity>
        <Text allowFontScaling={true} style={CoreStyle.subtitle}>{PoisonText[3].title}</Text>
        <Text allowFontScaling={true} style={CoreStyle.content}>{PoisonText[3].body}</Text>


        <TouchableOpacity onPress={() => speak(4)}>
        <Image style={styles.preventImg} source={prevent}/>
        </TouchableOpacity>
        <Text allowFontScaling={true} style={CoreStyle.subtitle}>{PoisonText[4].title}</Text>
        <Text allowFontScaling={true} style={CoreStyle.content}>{PoisonText[4].body}</Text>

        <View style={CoreStyle.buttons}>

        <SourcesButton
            onPress={handlePoisoningSourcesNav}
        ></SourcesButton>

        <MMButton
            onPress={handlePoisoningMMNav}
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
        width: 65,
        alignSelf: "center",
    },
    pillImg: {
        height: 150,
        width:130,
        alignSelf: "center",
        marginTop: 20,
    },
    houseImg: {
        height: 150,
        width: 200,
        alignSelf: "center",
        margin: 20,
    },
    berriesImg: {
        height: 150,
        width: 250,
        alignSelf: "center",
        marginBottom: 20,
    },
    poisonImg: {
        height: 150,
        width:160,
        alignSelf: "center",
        marginVertical: 20,
    },
    preventImg: {
        height: 200,
        width:150,
        alignSelf: "center",
        marginVertical: 20,
    },
});

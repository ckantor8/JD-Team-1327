import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Background from "../assets/app/bg.png";
import bhdr from "../assets/BurnsMM/burn_hdr.png";
import babyIMG from "../assets/BurnsMM/baby.jpeg";
import outletIMG from "../assets/BurnsMM/outlet.png";
import panIMG from "../assets/BurnsMM/pan.png";
import scaldIMG from "../assets/BurnsMM/scald.jpeg";
import smokeIMG from "../assets/BurnsMM/smoke.png";
import cookIMG from "../assets/BurnsMM/cook.png";
import sunscreenIMG from "../assets/BurnsMM/sunscreen.png";
import treatmentIMG from "../assets/BurnsMM/treatment.png";
import typeIMG from "../assets/BurnsMM/types.png";

import BackButton from "../components/buttons/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/buttons/MediaButton";
import MMButton from "../components/buttons/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/buttons/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";
import * as Speech from "expo-speech";
import {BurnText} from "../json/BurnText.json";

export default function Burns({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleLastNav = () => {
        navigation.navigate("Falls");
    };
    const handleBurnSourcesNav = () => {
        navigation.navigate("BurningSources");
    };
    const handleBurnsMMNav = () => {
        navigation.navigate("BurnsMM");
    };
    const handleNextNav = () => {
        navigation.navigate("Poisonings");
    };
    const backToInfo = () => {
        navigation.navigate("Info");
    };

    async function speakAll() {
        let reading = await Speech.isSpeakingAsync();
        if (!reading) {
            Speech.speak("Burns" + ". " + "How to Prevent Burn Injuries" + ". ", {rate: 0.90});
            for (let i = 0; i < BurnText.length; i++) {
                Speech.speak(BurnText[i].title + ". " + BurnText[i].body, {rate: 0.90});
                if (i == 5) {
                    Speech.speak("7. Most importantly, always supervise your child around any open flame", {rate: 0.90});
                }
            }
        } else {
            Speech.stop();
        }
    }

    async function speak(text) {
        let speaking = await Speech.isSpeakingAsync();
        if (!speaking) {
            Speech.speak(BurnText[text].title + "." + BurnText[text].body, {rate: 0.90});
            if (text == 5) {
                Speech.speak("7. Most importantly, always supervise your child around any open flame", {rate: 0.90});
            }
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

    <Text allowFontScaling={true} style={CoreStyle.title}> Burns </Text>

    <TouchableOpacity onPress={() => speakAll()}>
        <Image style={CoreStyle.headimg} source={bhdr}/>
    </TouchableOpacity>

    <Text allowFontScaling={true} style={CoreStyle.subtitle}> How to prevent burn injuries? </Text>

    <CollapsibleBox header={BurnText[0].title} headerstyle={CoreStyle.bullet}>

    <TouchableOpacity onPress={() => speak(0)}>
        <Image style={styles.scaldImg} source={scaldIMG}/>
    </TouchableOpacity>

        <Text allowFontScaling={true} style={CoreStyle.subbullet}>{BurnText[0].body}</Text>
    </CollapsibleBox>


    <CollapsibleBox header={BurnText[1].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(1)}>
        <Image style={styles.outletImg} source={outletIMG}/> 
    </TouchableOpacity>
        <Text allowFontScaling={true} style={CoreStyle.subbullet}>{BurnText[1].body}</Text>
    </CollapsibleBox>


    <CollapsibleBox header={BurnText[2].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(2)}>
        <Image style={styles.cookImg} source={cookIMG}/>
    </TouchableOpacity>
        <Text allowFontScaling={true} style={CoreStyle.subbullet}>{BurnText[2].body}</Text>
    </CollapsibleBox>

    <CollapsibleBox header={BurnText[3].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(3)}>
        <Image style={styles.panImg} source={panIMG}/>
    </TouchableOpacity>
        <Text allowFontScaling={true} style={CoreStyle.subbullet}>{BurnText[3].body}</Text>
    </CollapsibleBox>


    <CollapsibleBox header={BurnText[4].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(4)}>
        <Image style={styles.smokeImg} source={smokeIMG}/>
    </TouchableOpacity>
        <Text allowFontScaling={true} style={CoreStyle.subbullet}>{BurnText[4].body}</Text>
    </CollapsibleBox>

    <CollapsibleBox header={BurnText[5].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => speak(5)}>
        <Image style={styles.sunscreenImg} source={sunscreenIMG}/>
    </TouchableOpacity>
        <Text allowFontScaling={true} style={CoreStyle.subbullet}>{BurnText[5].body}</Text>
    </CollapsibleBox>

    <Text allowFontScaling={true} style={CoreStyle.bullet}>7. Most importantly, always supervise your child around any open flame {'\n'} </Text>

    <TouchableOpacity onPress={() => speak(6)}>
        <Image style={styles.babyImg} source={babyIMG}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subtitle}> {BurnText[6].title} </Text>
    <Text allowFontScaling={true} style={CoreStyle.content}>{BurnText[6].body}</Text>

    <TouchableOpacity onPress={() => speak(7)}>
        <Image style={styles.typeImg} source={typeIMG}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subtitle}> {BurnText[7].title} </Text>
    <Text allowFontScaling={true} style={CoreStyle.content}>{BurnText[7].body}</Text>

    <TouchableOpacity onPress={() => speak(8)}>
        <Image style={styles.treatmentImg} source={treatmentIMG}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subtitle}> {BurnText[8].title} </Text>
        <Text allowFontScaling={true} style={CoreStyle.content}>{BurnText[8].body}</Text>

    <View style={CoreStyle.buttons}>

    <SourcesButton
        onPress={handleBurnSourcesNav}
    ></SourcesButton>

    <MMButton
        onPress={handleBurnsMMNav}
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
    panImg: {
        height: 150,
        width:300,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    scaldImg: {
        height: 150,
        width: 200,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    babyImg: {
        paddingLeft: 30,
        height: 150,
        width: 300,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
    },
    smokeImg: {
        height: 150,
        width:250,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    outletImg: {
        height: 150,
        width: 200,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cookImg: {
        height: 150,
        width: 200,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    sunscreenImg: {
        height: 200,
        width: 150,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    treatmentImg: {
        height: 150,
        width: 200,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    typeImg: {
        height: 150,
        width: 200,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});
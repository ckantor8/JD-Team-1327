import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "../assets/bg.png";
import PMM3 from "../assets/PoisoningsMM/PMM3.png";
import PMM4 from "../assets/PoisoningsMM/PMM5.jpg";
import PoisoningsMM2 from "../assets/PoisoningsMM/PoisoningMM2.jpg";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import { CoreStyle } from "../components/CoreStyle";

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
    const handleLastNav = () => {
        navigation.navigate("BurnsMM");
    }
    const handleNextNav = () => {
        navigation.navigate("DrowningMM");
    }

    return (
    <ImageBackground source={Background} style={styles.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={"black"}
            onPress={handleLastNav}
        ></BackButton>
        <MediaButton
              text="Back to Media"
              onPress={backToMedia}
              txtColor={"black"}
        ></MediaButton>
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={handleNextNav}
        ></BackButton>
    </View>

    <ScrollView> 

    <View style={CoreStyle.mediaContainer}>
    <Text style={CoreStyle.title}> Poisonings </Text>
    <Image style={styles.img} source={PoisoningsMM2}/>
    <Text>
        {'\n'}{'\n'}{'\n'}
        </Text>
    <Image style={styles.img} source={PMM3}/>
    <Text>
        {'\n'}{'\n'}{'\n'}
        </Text>
    <Image style={styles.newimg} source={PMM4}/>
    <Text>
        {'\n'}{'\n'}{'\n'}
        </Text>
    </View>

    <VideoPlayer videoID = "JQob-pwLZJ8"/>
    <VideoPlayer videoID = "Hu1NEWaOISo"/>
    <VideoPlayer videoID = "7Et7lrqVy04"/>

    <View style={CoreStyle.mediaButtons}>

    <MainButton
          text="Go to Poison"
          onPress={goToPoisonings}
          txtColor={"black"}
    ></MainButton>

    </View>

    </ScrollView>

    <View style = {CoreStyle.pushdown}>
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
        height: 600,
        width: "100%",
    },
    newimg: {
        height: 800,
        width: "100%",
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
    link: {
        textDecorationLine:'underline',
        color:'blue',
        margin: 10,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
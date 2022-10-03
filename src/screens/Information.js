import React, {Component} from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import BackButton from "../components/buttons/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import TopicButton from "../components/buttons/TopicButton";
import MMButton from "../components/buttons/MMButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import VideoPlayer from "../components/VideoPlayer";
import * as Speech from "expo-speech";
import Background from "../assets/app/bg.png";
import {Content} from "../json/Content.json";
import src from "../assets/buttons/links-line-alt.png";
import mm from "../assets/buttons/media.png";

//Fall images
import falls from "../assets/fallsMM/falls.png";
import secure from "../assets/fallsMM/secure.png";
import stairs from "../assets/fallsMM/stairs.png";
import window from "../assets/fallsMM/window.png";
import tv from "../assets/fallsMM/TV.png";
import playground from "../assets/fallsMM/playground.png";
import fall1 from "../assets/fallsMM/fall1.png";
import fall2 from "../assets/fallsMM/fall2.png"
import stroller2 from "../assets/fallsMM/stroller2.png";

//Burn images
import bhdr from "../assets/BurnsMM/burn_hdr.png";
import scaldIMG from "../assets/BurnsMM/scald.jpeg";
import outletIMG from "../assets/BurnsMM/outlet.png";
import panIMG from "../assets/BurnsMM/pan.png"
import smokeIMG from "../assets/BurnsMM/smoke.png";
import sunscreenIMG from "../assets/BurnsMM/sunscreen.png";
import cookIMG from "../assets/BurnsMM/cook.png";
import typeIMG from "../assets/BurnsMM/types.png";
import treatmentIMG from "../assets/BurnsMM/treatment.png";

//Poisoning images
import poison_hdr from "../assets/PoisoningsMM/poison_hdr.png";
import pills from "../assets/PoisoningsMM/Pill.png";
import house from "../assets/PoisoningsMM/house.png";
import gas from "../assets/PoisoningsMM/nat_gas.png";
import paint from "../assets/PoisoningsMM/paint.png";
import help from "../assets/PoisoningsMM/help.jpg";
import poison from "../assets/PoisoningsMM/poison.png";
import prevent from "../assets/PoisoningsMM/prevent.png";
import berries from "../assets/PoisoningsMM/berries.png";

//Drowning Images
import drown from "../assets/drownMM/drown.png";
import bath from "../assets/drownMM/bath.png";
import float from "../assets/drownMM/float.png";
import cpr from "../assets/drownMM/cpr.png";
import alone from "../assets/drownMM/alone.png";
import teach from "../assets/drownMM/teach.png";
import drowning from "../assets/drownMM/drowning.png";
import hand from "../assets/drownMM/hand.png";
import pool from "../assets/drownMM/Pool.png";

//Car Safety images
import carSafety from "../assets/carSafetyMM/carSafety.png";
import rearSeat from "../assets/carSafetyMM/rearSeat.png";
import foreSeat from "../assets/carSafetyMM/foreSeat.png";
import boostSeat from "../assets/carSafetyMM/boostSeat.png";
import seatbelt from "../assets/carSafetyMM/seatbelt.png";
import belt from "../assets/carSafetyMM/belt.png";
import safe from "../assets/carSafetyMM/safe.png";
import heat from "../assets/carSafetyMM/heat.png";
import car from "../assets/carSafetyMM/car.png";

//Parental Health images
import ppd2 from "../assets/parentalHealthMM/ppd2.png";
import either from "../assets/parentalHealthMM/either.png";
import mother1 from "../assets/parentalHealthMM/mother1.png";
import father from "../assets/parentalHealthMM/malePPD.png";
import mother2 from "../assets/parentalHealthMM/signs.png";
import ppd5 from "../assets/parentalHealthMM/ppd5.png";
import ppd3 from "../assets/parentalHealthMM/ppd3.png";
import ppd4 from "../assets/parentalHealthMM/ppd4.png";
import ppd6 from "../assets/parentalHealthMM/ppd6.png";

var last;
var next;
var txt;
var img;

export default class Information extends Component {
    constructor(props) {
        super(props);
    };

  handleLastNav = () => {
    if (this.props.navigation.getParam("topic") != "Falls") {
        this.props.navigation.navigate("Information", {topic: last});
    } else {
        this.props.navigation.navigate("Info");
    }
  };

  handleNextNav = () => {
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("Information", {topic: next});
    } else {
        this.props.navigation.navigate("Information", {topic: "Parental Health"});
    }
  };

  goMenu = () => {
    this.props.navigation.navigate("Menu", {module: "Information"});
  };

  goResources = (_topic) => {
    this.props.navigation.navigate("Resources", {topic: _topic});
  };

  goMedia = (_topic) => {
    this.props.navigation.navigate("Media", {topic: _topic});
  };

    async speakAll() {
        let reading = await Speech.isSpeakingAsync();
        if (!reading) {
            for (let i = 0; i < txt.length; i++) {
                Speech.speak(txt[i].title + ". " + txt[i].body, {rate: 1.1});
            }
        } else {
            Speech.stop();
        }
    }

    async speak(text) {
        let speaking = await Speech.isSpeakingAsync();
        if (!speaking) {
            Speech.speak(txt[text].title + ". " + txt[text].body, {rate: 1.1});
        } else {
            Speech.stop();
        }
    }

  render (){
    switch(this.props.navigation.getParam('topic')) {
        case "Falls":
            last = "";
            next = "Burns";
            txt = Content.FallText;
            img = [falls, secure, stairs, window, tv, playground, fall1, fall2, stroller2];
            break;
        case "Burns":
            last = "Falls";
            next = "Poisonings";
            txt = Content.BurnText;
            img = [bhdr, scaldIMG, outletIMG, panIMG, smokeIMG, sunscreenIMG, cookIMG, typeIMG, treatmentIMG];
            break;
        case "Poisonings":
            last = "Burns";
            next = "Drownings";
            txt = Content.PoisonText;
            img = [poison_hdr, pills, house, gas, paint, help, poison, prevent, berries];
            break;
        case "Drownings":
            last =  "Poisonings";
            next = "Car Safety";
            txt = Content.DrownText;
            img = [drown, bath, float, cpr, alone, teach, drowning, hand, pool];
            break;
        case "Car Safety":
            last = "Drownings";
            next = "Parental Health";
            txt = Content.CarText;
            img = [carSafety, rearSeat, foreSeat, boostSeat, seatbelt, belt, safe, heat, car];
            break;
        case "Parental Health":
            last = "Car Safety";
            next = "Parental Health";
            txt = Content.ParentText;
            img = [ppd2, either, mother1, father, mother2, ppd5, ppd3, ppd4, ppd6];
            break;
        default:
            break
    };
    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <BackButton
            text="<"
            txtColor={global.text}
            onPress={this.handleLastNav}
        ></BackButton>
        <TopicButton
              text="Back to Topics"
              onPress={this.goMenu}
              txtColor={global.text}
        ></TopicButton>
        <BackButton
            text=">"
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></BackButton>
    </View>

    <ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}>{txt[0].title}</Text>

    <TouchableOpacity onPress={() => this.speakAll()}>
        <Image style={CoreStyle.headimg} source={img[0]}/>
    </TouchableOpacity>

    <Text allowFontScaling={true} style={CoreStyle.subtitle}>{txt[0].body}</Text>

<CollapsibleBox header={txt[1].title}
    headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.speak(1)}>
        <Image style={CoreStyle.img} source={img[1]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[1].body}</Text>
</CollapsibleBox> 

<CollapsibleBox header={txt[2].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.speak(2)}>
        <Image style={CoreStyle.img} source={img[2]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[2].body}</Text>
</CollapsibleBox> 

<CollapsibleBox header={txt[3].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.speak(3)}>
        <Image style={CoreStyle.img} source={img[3]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[3].body}</Text>
</CollapsibleBox> 


<CollapsibleBox header={txt[4].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.speak(4)}>
        <Image style={CoreStyle.img} source={img[4]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[4].body}</Text>
</CollapsibleBox>

<CollapsibleBox header={txt[5].title} headerstyle={CoreStyle.bullet}>
    <TouchableOpacity onPress={() => this.speak(5)}>
        <Image style={CoreStyle.img} source={img[5]}/>
    </TouchableOpacity>
    <Text allowFontScaling={true} style={CoreStyle.subbullet}>{txt[5].body}</Text>
</CollapsibleBox>

<TouchableOpacity onPress={() => this.speak(6)}>
    <Image style={CoreStyle.img} source={img[6]}/>
</TouchableOpacity>
<Text allowFontScaling={true} style={CoreStyle.subtitle}>{txt[6].title}</Text>
<Text allowFontScaling={true} style={CoreStyle.content}>{txt[6].body}</Text>

<TouchableOpacity onPress={() => this.speak(7)}>
    <Image style={CoreStyle.img} source={img[7]}/>
</TouchableOpacity>
<Text allowFontScaling={true} style={CoreStyle.subtitle}>{txt[7].title}</Text>
<Text allowFontScaling={true} style={CoreStyle.content}>{txt[7].body}</Text>

    <TouchableOpacity onPress={() => this.speak(8)}>
        <Image style={CoreStyle.img} source={img[8]}/>
    </TouchableOpacity>
<Text allowFontScaling={true} style={CoreStyle.subtitle}>{txt[8].title}</Text>
<Text allowFontScaling={true} style={CoreStyle.content}>{txt[8].body}</Text>

<View style={CoreStyle.buttons}>
<MMButton img = {src}
    onPress={() => this.goResources(this.props.navigation.getParam('topic'))}
></MMButton>
<MMButton img = {mm}
    onPress={() => this.goMedia(this.props.navigation.getParam('topic'))}
></MMButton>
</View>

    </ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={this.props.navigation}/>
    </View>

    </ImageBackground>
    );
  }
}
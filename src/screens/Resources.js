import React, {Component} from "react";
import { ImageBackground, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MMButton from "../components/buttons/MMButton";
import MainButton from "../components/buttons/MainButton";
import TopicButton from "../components/buttons/TopicButton";
import Navbar from "../components/NavBar";
import { CoreStyle } from "../components/CoreStyle";
import { Sources } from "../json/Bib.json";
import right from "../assets/buttons/right.png";
import left from "../assets/buttons/left.png";

let last;
let next;
let srcs;

export default class Resources extends Component{
    constructor(props) {
        super(props);
    }

  handleLastNav = () => {
    if (this.props.navigation.getParam("topic") != "Falls") {
        this.props.navigation.navigate("Resources", {topic: last});
    } else {
        this.props.navigation.navigate("Menu", {module:"Resources"});
    }
  }

  handleNextNav = () => {
    if (this.props.navigation.getParam("topic") != "Parental Health") {
        this.props.navigation.navigate("Resources", {topic: next});
    } else {
        this.props.navigation.navigate("Resources", {topic: "Parental Health"})
    }
  }

  goMenu = () => {
    this.props.navigation.navigate("Menu", {module: "Resources"});
  };

    goInformation = (_topic) => {
      this.props.navigation.navigate("Information", {topic: _topic});
    };

  render (){
    switch(this.props.navigation.getParam('topic')) {
        case "Falls":
            last = "Sources";
            next = "Burns";
            srcs = Sources.FallSrcs;
            break;
        case "Burns":
            last = "Falls";
            next = "Poisonings";
            srcs = Sources.BurnSrcs;
            break;
        case "Poisonings":
            last = "Burns";
            next = "Drownings";
            srcs = Sources.PoisonSrcs;
            break;
        case "Drownings":
            last =  "Poisonings";
            next = "Car Safety";
            srcs = Sources.DrownSrcs;
            break;
        case "Car Safety":
            last = "Drownings";
            next = "Parental Health";
            srcs = Sources.CarSrcs;
            break;
        case "Parental Health":
            last = "Car Safety";
            next = "Parental Health";
            srcs = Sources.ParSrcs;
            break;
        default:
            break
    }
    return (
    <ImageBackground source={global.bg} style={CoreStyle.image}>

    <View style={CoreStyle.topnavbuttons}>
        <MMButton
            img={left}
            txtColor={global.text}
            onPress={this.handleLastNav}
        ></MMButton>
        <TopicButton
              text="Back to Topics"
              onPress={this.goMenu}
              txtColor={global.text}
        ></TopicButton>
        <MMButton
            img={right}
            txtColor={global.text}
            onPress={this.handleNextNav}
        ></MMButton>
    </View>

<ScrollView>

    <Text allowFontScaling={true} style={CoreStyle.title}> {this.props.navigation.getParam('topic') + " Resources"}: </Text>

    <View style={CoreStyle.center}>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[0].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[0].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[1].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[1].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[2].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[2].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[3].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[3].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[4].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[4].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[5].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[5].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <TouchableOpacity onPress={() => Linking.openURL(srcs[6].src)}>
         <Text allowFontScaling={true} style={{textDecorationLine:'underline', color:'blue'}}>{srcs[6].text}</Text>
    </TouchableOpacity>

    <Text allowFontScaling={true}> {'\n'} </Text>

    <MainButton
          text={"Go to " + this.props.navigation.getParam('topic')}
          onPress={() => this.goInformation(this.props.navigation.getParam('topic'))}
          txtColor={global.text}
    ></MainButton>
    </View>
</ScrollView>

    <View style = {CoreStyle.pushdown}>
    <Navbar navigation={this.props.navigation}/>
    </View>

    </ImageBackground>
    );
  }
}
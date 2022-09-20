import React, {Component} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, ButtonGroup } from "react-native";
import Background from "../assets/bg.png";
import BackButton from "../components/BackButton";
import MainButton from "../components/MainButton";
import MediaButton from "../components/MediaButton";
import Navbar from "../components/NavBar";
import QuizButton from "../components/QuizButton";
import { CoreStyle } from "../components/CoreStyle";
import { Quizzes } from "../QAbank.json";

var burnCount = 0;
var burnScore = 0;
var lastC = false;
var burnQs = Quizzes.burnQs;

export default class BurnR extends Component{
    constructor(){
        super();
        burnCount = 0;
        burnScore = 0;
        burnQs = burnQs.sort(() => Math.random() - 0.5);
        var question = burnQs[burnCount].Q;
        this.state = {
            prevState: {
                qNum: "Question " + (burnCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            },
            qNum: "Question " + (burnCount+1),
            Q: question.q,
            answers: [
                {a: question.answers[0].a, id: question.answers[0].id },
                {a: question.answers[1].a, id: question.answers[1].id },
                {a: question.answers[2].a, id: question.answers[2].id },
                {a: question.answers[3].a, id: question.answers[3].id },
            ],
        };
    };

    reRender = () => {

        if (this.b1.state.buttonColor == "green" || this.b2.state.buttonColor == "green" || this.b3.state.buttonColor == "green" || this.b4.state.buttonColor == "green") {
            burnScore++;
            lastC = true;
        } else {
            lastC = false;
        }
        if (burnCount < burnQs.length-1) {
            burnCount++;
            var question = burnQs[burnCount].Q;
            this.setState({
                prevState: {
                    qNum: this.state.qNum,
                    Q: this.state.Q,
                    answers: [
                        {a: this.state.answers[0].a, id: this.state.answers[0].id },
                        {a: this.state.answers[1].a, id: this.state.answers[1].id },
                        {a: this.state.answers[2].a, id: this.state.answers[2].id },
                        {a: this.state.answers[3].a, id: this.state.answers[3].id },
                    ],
                },
                qNum: "Question " + (burnCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            });
            this.b1.setState({buttonColor: global.color2});
            this.b2.setState({buttonColor: global.color2});
            this.b3.setState({buttonColor: global.color2});
            this.b4.setState({buttonColor: global.color2});
        } else {
            this.props.navigation.navigate("Win", {
                score: burnScore,
                total: burnQs.length,
                text: "Burns",
            });
        }
    };

    deRender = () => {
        if (burnCount == 0) {
            this.props.navigation.navigate("Review");
            return;
        }
        burnCount--;
        var question = burnQs[burnCount].Q;
        if (burnScore > 0  && lastC == true) {
            burnScore--;
        }
        if (burnCount > 0) {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: burnQs[burnCount-1].Q.q,
                     answers: [
                         {a: burnQs[burnCount-1].Q.answers[0].a, id: burnQs[burnCount-1].Q.answers[0].id},
                         {a: burnQs[burnCount-1].Q.answers[1].a, id: burnQs[burnCount-1].Q.answers[1].id},
                         {a: burnQs[burnCount-1].Q.answers[2].a, id: burnQs[burnCount-1].Q.answers[2].id},
                         {a: burnQs[burnCount-1].Q.answers[3].a, id: burnQs[burnCount-1].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (burnCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            });
        } else {
            this.setState({
                prevState: {
                     qNum: this.state.prevState.qNum,
                     Q: burnQs[0].Q.q,
                     answers: [
                         {a: burnQs[0].Q.answers[0].a, id: burnQs[0].Q.answers[0].id},
                         {a: burnQs[0].Q.answers[1].a, id: burnQs[0].Q.answers[1].id},
                         {a: burnQs[0].Q.answers[2].a, id: burnQs[0].Q.answers[2].id},
                         {a: burnQs[0].Q.answers[3].a, id: burnQs[0].Q.answers[3].id},
                     ],
                 },
                qNum: "Question " + (burnCount+1),
                Q: question.q,
                answers: [
                    {a: question.answers[0].a, id: question.answers[0].id },
                    {a: question.answers[1].a, id: question.answers[1].id },
                    {a: question.answers[2].a, id: question.answers[2].id },
                    {a: question.answers[3].a, id: question.answers[3].id },
                ],
            });
        }
        this.b1.setState({buttonColor: global.color2});
        this.b2.setState({buttonColor: global.color2});
        this.b3.setState({buttonColor: global.color2});
        this.b4.setState({buttonColor: global.color2});
    }

  render(){

      var randomburnQs =  this.state.answers.sort(() => Math.random() - 0.5);

      return (
        <ImageBackground source={global.bg} style={CoreStyle.image}>

        <View style={CoreStyle.topnavbuttons}>
            <BackButton onPress={this.deRender}
                  text="<"
                  txtColor={global.text}
            ></BackButton>
            <MediaButton
                  text="Back to Review"
                  onPress={() => this.props.navigation.navigate("Review")}
                  txtColor={global.text}
            ></MediaButton>
            <BackButton onPress={this.reRender}
                  text=">"
                  txtColor={global.text}
            ></BackButton>
        </View>

        <Text allowFontScaling={true} style={CoreStyle.title}> {this.state.qNum} </Text>
        <Text allowFontScaling={true}> {'\n'} </Text>
        <Text allowFontScaling={true} style={CoreStyle.subtitle}> {this.state.Q} </Text>

        <View style={CoreStyle.quizContainer}>
        <QuizButton
          id={randomburnQs[0].id}
          text={randomburnQs[0].a}
          ref = {ref => this.b1 = ref}
        ></QuizButton>
        <QuizButton
          id={randomburnQs[1].id}
          text={randomburnQs[1].a}
          ref = {ref => this.b2 = ref}
        ></QuizButton>
        <QuizButton
          id={randomburnQs[2].id}
          text={randomburnQs[2].a}
          ref = {ref => this.b3 = ref}
        ></QuizButton>
        <QuizButton
          id={randomburnQs[3].id}
          text={randomburnQs[3].a}
          ref = {ref => this.b4 = ref}
        ></QuizButton>
        </View>

        <View style={CoreStyle.row}>
        <MainButton
            text="Go to Burns"
            onPress={() => this.props.navigation.navigate("Burns")}
        ></MainButton>
        </View>

        <View style = {CoreStyle.pushdown}>
        <Navbar navigation={this.props.navigation}/>
        </View>

        </ImageBackground>
      );
  }
}
import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import ppd2 from "../assets/parentalHealthMM/ppd2.png";
import ppd3 from "../assets/parentalHealthMM/ppd3.png";
import BackButton from "../components/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/MediaButton";
import MMButton from "../components/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";

export default function ParentalHealth({ navigation }) {
    //NAV CALLBACK
    const goHome = () => {
        navigation.pop();
    };
    const handleLastNav = () => {
        navigation.navigate("Traffic");
    };
    const handleParentalHealthSourcesNav = () => {
        navigation.navigate("ParentalHealthSources");
    };
    const handleParentsMMNav = () => {
        navigation.navigate("ParentalHealthMM");
    };
    const backToInfo = () => {
        navigation.navigate("Info");
    };

    return (
    <ImageBackground source={Background} style={styles.image}>

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
    </View>

    <ScrollView>

    <Image style={styles.headimg} source={ppd2}/>

    <Text style={CoreStyle.title}> Parental Health </Text>
    <Text style={CoreStyle.subtitle}> Baby Blues or Postpartum Depression? </Text>

    <Text style={CoreStyle.content}>
        {'\t'} In the first few weeks of caring for a newborn, most new moms feel anxious, sad, frustrated, tired, and overwhelmed.
        Sometimes known as the "baby blues," these feelings get better within a few weeks. But for some women, they are very strong 
        or don't get better. Postpartum depression is when these feelings don't go away after about 2 weeks or make it hard for a 
        woman to take care of her baby. [1] Rarely, an extreme mood disorder called postpartum psychosis also may develop after 
        childbirth. Postpartum depression isn't a character flaw or a weakness. Sometimes it's simply a complication of giving birth. 
        If you have postpartum depression, prompt treatment can help you manage your symptoms and help you bond with your baby. [2] {'\n'}
    </Text>

    <Text style={CoreStyle.subtitle}> Symptoms for Either Parent</Text>

    <CollapsibleBox header="1. Signs and Symptoms of Baby Blues for Either Parent [2]"
    headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>- Mood swings {'\n'}
        - Anxiety {'\n'}
        - Sadness {'\n'}
        - Irritability {'\n'}
        - Feeling overwhelmed {'\n'}
        - Crying {'\n'}
        - Reduced concentration {'\n'}
        - Appetite problems {'\n'}
        - Trouble sleeping {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="2. Signs and Symptoms of Postpartum Depression for Mothers [1]"
    headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>- Feeling sad, hopeless, or overwhelmed {'\n'}
        - Feeling worried, scared, angry, or panicked {'\n'}
        - Feelings of guilt or inadequacy {'\n'}
        - Excessive crying {'\n'}
        - Depressed modd or severe mood swings {'\n'}
        - Sleeping too much or too little {'\n'}
        - Eating too much or too little {'\n'}
        - Trouble concentrating {'\n'}
        - Wanting isolation from friends and family {'\n'}
        - Not feeling attached to the baby {'\n'}
        - Withdrawal from activities you usually find enjoyable {'\n'}
        - Fear that you're not a good mother [2] {'\n'}
        - Recurrent thoughts of death or suicide {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="3. Additional Signs and Symptoms of Postpartum Psychosis for Mothers [1]"
    headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>- Thoughs of hurting the baby or yourself {'\n'}
        - Hearing voices, seeing things that are not there, or feeling paranoid (very worried, suspicious, or mistrustful) {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="4. Postpartum Depression for Fathers [2]"
    headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>New fathers can experience postpartum depression, too. They may feel sad or fatigued, 
        be overwhelmed, experience anxiety, or have changes in their usual eating and sleeping patterns, the same symptoms 
        moths with postpartum depression experience. {'\n'}
        Fathers who are young, have a history of depression, experience relationship problems, or are struggling financially 
        are most at risk of postpartum depression. Paternal postpartum depression can have the same negative effect on partner 
        relationships and child development as postpartum depression in mothers can. {'\n'}
        </Text>
    </CollapsibleBox>

    <Image style={styles.headimg} source={ppd3}/>

    <Text style={CoreStyle.subtitle}> Long-Term Effects of Untreated Postpartum Depression [2] </Text>

    <CollapsibleBox header="1. For Mothers"
    headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>Untreated postpartum depression can last for months or longer, sometimes becoming 
        a chronic depressive disorder. Even when treated, postpartum depression increases a woman's risk of future episodes 
        of major depression. {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="2. For Fathers"
    headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>Postpartum depression can have a ripple effect, causing emotional strain for everyone 
        close to a new baby. When a new mother is depressed, the risk of depression in the baby's father may also increase. 
        New dads are already at increased risk of depression, whether or not their partner is affected. {'\n'}
        </Text>
    </CollapsibleBox>

    <CollapsibleBox header="3. For Children"
    headerstyle={CoreStyle.bullet}>
        <Text style={CoreStyle.subbullet}>Children of mothers who have untreated postpartum depression are more likely to have 
        emotional and behavioral problems, such as sleeping and eating difficulties, excessive crying, and delays in 
        language development. {'\n'}
        </Text>
    </CollapsibleBox>

    <View style={styles.buttons}>
    <MMButton
        onPress={handleParentsMMNav}
    ></MMButton>

    <SourcesButton
        txtColor={"black"}
        onPress={handleParentalHealthSourcesNav}
    ></SourcesButton>
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
        justifyContent: "center",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
    },
    headimg: {
        height: 150,
        width: 150,
        alignSelf: "center",
    },
    page: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        fontStyle: "italic",
    },
});

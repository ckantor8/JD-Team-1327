import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Background from "../assets/bg.png";
import berries from "../assets/PoisoningsMM/berries.png";
import house from "../assets/PoisoningsMM/house.png";
import pills from "../assets/PoisoningsMM/Pill.png";
import BackButton from "../components/BackButton";
import CollapsibleBox from "../components/CollapsibleBox";
import MediaButton from "../components/MediaButton";
import MMButton from "../components/MMButton";
import Navbar from "../components/NavBar";
import SourcesButton from "../components/SourcesButton";
import { CoreStyle } from "../components/CoreStyle";
import poison_hdr from "../assets/poison_hdr.png";

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
        <BackButton
            text=">"
            txtColor={"black"}
            onPress={handleNextNav}
        ></BackButton>
    </View>
    
    <ScrollView>

    <Text style={CoreStyle.title}> Poisonings  </Text>

    <Image style={styles.headimg} source={poison_hdr}/>

    <Text style={CoreStyle.subtitle}>Tips to prevent child poisoning:</Text>

        <CollapsibleBox header="1. Be cognizant of where you leave all medicine and pill bottles" headerstyle={CoreStyle.bullet}>
            <Image style={styles.pillImg} source={pills}/> 
            <Text style={CoreStyle.subbullet}> - Keep medicines in their original containers. People can often lose track medicine if they switch the container 
            it is in which can lead to the accidental ingestion of medicine. {'\n'}
            - Keep medicines and other dangerous substances at a height above eye level for children.
            Children will often grab anything that appeals to them, so keeping potentially harmful substances out of their range of view 
            will prevent them from attempting to consume them. {'\n'}
            - Secure child safety locks on things such as medicines. In the case that a child is able
            to grab a bottle of medicine, the child safety lock will prevent them from accessing the pills inside.{'\n'}
            </Text>
         </CollapsibleBox>
        
         <CollapsibleBox header="2. Be aware of potentially dangerous materials being left around children" headerstyle={CoreStyle.bullet}>
            <Image style={styles.houseImg} source={house}/>
            <Text style={CoreStyle.subbullet}> - Put away all potential hazardous materials right after use to ensure a 
            child does not have time to take themselves. A large portion of poisonings occur due to parents or caretakers
            being careless and unaware of the dangerous things left around their children. Being more careful about putting 
            things such as cosmetics, plastics, and cleaning supplies could help prevent children from consuming potent items. </Text>
        </CollapsibleBox>
        
        <CollapsibleBox header="3. Ensure that you are familiar with all potential dangers both inside and outside the home" headerstyle={CoreStyle.bullet}>
            <Image style={styles.berriesImg} source={berries}/>
            <Text style={CoreStyle.subbullet}> - Make sure all natural gas based appliances are functioning correctly. 
            As more of a general safety tip, ensuring that these appliances are functioning correctly will reduce the 
            chance of poisonings for both children and adults. {'\n'}
            - Ensure that you have functioning carbon monoxide and smoke detectors.
            These are critical because both of these can detect hazards that occur silently. {'\n'}
            - Memorize the poison help number (1-800-222-1222). This 24/7 line can connect you to an
            expert in the case that you suspect a child has been poisoned. {'\n'}
            - Familiarize yourself with the plants in and outside of your home, especially if
            you live near plants that produce bright or noticeable berries that could be poisonous. Children will be attracted to 
            plants that look appealing, such as holly and juniper berries. Canvas the outside of your home or ask a professional to 
            make sure that you are familiar with all the plant species in the vicinity of your home. Remove or relocate any poisonous plants 
            to ensure your child does not consume its berries. {'\n'}
            - Check your home for lead paint that can chip off. Lead poisoning can be difficult to detect,
            and so either get an expert of check yourself to see if your home contains this kind of paint. Lead paint and dust is more 
            common among older buildings, so be sure to check if your home fits this criteria. {'\n'}
            </Text>
         </CollapsibleBox>

        <Text style={CoreStyle.subtitle}> {'\n'} How common are poisonings? </Text>
            <Text style={CoreStyle.content}>
            {'\t'} In 2020 and 2021, there have been over 385,000 cases of child poisonings for children aged 6 and below,
             with over 250,000 of these being for children aged 2 and under
             . Children 6 and under are disproportionately at risk for poisonings, as statistics from Poison Control show that
             the next age group with the most cases were adults between 20 and 29 with over 71,000 cases, almost 5 times less than the children.
             Specifically, 85% of all cases were caused by poison being ingested through the mouth, and the main culprits for these cases among
             small children were cosmetics and cleaning substances. {'\n'}
            </Text>


        <Text style={CoreStyle.subtitle}> How can we prevent poisonings? </Text>
            <Text style={CoreStyle.content}>
            {'\t'} Findings show that doing seemingly small things, such as ensuring that medicines are stored out
            of reach or putting them away immediately after use, could reduce the amount of poisonings per year between 11% and 20%.
             Overall, the majority of practices to prevent poisonings come down to caretakers having more awareness and being more
             attentive since poisonings due to other sources are very low.
            {'\n'}
            </Text>

        <View style={styles.buttons}>

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
    pillImg: {
        height: 150,
        width:130,
        alignSelf: "center",
        marginTop: 20,
    },
    
    buttons: {
        display: "flex",
        flexDirection: "row",
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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }, 
    content: {
        fontSize: 16,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
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
    headimg: {
        height: 150,
        width: 65,
        alignSelf: "center",
    },
});

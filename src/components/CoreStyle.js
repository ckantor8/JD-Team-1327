import { StyleSheet, Dimensions } from "react-native";

// This is meant to be a core, shared style library for styles to encourage consistency
// and code reuse throughout the app.

const MAX_HEIGHT = Dimensions.get("screen").height;
const MAX_WIDTH = Dimensions.get("screen").width;

if (global.scheme == "dark") {
    global.color = "darkslategrey";
    global.color2 = "lightslategray";
    global.color3 = "black";
    global.text = "white";
} else {
    global.color = "ivory";
    global.color2 = "powderblue";
    global.color3 = "lightgray";
    global.text = "black";
}

export const CoreStyle = StyleSheet.create({

    // background image formatting
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },

    //Landing Page Styling Components
    logo: {
      height: "30%",
      resizeMode: "contain",
      marginTop: 10,
      alignItems: "center",
      alignSelf: "center",
    },
    landingCrayon: {
      height: MAX_HEIGHT/17,
      width:MAX_WIDTH*0.9,
      marginBottom: MAX_HEIGHT/28.3,
    },
    //crayon styling only for buttons on initial module pages
    crayon: {
        height: MAX_HEIGHT/17,
        width: MAX_WIDTH*0.9,
        marginVertical: MAX_HEIGHT/25,
    },
    //buttonContainer for housing crayon section buttons on module pages
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        paddingVertical: 30,
    },
    menuContainer: {
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        paddingVertical: 50,
    },
    tmenuContainer: {
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        paddingVertical: 25,
    },
    btn: {
      height: 35,
      width: 35,
      borderRadius: 100,
      backgroundColor: global.color,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      shadowOffset : { width: 0, height: 4},
    },
    mute_view: {
      height: 35,
      width: 35,
      borderRadius: 100,
      backgroundColor: global.color,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      shadowOffset : { width: 0, height: 4},
      borderColor: "black",
      borderWidth: 3,
      alignItems: "center",
      justifyContent: "center",
    },
    mute_btn: {
      height: 20,
      width: 20,
      borderRadius: 100,
    },

    // Main header/title text for info, media pages etc.
    title: {
        color: global.text,
        fontSize: 40,
        marginBottom: 15,
        fontWeight: "900",
        textAlign: "center",
        textDecorationLine: "underline",
    },
    title2: {
        color: global.text,
        fontSize: 30,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
        marginHorizontal: 0,
    },
    title3: {
        color: global.text,
        fontSize: 40,
        marginTop: 25,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
        marginHorizontal: 0,
    },

    // Secondary headers for subsections
    subtitle: {
        color: global.text,
        fontSize: 26,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "800",
        fontStyle: "italic",
        marginHorizontal: 10,
    },

    // Main header/title text for info, media pages etc.
    qNum: {
        color: global.text,
        fontSize: MAX_HEIGHT/21.275,
        marginBottom: 5,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
    },

    // Secondary headers for subsections
    question: {
        color: global.text,
        fontSize: MAX_HEIGHT/32.73,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
        marginHorizontal: 10,
    },

    // Small text
    content: {
        color: global.text,
        fontSize: 18,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        textAlign: "justify",
        lineHeight: 25,
    },

    // Good size for big bullet points, works well as header for collapsible box
    bullet: {
        color: global.text,
        fontSize: 22,
        fontWeight: "600",
        marginHorizontal: 20
    },

    //Good size for small sub-bullet points, works well as body for collapsible box
    subbullet: {
        color: global.text,
        fontSize: 18,
        marginHorizontal: 30,
        marginVertical: 15,
        textAlign: "justify",
        lineHeight: 23,
    },

    // box for the back buttons and source button at top of info pages (prev called btns)
    topnavbuttons: { 
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: "space-between",
    },

    // text style for module page titles
    moduleText: {
      color: global.text,
      fontSize: 40,
      marginTop: 30,
      marginBottom: 30,
      marginHorizontal: 10,
      fontWeight: "bold",
      textAlign: "center",
    },

    note: {
        color: global.text,
        textAlign: "center",
        fontWeight: "italic",
        fontSize: 15,
        marginTop: -45,
        marginBottom: 25,
        alignSelf: "center",
    },

    // pushdown style to keep navigation bar at bottom of screen
    pushdown: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: global.color,
    },
    // special container for level select screen
    levelContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent",
    },

    // Container for Multimedia pages
    mediaContainer: {
        alignItems: "center",
        marginHorizontal: 0,
        width: "100%",
    },

    // style for "Go to Topic" button views in Multimedia
    TopicButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -20,
        marginBottom: 75,
    },

    // style for "Go to Topic" button views in Multimedia
    topicButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        marginBottom: 25,
    },

    // style for the sources and media buttons at the end of info sections
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: MAX_WIDTH*0.05,
        marginTop: 10,
        marginBottom: 75,
    },

    // header image style for most of info sections
    headimg: {
        height: 175,
        width: 175,
        resizeMode: "contain",
        alignSelf: "center",
    },

    // styling for Information module image
   img: {
        height: 150,
        width: 150,
        resizeMode: "contain",
        alignSelf: "center",
        marginVertical: 5,
    },

    // image viewer sizing
    imgview: {
        height: 475,
        width: "95%",
        marginBottom: 100,
        alignSelf: "center",
    },

    // random contain style for About/Disclaim
    contain: {
        marginHorizontal: 25,
    },

    // other random contain style for About/Disclaim
    container: {
      marginTop: 50,
      marginBottom: 25,
      marginHorizontal: 10,
    },

    leaderboard: {
      marginTop: 0,
      marginBottom: 0,
      height: MAX_HEIGHT*0.4,
      marginHorizontal: 10,
    },

    // Modal Text style for header content in About/Disclaim
    minorText: {
        marginTop: MAX_HEIGHT/5,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 10,
    },

    // text style for in-game About
    disclaimer: {
        fontSize: 10,
        marginHorizontal: 35,
        marginBottom: 10,
    },

    // text style for main menu Disclaim
    about: {
        fontSize: MAX_HEIGHT/71,
        marginHorizontal: 20,
    },

    // contain in a centered row
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    // leaderboard entry container
    board: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "powderblue",
        paddingVertical: 0,

    },
    entry: {
        color: global.text,
        fontSize: 26,
        marginVertical: 10,
        textAlign: "center",
        fontWeight: "bold",
        marginHorizontal: 10,
    },

    // contain in an uncentered row aka line
    line: {
          flex: 1,
          flexDirection: "row",
          marginVertical: 10,
    },

    // contain and center
    center: {
        alignItems: "center",
    },
    center2: {
        alignItems: "center",
        marginBottom: 75,
    },

    // text style for settings pages
    settingText: {
        color: global.text,
        height: 70,
        fontSize: 40,
        marginTop: 100,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
    },

    // container style for setting buttons
    settingContainer: {
        flex: 1,
        top: -80,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    // container style for answer choices in quizzes
    quizContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 65,
    },

    // style for textbox to submit score on quiz win screen
    textbox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
    },

    // container style for buttons on Game home screen
    homeContainer: {
        flex: 1,
        flexDirection: "row",
        top: 225,
        justifyContent: "center",
        alignSelf: "center",
    },

    //styling components for Saved and Search screens
    itemContainer: {
      width: '95%',
      alignItems: "center",
      alignSelf: "center",
      marginBottom: 120,
    },
    itemStyle: {
      backgroundColor: global.color2,
      padding: 20,
      fontSize: 16,
      textAlign: "justify",
      lineHeight: 20,
      margin: 10,
      borderRadius: 20,
      overflow: "hidden",
    },

    // invisible back button for spacing
    invisible: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderWidth: 0,
        shadowColor: 'transparent',
        shadowOpacity: 0.0,
        shadowRadius: 4,
        shadowOffset : { width: 0, height: 4},
        elevation: 7.5,
        marginTop: 10,
        marginBottom: 10,
      },

    // GAME STYLING COMPONENTS
    gameContain: {
      flex: 1,
      backgroundColor: "transparent",
    },
    gameContainer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 10,
      backgroundColor: "white",
      borderRadius: 5,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      fontWeight: "normal",
      textAlign: "justify",
      color: "black",
      fontSize: 14,
    },
    modalTitle: {
      marginBottom: 15,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 16,
    },
    pic: {
      height: 50,
      width: 50,
      alignSelf: "center",
    },
    howContain: {
      marginHorizontal: 60,
      marginTop: 150,
      flex: 1,
      flexDirection: "column",
    },
    badgeContainer: {
      flex: 1,
      backgroundColor: "#F7F7F7",
      marginTop: 60,
    },
    listItem: {
      margin: 10,
      padding: 10,
      backgroundColor: "transparent",
      width: "80%",
      flex: 1,
      alignSelf: "center",
      flexDirection: "row",
      borderRadius: 5,
    },
    contentArea: {
      backgroundColor: "transparent",
      height: ((Dimensions.get("screen").width / 10) * 4),
      marginHorizontal: 10,
      marginTop: 120,
    },
});
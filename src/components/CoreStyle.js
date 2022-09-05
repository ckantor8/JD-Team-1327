import { StyleSheet } from "react-native";

// This is meant to be a core, shared syle library for styles to encourage consistency
// and code reuse throughout the app.


export const CoreStyle = StyleSheet.create({

    // Main header/title text for info, media pages etc.
    title: { 
        fontSize: 40,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
        flex: 9
    },

    // Secondary headers for subsections
    subtitle: { 
        fontSize: 26,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
    },

    // Small text
    content: { 
        fontSize: 18,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        textAlign: "justify",
        lineHeight: 25,
    },

    // Good size for big bullet points, works well as header for collapsible box
    bullet: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 15,
        marginRight: 15
    },

    //Good size for small sub-bullet points, works well as body for collapsible box
    subbullet: {
        fontSize: 18,
        marginLeft: 35,
        marginRight: 30,
        textAlign: "justify",
        lineHeight: 23,
    },

    // box for the back buttons and source button at top of info pages (prev called btns)
    topnavbuttons: { 
        display: "flex",
        flexDirection: "row",
        marginTop: 30,
        marginHorizontal: 20,
        justifyContent: "space-between",
    },

    // 
    pushdown: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C4C4C4",
    },

})
import * as React from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
}
    from 'react-native';
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

export default class LoginScreen extends React.Component {

    constructor() {
        super();
        this.state = {

            email: "",
            password: "",

        }
    }

    signIn = async (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.replace("Dashboard");
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />



                <TextInput style={styles.textinput} placeholder='email'
                    placeholderTextColor={'white'}
                    onChangeText={(input) => {
                        this.setState({ email: input });
                    }}
                />

                <TextInput style={styles.textinput}
                    placeholder='password'
                    placeholderTextColor={'white'}
                    onChangeText={(input) => {
                        this.setState({ password: input });
                    }}
                />



                <TouchableOpacity
                    style={[styles.button, { marginTop: 20 }]}
                    onPress={() => this.signIn(email, password)}
                >
                    <Text>Login</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { marginTop: 20 }]}
                    onPress={() => {
                        this.props.navigation.replace('register')
                    }}
                >

                    <Text>New User? Sign up</Text>

                </TouchableOpacity>


            </View>
        )
    }
}


const styles = stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appIcon: {
        width: RFValue(200),
        height: RFValue(200),
        resizeMode: "contain",
        marginBottom: RFValue(20)
    },
    appTitleText: {
        color: "white",
        textAlign: "center",
        fontSize: RFValue(40),
        marginBottom: RFValue(20)
    },
    textinput: {
        width: RFValue(250),
        height: RFValue(40),
        padding: RFValue(10),
        marginTop: RFValue(10),
        borderColor: "#FFFFFF",
        borderWidth: RFValue(4),
        borderRadius: RFValue(10),
        fontSize: RFValue(15),
        color: "#FFFFFF",
        backgroundColor: "#000000"
    },
    button: {
        width: RFValue(250),
        height: RFValue(50),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RFValue(30),
        backgroundColor: "white",
        marginBottom: RFValue(20)
    },
    buttonText: {
        fontSize: RFValue(24),
        color: "#000000"
    },
    buttonTextNewUser: {
        fontSize: RFValue(12),
        color: "#FFFFFF",
        textDecorationLine: 'underline'
    }
})
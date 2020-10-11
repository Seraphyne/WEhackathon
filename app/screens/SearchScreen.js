import React from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

function SearchScreen(props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Find a mentor..."
                name="email"
                autoCapitalize = "none"
            />
            <ScrollView>
                <View style={styles.flex}>
                    <View style={styles.child}>
                        <View style={styles.box}></View>
                        <Text style={styles.text}>
                            Mentor Name {"\n"}
                            Mentor Location{"\n"}
                            Mentor Interests: Technology, Business, Healthcare
                        </Text>
                    </View>
                    <View style={styles.child}>
                        <View style={styles.box}></View>
                        <Text style={styles.text}>
                            Mentor Name {"\n"}
                            Mentor Location{"\n"}
                            Mentor Interests: Technology, Business, Healthcare
                        </Text>
                    </View>
                    <View style={styles.child}>
                        <View style={styles.box}></View>
                        <Text style={styles.text}>
                            Mentor Name {"\n"}
                            Mentor Location{"\n"}
                            Mentor Interests: Technology, Business, Healthcare
                        </Text>
                    </View>
                    <View style={styles.child}>
                        <View style={styles.box}></View>
                        <Text style={styles.text}>
                            Mentor Name {"\n"}
                            Mentor Location{"\n"}
                            Mentor Interests: Technology, Business, Healthcare
                        </Text>
                    </View>
                    <View style={styles.child}>
                        <View style={styles.box}></View>
                        <Text style={styles.text}>
                            Mentor Name {"\n"}
                            Mentor Location{"\n"}
                            Mentor Interests: Technology, Business, Healthcare
                        </Text>
                    </View>
                    <View style={styles.child}>
                        <View style={styles.box}></View>
                        <Text style={styles.text}>
                            Mentor Name {"\n"}
                            Mentor Location{"\n"}
                            Mentor Interests: Technology, Business, Healthcare
                        </Text>
                    </View>
                    <View style={styles.child}>
                        <View style={styles.box}></View>
                        <Text style={styles.text}>
                            Mentor Name {"\n"}
                            Mentor Location{"\n"}
                            Mentor Interests: Technology, Business, Healthcare
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#ffdbdc'
    },
    input: {
        backgroundColor: '#fff',
        width: 300,
        height: 40,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        margin: 15,
    },
    flex: {
        flex: 1,
    },
    child: {
        flex: 8,
        flexDirection: 'row',
        padding: 30,
    },
    box: {
        backgroundColor: '#aaaaaa',
        height: 100,
        width: 100,
    },
    text: {
        paddingLeft: 15,
        flexShrink: 1,
    }
})

export default SearchScreen;

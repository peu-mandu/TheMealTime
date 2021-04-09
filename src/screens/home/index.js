import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import logo_react from '../../assets/Onboarding.png';
import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonElement from '../../components/elements/button/button';

const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'darker-content'}
            />
            <ScrollView style={backgroundStyle}>
                <Text>nothing, ainda</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

let height = Dimensions.get('window');
// console.log(height['height'])
const styles = EStyleSheet.create({
    $height: height['height'],
    $width: height['width'],
    container: {
        minHeight: '$height',
    },
    imageView: {
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: '2rem',
        alignItems: 'center',
        textAlign: 'center',
    },
    logo: {
        alignItems: 'center',
    },
    title: {

        fontSize: '1.3rem',
        fontFamily: 'inter',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: '-0.3rem',
        // marginTop: '3rem',
    },
    text: {
        width: '14.06rem',
        height: '3.36rem',
        fontSize: '1.06rem',
        textAlign: 'center',
        marginTop: '.5rem',
        // marginTop: '1rem',
        fontWeight: '500',
        opacity: 0.5,
    },
    button: {
        marginTop: 20
        // marginTop: 72
    },
});

export default HomeScreen;

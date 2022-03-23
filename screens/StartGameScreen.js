import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 20,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#72063c',
        elevation: 4, // android only property
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 }, // to add shadow for iOS, affects android too
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
});
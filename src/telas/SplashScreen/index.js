import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Onboarding' }]
            });
        }, 3000); // Tempo limite de 5 segundos

        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.container}>
            <LottieView style={styles.animacao}
                source={require('../../assets/splash-aluramed.json')}
                autoPlay
                loop={false} // Desativa o loop da animação
            />
        </View>
    );
}

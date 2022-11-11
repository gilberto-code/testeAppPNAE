import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';


export default function CardapioHoje(){
    const navigation = useNavigation();

    function navigateToCardapioHoje(){
        navigation.navigate('CardapioHoje');
    }

    function navigateToCardapiosFuturos(){
        navigation.navigate('ProximosCardapios');
    }

    function navigateToInfoUsuario(){
        navigation.navigate('InfoUsuario');
    }
    return(
        <View style={styles.bottomTab}>
            <TouchableOpacity 
                onPress={navigateToCardapiosFuturos}
                style={styles.bottomTabButton}
            >
                <Feather name="calendar" size={25} color={colors.darkViolet}/>
                {/* <Text style={styles.bottomTabText}>Cardápios Futuros</Text> */}
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={navigateToCardapioHoje}
                style={styles.bottomTabButton}
            >
                <Feather name="home" size={25} color={colors.darkViolet}/>
                {/* <Text style={styles.bottomTabText}>Cardápio do Dia</Text> */}
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={navigateToInfoUsuario}
                style={styles.bottomTabButton}
            >
                <Feather name="user" size={25} color={colors.darkViolet}/>
                {/* <Text style={styles.bottomTabText}>User</Text> */}
            </TouchableOpacity>
        </View>
    );
}
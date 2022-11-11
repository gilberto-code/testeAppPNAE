import React, { useEffect, useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import requestUser from './requestUser';

import BottomTab from '../../components/BottomTab';



export default function InfoUsuario() {
    const [numMatricula, setNumMatricula] = useState();
    const [nome, setNome] = useState();
    const [urlFoto, setUrlFoto] = useState();
    const [urlQR, setUrlQR] = useState();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);


    function navigateToSignUp(){
        navigation.navigate('Register');
    }
    async function loadInfo(){
        if(loading){
            return;
        }

        setLoading(true);
        const asNumMatricula = await AsyncStorage.getItem('NUM_MATRICULA');
        console.log(asNumMatricula);
        const response = await requestUser(asNumMatricula);
        console.log(response);
        
        setNumMatricula(response[0].numMatricula);
        setNome(response[0].nome);
        setUrlFoto(response[0].urlFoto);
        
        setUrlQR(response[0].urlImagemQR);
        setLoading(false);
    }

    useEffect(() => {
        loadInfo();
    }, []);
    
    
    return(
        <View style={styles.container}>
            <BottomTab/>
            
            
            <SafeAreaView>
                <ScrollView>
                    <Image
                        style={styles.imagem}
                        resizeMode="cover"
                        
                        source={{
                        uri:urlFoto,
                        }}
                    />
                    <View style={styles.textGroup}>
                        <Text style={styles.label}>Nome:</Text>
                        <Text style={styles.text}>{nome}</Text>
                    </View>

                    <View style={styles.textGroup}>
                        <Text style={styles.label}>Número de Matrícula:</Text>
                        <Text style={styles.text}>{numMatricula}</Text>
                    </View>

                    <View style={styles.textGroup}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.text}>{numMatricula}</Text>
                    </View>

                    <View style={styles.textGroup}> 
                        <Text style={styles.label}>Meu QR Code:</Text>
                        <Image
                            style={styles.qrCode}
                            resizeMode="contain"
                            
                            source={{
                            uri:urlQR,
                            }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
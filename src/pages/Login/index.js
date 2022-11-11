import React, { useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from "react-native";

import styles from './styles';
import api from "../../services/api";





export default function Login() {
    const [numMatricula, setNumMatricula] = useState();
    const [senha, setSenha] = useState();
    const navigation = useNavigation();

    function navigateToSignUp(){
        navigation.navigate('Register');
    }

    function navigateToCardapioHome(){
        navigation.navigate('CardapioHoje');
    }

    async function handleLogin(){
        api.post("login.php", {
            data: {
                numMatricula: numMatricula,
                senha: senha
            }
        }).
        then((response)=>{
            if(response.data == 1){
                console.log(response.data)
                AsyncStorage.setItem('NUM_MATRICULA', numMatricula);
                navigateToCardapioHome();
            }else{
                Alert.alert(
                    "Ops ...",
                    "Número de matrícula ou senha incorretos",
                    [
                        { text: "OK"}
                    ],
                    { cancelable: false }
                );
            }
        })



    }
    
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.loginContainer}> 
                <Text style={styles.title}>Login</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Número de matrícula</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Número de matrícula'
                        keyboardType={'numeric'}
                        onChangeText={text => setNumMatricula(text)}
                    ></TextInput>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        style={styles.input} 
                        secureTextEntry={true} 
                        placeholder='Senha'
                        onChangeText={text => setSenha(text)}
                    ></TextInput>
                    <TouchableOpacity style={{marginTop:5}}>
                        <Text style={styles.linkText}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity 
                    style={styles.action}
                    onPress={handleLogin}
                >
                    <Text style={styles.actionText}>Entrar</Text>
                </TouchableOpacity>
                
               
                <TouchableOpacity 
                    style={{marginTop:20}} 
                    onPress={navigateToSignUp}
                >
                    <Text style={styles.linkText}>Não tenho uma conta</Text>
                </TouchableOpacity>
            
            </View>
        </KeyboardAvoidingView>
    );
}
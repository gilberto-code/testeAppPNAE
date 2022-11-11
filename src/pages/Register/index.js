import React, { useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';
import registerValidation from '../../services/registerValidation';
import api from "../../services/api";

export default function Register(){
    const [nome, setNome] = useState();
    const [numMatricula, setNumMatricula] = useState();
    const [email, setEmail] = useState();
    const [curso, setCurso] = useState();
    const [senha, setSenha] = useState();
    const navigation = useNavigation();
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(false);



    async function loadCursos(){
        if(loading){
            return;
        }

        setLoading(true);


        const response = await api.get(`selectCursos.php`);
        setCursos(response.data);
        setLoading(false);
    }

    useEffect(() => {
        loadCursos();
    }, []);

    function navigateToLogin(){
        navigation.navigate('Login');
    }

    function navigateBack(){
        navigation.goBack();
    }

    async function handleRegister(){
        const data = {
            nome,
            numMatricula,
            email,
            curso,
            senha
        }
        const response =  await registerValidation(data);
        console.log(response);
        if(response){
            //navigateToLogin();
            
        }else{
            Alert.alert(
                "Ops ...",
                "Erro no cadastro, tente novamente.",
                [
                  { text: "OK"}
                ],
                { cancelable: false }
            );
        }
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.loginContainer}> 
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Nome'
                        onChangeText={text => setNome(text)}
                    ></TextInput>
                </View>
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
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Email'
                        keyboardType={'email-address'}
                        onChangeText={text => setEmail(text)}
                    ></TextInput>
                </View>
                <View style={styles.inputGroup}> 
                    <Text style={styles.label}>Curso</Text>
                    <View style={styles.pickerView}>
                        <Picker 
                            style={styles.picker}
                            selectedValue={curso}
                            onValueChange={text => setCurso(text)}
                        >    
                            <Picker.Item label="Escolha o seu curso" value="" color='#ccc'></Picker.Item>
                            {cursos.map((curso, index)=><Picker.Item key={index} label={curso.nome} value={curso.id}>{curso.nome}</Picker.Item>)}
                            
                        </Picker>
                    </View>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        style={styles.input} 
                        secureTextEntry={true} 
                        placeholder='Senha'
                        onChangeText={text => setSenha(text)}
                    ></TextInput>
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity 
                        style={styles.actionSecondary}
                        onPress={navigateBack}
                    >
                        <Text style={styles.actionTextSecondary}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.actionPrimary}
                        onPress={handleRegister}
                    >
                        <Text style={styles.actionTextPrimary}>Registrar</Text>
                    </TouchableOpacity>    
                </View>
            </View>
            
        </KeyboardAvoidingView>
    );
}
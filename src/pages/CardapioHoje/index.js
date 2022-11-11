import React, { useEffect, useState} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from "../../services/api";

import styles from './styles';

import BottomTab from '../../components/BottomTab';

export default function CardapioHoje(){
    const [cardapioHoje, setCardapioHoje] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [nomeCard, setNomeCard] = useState();
    const [descricao, setDescricao] = useState();


    async function loadCardapio(){        

        setLoading(true);

        const response = await api.get(`selectCardDia.php`);
        if(response.data.length == 0){

        }else{
            console.log(response.data);
            setCardapioHoje(response.data);
            setDescricao(response.data[0].descricao);
            setNomeCard(response.data[0].nome);
        }
    }

    useEffect(() => {
        loadCardapio();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text style={styles.label}>{item.codAlimento}</Text>
            {/* <Text>{item.nomeAlimento}</Text> */}
            <Image
                style={styles.imagem}
                resizeMode='center'
                
                source={{
                uri:item.urlFoto,
                }}
            />
        </View>
      );
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cardápio do Dia</Text>
            
            <View style={styles.textGroup}>
                <Text style={styles.label}>Nome do Cardápio:</Text>
                <Text style={styles.text}>{nomeCard}</Text>
            </View>
            <View style={styles.textGroup}>
                <Text style={styles.label}>Descrição do Cardápio:</Text>
                <Text style={styles.text}>{descricao}</Text>
            </View>
            
            <FlatList
                style={{maxHeight:250}}
                data={cardapioHoje}
                renderItem={renderItem}
                keyExtractor={item => item.codAlimento}
                horizontal
            />
            <BottomTab/>
        </View>
    );
}
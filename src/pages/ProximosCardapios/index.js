import React, { useEffect, useState} from 'react';
import { View, Text, Image,SafeAreaView,ScrollView, TouchableOpacity, FlatList} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from "../../services/api";


import styles from './styles';

import BottomTab from '../../components/BottomTab';


export default function ProximosCardapios(){
    const [cardapios, setCardapios] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    async function loadCardapios(){        
        if(loading){
            return;
        }
        setLoading(true);


        const response = await api.get(`selectCardapioSemana.php`);
        console.log(response.data);
        //console.log("--------------------------------------------");
        setCardapios(response.data);
        
        
       //console.log(cardapioHoje[0].urlFoto);

        setLoading(false);
    }

    useEffect(() => {
        loadCardapios();
    }, []);

    // useEffect(() => {
    //     loadAlimentosDoDia();
    // }, []);
    const renderItem = ({ item }) => (
        <View style={styles.listAlimentoItem}>
            <Text style={styles.label}>{item.codAlimento}</Text>
            <Text style={styles.label}>{item.nomeAlimento}</Text>
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
            <BottomTab/>
            <SafeAreaView>
                <ScrollView>
                    <Text style={styles.title}>Próximos Cardápios</Text>
                    <View>
                        <FlatList 
                            nestedScrollEnabled={true}
                            data={cardapios}
                            keyExtractor={item => item.idPlan}
                            renderItem={({ item }) => (
                                <View style={styles.listCardItem}>
                                    <View style={styles.textGroup}>
                                        <Text style={styles.label}>Data do cardapio:</Text>
                                        <Text style={styles.text}>{item.data}</Text>
                                    </View>
                                    <View style={styles.textGroup}>
                                        <Text style={styles.label}>Descrição:</Text>
                                        <Text style={styles.text}>{item.descricao}</Text>
                                    </View>
                                    
                                   
                                    <FlatList 
                                        nestedScrollEnabled={true} 
                                        style={styles.listAlimento}
                                        data={item.alimentos}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.codAlimento}
                                        horizontal
                                    />
                                </View>
                            )}

                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
 
            
            
 
        </View>
    );
}
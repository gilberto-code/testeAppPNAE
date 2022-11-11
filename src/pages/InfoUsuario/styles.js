import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop:  Constants.statusBarHeight,  
        paddingBottom: 70,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.darkViolet,
        marginBottom:25,
        alignSelf:'center'
    },
    textGroup:{
        marginBottom:15,
        width:'100%'
    },
    label:{
        fontSize:12,
        fontWeight: 'bold',
        color:colors.darkViolet,
    },
    text:{
        fontSize:18,
        color:colors.darkViolet,
    },
    action:{
        backgroundColor: colors.violet,
        borderRadius:15,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#391B7A',
    },
    actionText: {
        color:'#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    linkText:{
        color:colors.violet,
        fontSize: 14,
        fontWeight:'bold',
    },
    imagem: {
        width: 200,
        height: 200,
        alignSelf:'center',
        marginBottom: 20,
    },
    qrCode: {
        width: 300,
        height: 300,
        alignSelf:'center',
        marginTop: 5,
    },
    
  });
  
  export default styles;
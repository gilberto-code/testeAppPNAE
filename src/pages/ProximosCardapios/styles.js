import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop:  Constants.statusBarHeight + 20, 
        paddingBottom: 70,  
    },
    title:{
        alignSelf:'center',
        fontSize:24,
        fontWeight:'bold',
        color:colors.darkViolet,
        marginBottom:24
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionPrimary:{
        backgroundColor: colors.violet,
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionTextPrimary: {
        color:'#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    actionSecondary:{
        backgroundColor: colors.secondary,
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionTextSecondary: {
        color:colors.violet,
        fontSize: 15,
        fontWeight: 'bold',
    },


    imagem: {
    
        height: '80%',
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
        fontSize:16,
        color:colors.darkViolet,
    },
    listCardItem:{
        marginBottom:20,
    },
    listAlimento:{
        marginTop: -15
    },
    listAlimentoItem:{
        height: 150,
        width: 150,
        padding: 10,
        margin: 10,
        borderColor: colors.darkViolet,
        borderWidth:3,
        justifyContent:'space-between',
        borderRadius:20,
        backgroundColor: colors.secondary,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
    }
  });
  
  export default styles;
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop:  Constants.statusBarHeight + 20,   
    },
    title:{
        alignSelf:'center',
        fontSize:30,
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
    textGroup:{
        marginBottom:25,
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
    // list:{
    //     height: 200,
    //     width: 150,
    //     backgroundColor: "gold",
    //     margin: 10
    // },
    listItem:{
        height: 200,
        width: 200,
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
        elevation: 10,
    },
    imagem: {
    
        height: '80%',
        // backgroundColor:'red',
    },
  });
  
  export default styles;
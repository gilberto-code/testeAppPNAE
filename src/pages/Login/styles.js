import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop:  Constants.statusBarHeight + 20,   
        backgroundColor: colors.violet,
        justifyContent:'center',
        alignItems:'center',
    },
    loginContainer: {
        backgroundColor:'#fff',

        paddingHorizontal: 24,
        paddingVertical: 24,

        borderRadius: 30,        

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

        width:'100%',

        alignItems:'center',
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.darkViolet,
        marginBottom:25
    },
    inputGroup:{
        marginBottom:25,
        width:'100%'
    },
    label:{
        fontSize:12,
        fontWeight: 'bold',
        color:colors.darkViolet,
    },
    input:{
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderBottomWidth: 1.5,
        paddingVertical:5,
        paddingHorizontal:5,
        borderColor: colors.violet
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
        fontSize: 15,
        fontWeight: 'bold',
    },
    linkText:{
        color:colors.violet,
        fontSize: 14,
        fontWeight:'bold',
    }
  });
  
  export default styles;
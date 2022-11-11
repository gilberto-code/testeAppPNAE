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

        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

        width:'100%',

    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.violet,
        marginBottom:25
    },
    inputGroup:{
        marginBottom:25,
        width:'100%'
    },
    label:{
        fontSize:12,
        fontWeight: 'bold',
        color:colors.darkViolet
    },
    input:{
        borderBottomWidth: 1,
        paddingVertical:5,
        paddingHorizontal:5,
        borderColor: colors.violet,
        fontSize:14
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
    linkText:{
        color:colors.violet,
        fontSize: 14
    },
    
    picker:{
        width:'100%', 
    },
    pickerView:{
        borderColor: colors.violet,
        borderBottomWidth: 1,
    },
  });
  
  export default styles;
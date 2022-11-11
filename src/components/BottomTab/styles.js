import { StyleSheet } from 'react-native';
import { Dimensions, Platform } from 'react-native';
import colors from '../../styles/colors';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    bottomTab:{
        position:'absolute',
        width:width < height ? width : height,
        bottom:0,
        flex:1,
        height:60,
        borderTopColor:colors.darkViolet,
        borderTopWidth: 2,
        justifyContent:'space-around',
        flexDirection:'row',
        backgroundColor:colors.secondary,
        zIndex: 1
    },
    bottomTabText:{
        color:colors.darkViolet,
        fontSize:12,
        fontWeight:'bold'
    },
    bottomTabButton:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    }
  });
  
  export default styles;
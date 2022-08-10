import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={stll.container}>
      <TouchableOpacity>
      <Image 
      style={stll.logo}
      source={require('/Users/rajatvarma/Desktop/cloneproj/assets/header-logo.png')}
      />
      </TouchableOpacity>
      <View style={stll.iconsContainer}>
        <TouchableOpacity>
          <Image 
           source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
           }}
           style={stll.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image 
           source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png' 
           }}
           style={stll.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={stll.unreadbadge}>
            <Text style={stll.unreadbadgeText}>99+</Text>
          </View>
        <Image 
           source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png' 
           }}
           style={stll.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const stll = StyleSheet.create({
  logo:{
    width:100,
    height:50,
    resizeMode:'contain'
  },
  container:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginHorizontal:20,
  },
  iconsContainer:{
    flexDirection:'row'
  },
  icon:{
    width:30,
    height:30,
    marginLeft:10,
    resizeMode:'contain'

  },
  unreadbadge:{
    backgroundColor: '#FF3250',
    position:'absolute',
    left:20,
    bottom:18,
    width:35,
    height:18,
    borderRadius:9,
    alignItems:'center',
    zIndex:100
  },
  unreadbadgeText:{
    color:'white',
    fontWeight:'600'
  }
})
export default Header
import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements'

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
        <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
    </View>
  )
}

const PostHeader = ({post}) => (
    <View style={stl.l1post}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={{uri: post.profile_picture}} style={stlll.story}/>
            <Text style={stl.text}>
             {post.user}
            </Text>
        </View>
    </View>
)

const stl = StyleSheet.create({
   l1post:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems:'center'
   },
   text:{
    color: 'white',
    marginLeft: 5,
    fontWeight: 50
   }
})

const stlll = StyleSheet.create({
  story:{
    width:35,
    height:35,
    borderRadius:50,
    marginLeft:6,
    borderWidth:1.6,
    borderColor:'#FF8501'
  }
})

export default Post
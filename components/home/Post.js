import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements'

export const PostFooterIcons = [
  {
      func: 'like',
      imageUrl: '/Users/rajatvarma/Desktop/cloneproj/assets/like.png',
      likedImageurl: '/Users/rajatvarma/Desktop/cloneproj/assets/icons8-red-heart-48.png'
  },
  {
      func: 'Comment',
      imageUrl: '/Users/rajatvarma/Desktop/cloneproj/assets/comment.png'
  },
  {
      func: 'share',
      imageUrl: '/Users/rajatvarma/Desktop/cloneproj/assets/share.png'
  },
  {
      func: 'Save',
      imageUrl: '/Users/rajatvarma/Desktop/cloneproj/assets/bookmark.png'
  }

]
const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
        <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal:15,marginTop:10}}>
        <PostFooter />
        <Likes post={post} />
      </View>
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
        <Text style={{color:'white' ,fontWeight:'900'}}>...</Text>
    </View>
)
const PostImage = ({post}) => (
  <View
  style={{
    width:'100%',
    height:450
  }}>
  <Image
    source={{uri:post.imageUrl}}
    style={{height: '100%', resizeMode:'cover'}}
    />
  </View>
)
const PostFooter = () => (
  <View style={{flexDirection:'row'}}>
    <View style={stlll.leftFooterIconsContainer}>
    <Icon imgStyle={stlll.footerIcon} imgUrl={PostFooterIcons[0].imageUrl}/>
    <Icon imgStyle={stlll.footerIcon} imgUrl={PostFooterIcons[1].imageUrl}/>    
    <Icon imgStyle={stlll.footerIcon} imgUrl={PostFooterIcons[2].imageUrl}/>    
    </View>

    <View style={{flex:1,alignItems:'flex-end'}}>
      <Icon imgStyle={stlll.footerIcon} imgUrl={PostFooterIcons[3].imageUrl}/>
    </View>
  </View>
)
const Icon =({imgStyle,imgUrl}) => (
  <TouchableOpacity>
    <Image  style={imgStyle} source={{uri:imgUrl}}/>
  </TouchableOpacity>
)
const Likes = ({post}) => (
  <View style={{flexDirection:'row', marginTop:4}}>
  <Text style={{color:'white', fontWeight: '600'}}>
    {post.likes.toLocaleString('en')} likes
    </Text>
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
    fontWeight: '500'
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
  },
  footerIcon:{
    width:25,
    height: 25
  },
  leftFooterIconsContainer: {
    flexDirection:'row',
    width: '32%',
    justifyContent:'space-between'
  },
})


export default Post
import React from 'react'
import { View, TouchableOpacity, ViewStyle } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import theme from '@styled/theme'
import Text from '@styled/Text'

const StyledContainer = styled.View`
    padding: 14px ${theme.spacing.margin}px;
    background: ${theme.color.light};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.color.grey};
`
const StyledHeader = styled.View`

`
const StyledContent = styled.View`
    margin-top: 14px;
`
const StyledFooter = styled.View`  
    margin: 14px 0;
    flex-direction: row;
    align-items: center;
`
const StyledControl = styled.View`
    padding-top: 8px;
    border-top-width: 1px;
    border-color: ${theme.color.grey};
`

interface IPost {
    id: number,
    content: string,
    createdAt: string,
    updatedAt: string,
    likes: number,
    loves: number,
    activeUserLikedIt: number,
    activeUserLovedIt: number,
    author: {
        id: number,
        username: string
    }
}

interface Props {
    post: IPost,
    style?: ViewStyle,
}

const PostCard: React.FunctionComponent<Props> = ({
    style,
    post
}) => {
    const sumLikesLoves: number = post.likes + post.loves
    const creationDate: string = new Date(post.createdAt).toDateString()

    return (
        <StyledContainer style={style}>
            <StyledHeader>
                <Text bold style={{letterSpacing: 1}}>{post.author.username}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text grey style={{marginRight: 8}}>{creationDate}</Text>
                    <Ionicons name="md-time" size={14} color={theme.color.darkGrey} />
                </View>
            </StyledHeader>
            <StyledContent>
                <Text>{post.content}</Text>
            </StyledContent>
            <StyledFooter>
                {/* {
                    likes
                    loves
                } */}
                <View style={{backgroundColor: theme.color.grey, borderRadius: 50, padding: 5, borderWidth: 3, borderColor: theme.color.light}}>
                    <AntDesign name="heart" size={14} color={theme.color.danger}/>
                </View>
                <View style={{left: -12, backgroundColor: theme.color.grey, borderRadius: 50, padding: 5, borderWidth: 3, borderColor: theme.color.light}}>
                    <AntDesign name="like1" size={14} color={theme.color.primary}/>
                </View>
                <Text grey>{sumLikesLoves}</Text>
            </StyledFooter>
            <StyledControl>
                {/* {
                    like it
                    love it
                } */}
                <TouchableOpacity style={{marginRight: theme.spacing.margin, flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="like1" size={18} color={theme.color.primaryAlt} />
                    <Text style={{marginLeft: 14}} grey>Like</Text>
                </TouchableOpacity>
            </StyledControl>
        </StyledContainer>
    )
}

export default PostCard
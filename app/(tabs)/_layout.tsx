import { ImageBackground,Text, Image, ImageSourcePropType, View} from 'react-native'
import React from 'react'
import {images} from "@/constants/images"
import { Tabs } from 'expo-router'
import { icons } from '@/constants/icons'

interface IconProps {
    focused : any,
    icon : ImageSourcePropType | undefined , 
    title: string
}

function CutomTabIcon(props :IconProps):any{
    if(props.focused){
        return (
            <>
            <ImageBackground source={images.highlight}
             className="flex flex-row w-full  flex-1 mt-4 min-w-[112px] min-h-16 justify-center items-center rounded-full overflow-hidden">
                <Image source={props.icon} tintColor="#151312" className="size-5 " />
                <Text className='ml-2 text-secondary text-base font-semibold'>{props.title}</Text>
            </ImageBackground>
        </>
        )
    }
    return (
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={props.icon} tintColor="#A8B5DB" className='size-5'/>
        </View>
    )

} 

const _layout = () => {
    return (
        <Tabs 
        // customize the tabs overall
            screenOptions={{
                tabBarShowLabel: false, 
                tabBarItemStyle: {
                    width:"100%",
                    height:"100%",
                    justifyContent:"center",
                    alignItems:"center",
                },
                tabBarStyle:{
                    backgroundColor:"#0f0D23",
                    borderRadius: 50,
                    marginHorizontal:20,
                    marginBottom:36,
                    height:52,
                    position:"absolute",
                    overflow:"hidden",
                    borderWidth:1,
                    borderColor:"#0F0D23"
                }
            }}
        >
            {/* hide the screen header and configure the routes of the tabs */}
            <Tabs.Screen name='index' options={{
                headerShown: false,
                title: "Home",
                tabBarIcon: ({focused}) => (
                    <CutomTabIcon focused={focused} icon={icons.home} title='Home'/>
                )
            }} />
            <Tabs.Screen name='search' options={{ headerShown: false, title: "Search",tabBarIcon: ({focused}) => (
                    <CutomTabIcon focused={focused} icon={icons.search} title='Search'/>
                ) }} />
            <Tabs.Screen name='saved' options={{ headerShown: false, title: "Saved",tabBarIcon: ({focused}) => (
                    <CutomTabIcon focused={focused} icon={icons.save} title='Saved'/>
                ) }} />
            <Tabs.Screen name='profile' options={{ headerShown: false, title: "Profile" ,tabBarIcon: ({focused}) => (
                    <CutomTabIcon focused={focused} icon={icons.person} title='Profile'/>
                )}} />
        </Tabs>
    )
}

export default _layout
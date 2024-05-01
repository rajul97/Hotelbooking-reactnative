import * as React from 'react';
import { Image, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../screens/Homepage';
import Trippage from '../screens/Trippage';
import Topdestination from '../screens/Topdestination';
import Profile from '../screens/Profile';
import Upcomingstay from '../screens/Upcomingstay';

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <View style={{ flex: 1, justifyContent:'center'}}>
      <View style={{ flex:1,height:50}}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#565253',
            tabBarShowLabel: false,
            tabBarInactiveBackgroundColor: '#565253',
            tabBarActiveBackgroundColor: '#565253',
            tabBarHideOnKeyboard: true,
            
          }}
          tabBar={(props) => <CustomTabBar {...props} />}
        >
          <Tab.Screen
            name="Homepage"
            component={Homepage}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Image
                  source={require('../../assets/image/homeicon.png')}
                  style={{ height: 19, width: 20, tintColor: focused ? color : 'white' }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Upcomingstay"
            component={Upcomingstay}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Image
                  source={require('../../assets/image/BAGNO7777.png')}
                  style={{ height: 19, width: 20, tintColor: focused ? color : 'gray' }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Trippage"
            component={Trippage}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Image
                  source={require('../../assets/image/TATA123.png')}
                  style={{ height: 19, width: 20, tintColor: focused ? color : 'gray' }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Topdestination"
            component={Topdestination}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Image
                  source={require('../../assets/image/KYI.png')}
                  style={{ height: 19, width: 20, tintColor: focused ? color : 'gray' }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Image
                  source={require('../../assets/image/VVVVVV.png')}
                  style={{ height: 19, width: 20, tintColor: focused ? color : 'gray' }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#565253', height: 55 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            style={{ flex: 1, alignItems: 'center' }}
            onPress={onPress}
          >
            <View style={{ alignItems: 'center' }}>
              <Image
                source={
                  route.name === 'Homepage'
                    ? require('../../assets/image/homeicon.png')
                    : route.name === 'Upcomingstay'
                    ? require('../../assets/image/BAGNO7777.png')
                    : route.name === 'Trippage'
                    ? require('../../assets/image/TATA123.png')
                    : route.name === 'Topdestination'
                    ? require('../../assets/image/KYI.png')
                    : require('../../assets/image/VVVVVV.png')
                }
                style={{
                  height: 20,
                  width: 22,
                  tintColor: isFocused ? 'white' : 'white',
                  marginTop: 19,
                }}
              />
              {isFocused && (
                <TouchableOpacity
                  activeOpacity={0} // Setting active opacity for touch effect
                  style={{ position: 'absolute' }}
                  onPress={onPress}
                >
                  <Image
                    source={require('../../assets/image/button21.png')}
                    style={{ height: 12.02, width: 52 }}
                  />
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

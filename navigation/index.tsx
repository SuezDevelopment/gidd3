/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import IntroScreen from '../screens/intro';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/election/TabOneScreen';
import TabTwoScreen from '../screens/community/community';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import AuthContext from '../hooks/useAuth';
import Invite from '../screens/community/invite';
import Auth from '../screens/Auth';

export default function Navigation({ colorScheme}: { colorScheme: ColorSchemeName }) {
  const {signed} = useContext(AuthContext)
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {signed ? <RootNavigator />: <AuthNav />}
    </NavigationContainer>
  );
}

const AuthStack = createNativeStackNavigator<RootStackParamList>();
function AuthNav() {
  return(
    <AuthStack.Navigator
      initialRouteName='IntroScreen'
    >
      <AuthStack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}

const CommunityStack = createNativeStackNavigator<RootStackParamList>();

function CommunityScreens() {
  return(
    <CommunityStack.Navigator 
    >
      <CommunityStack.Screen name="FeaturedCommunity" component={CommunityScreens} />
      <CommunityStack.Screen name="Invite" component={Invite} />
      <CommunityStack.Screen name="CommunityChat" component={Chat} />
      <CommunityStack.Screen name="MemberProfile" component={Profile} />
      <CommunityStack.Screen name="CommunityPoll" component={Poll} />
    </CommunityStack.Navigator>
  )
}

const ElectionStack = createNativeStackNavigator<RootStackParamList>();

function ElectionScreens() {
  return(
    <ElectionStack.Navigator>
      <ElectionStack.Screen name='FeaturedElection' component={Election} />
      <ElectionStack.Screen name='Annoucement' component={Announcement} />
      <ElectionStack.Screen name='Vote' component={Vote} />
      <ElectionStack.Screen name='Result' component={Result} />
    </ElectionStack.Navigator>
  )
}

const AdminStack = createNativeStackNavigator<RootStackParamList>();

function AdminScreens() {
  return(
    <AdminStack.Navigator>
      <AdminStack.Screen name="AdminAuth" component={AdminAuth} />
      <AdminStack.Screen name="AdminDashboard" component={Dashboard} />
      <AdminStack.Screen name="AdminMembers" component={Members} />
      <AdminStack.Screen name="AdminAnnoucement" component={NewInfo} />
      <AdminStack.Screen name="AdminAuth" component={AdminAuth} />
    </AdminStack.Navigator>
  )
}



function RootNavigator() {
  const [isAdmin, setIsAdmin] = React.useState(false)
  return (
    isAdmin ? <AdminScreens/> : <BottomTabNavigator />
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Election"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Election"
        component={ElectionScreens}
        options={({ navigation }: RootTabScreenProps<'Election'>) => ({
          title: 'ELECTION',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityScreens}
        options={{
          title: 'COMMUNITY',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

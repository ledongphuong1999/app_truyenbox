import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import TabBarOfThongTinTruyen from './components/TabBarOfThongTinTruyen';
import store from './reducers/store';
import CaNhanScreen from './screens/CaNhanScreen';
import ChapterScreen from './screens/ChapterScreen';
import DailyyyScreen from './screens/DailyyyScreen';
import Home from './screens/Home';
import RankingScreen from './screens/RankingScreen';
import TheLoaiScreen from './screens/TheLoaiScreen';
import TheoDoiScreen from './screens/TheoDoiScreen';
import ThongTinTruyenScreen from './screens/ThongTinTruyenScreen';

const Stack = createStackNavigator();
function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trang Chủ" component={Home} />
      {/* <Stack.Screen name="TabBarOfThongTinTruyen" component={TabBarOfThongTinTruyen} /> */}
      <Stack.Screen name="Ranking" component={RankingScreen} />
      <Stack.Screen name="Daily" component={DailyyyScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}

function TheoDoiTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Theo Dõi" component={TheoDoiScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}
function TheLoaiTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Thể Loại" component={TheLoaiScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}

function CaNhanTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cá Nhân" component={CaNhanScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Trang Chủ" component={HomeTab} />
          <Tab.Screen name="Theo Dõi" component={TheoDoiTab} />
          <Tab.Screen name="Thể Loại" component={TheLoaiTab} />
          <Tab.Screen name="Cá Nhân" component={CaNhanTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
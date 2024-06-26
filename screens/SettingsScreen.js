// screens/SettingsScreen.js
import * as React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export function SettingsScreen({ toggleTheme }) {
  const { colors } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    toggleTheme();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Settings</Text>
      <View style={{ color: 'blue' }}>
        <View style={{ margin: 30 }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Settings</Text>
          </View>
          <View
            style={{
              fontWeight: 'bold',
              marginTop: 20,
              marginBottom: 20,
              justifyContent: 'space-between',
            }}
          >
            <Text>
              Language‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎ ‎ ‎ ‎{' '}
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </Text>
          </View>
          <View style={{ borderColor: 'grey', borderBottomWidth: 1 }}></View>

          <View
            style={{ marginTop: 20, borderColor: 'grey', marginBottom: 20 }}
          >
            <Text>
              My Profile‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎ ‎ ‎ ‎
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </Text>
          </View>
          <View style={{ borderColor: 'grey', borderBottomWidth: 1 }}></View>

          <View
            style={{ marginTop: 20, borderColor: 'grey', marginBottom: 20 }}
          >
            <Text>
              Contact Us‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </Text>
          </View>
          <View style={{ borderColor: 'grey', borderBottomWidth: 1 }}></View>

          <View
            style={{ marginTop: 20, borderColor: 'grey', marginBottom: 20 }}
          >
            <Text>
              Change Password‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </Text>
          </View>
          <View style={{ borderColor: 'grey', borderBottomWidth: 1 }}></View>

          <View
            style={{ marginTop: 20, borderColor: 'grey', marginBottom: 20 }}
          >
            <Text>
              Privacy Policy‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎<MaterialIcons name="navigate-next" size={24} color="black" />
            </Text>
          </View>
          <View style={{ borderColor: 'grey', borderBottomWidth: 1 }}></View>

          <View
            style={{ marginTop: 20, borderColor: 'grey', marginBottom: 20 }}
          >
            <Text>
              Language‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
              ‎ ‎ ‎ ‎ ‎
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </Text>
          </View>
          <View
            style={{
              borderColor: 'grey',
              borderBottomWidth: 1,
              marginBottom: 20,
            }}
          ></View>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={{ color: colors.text }}>Theme</Text>
        <Switch value={isDarkTheme} onValueChange={handleToggle} />
      </View>
      {/* Add more settings options here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
});

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  walletBalance: string;
}

const Header = ({ walletBalance }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSection}>
      <FontAwesome name="steam" size={28} color="white" />

        <View style={styles.menuContainer}>
          <AntDesign name="bars" size={20} color="white" />
          <Text style={styles.menuText}>MENU</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.headerText}>WISHLIST</Text>
        <Text style={styles.headerText}>WALLET ({walletBalance})</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#171A21',
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  menuText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Header;

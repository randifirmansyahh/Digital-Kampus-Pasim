import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PerpusFeature from './../../../components/molecules/PerpusFeature';
import {constant} from '../../../utils/constant/constant';

class HomePerpus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nim: '',
      nama: '',
    };

    AsyncStorage.getItem('@nim', (error, result) => {
      if (result) {
        this.setState({
          nim: result,
        });
      }
    });
    AsyncStorage.getItem('@nama', (error, result) => {
      if (result) {
        this.setState({
          nama: result,
        });
      }
    });
  }

  render() {
    return (
      <View style={{marginHorizontal: 17, marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: constant.warnaBackground,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginTop: 10,
            padding: 14,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            ({this.state.nim}) - {this.state.nama}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#EEEEEE',
            // borderBottomRightRadius: 8,
            // borderBottomLeftRadius: 8,
          }}>
          <PerpusFeature
            onPress={() => this.props.navigation.navigate('QRAnggota')}
            title="SKS Selesai"
            textAngka="58"
            // img={require('./../../../assets/images/icon/absen.png')}
          />
          <PerpusFeature
            onPress={() => this.props.navigation.navigate('ScanQRCode')}
            title="IPK Saat Ini"
            textAngka="3,5"
            // img={require('./../../../assets/images/icon/qr-code.png')}
          />
          <PerpusFeature
            onPress={() => this.props.navigation.navigate('CariBuku')}
            title="Total SKS"
            textAngka="151"
            // img={require('./../../../assets/images/icon/books.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#EEEEEE',
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
          }}>
          <PerpusFeature
            onPress={() => this.props.navigation.navigate('QRAnggota')}
            title="Sisa SKS"
            textAngka="93"
            // img={require('./../../../assets/images/icon/absen.png')}
          />
          <PerpusFeature
            onPress={() => this.props.navigation.navigate('ScanQRCode')}
            title="Mata Kuliah Selesai"
            textAngka="21"
            // img={require('./../../../assets/images/icon/qr-code.png')}
          />
          <PerpusFeature
            onPress={() => this.props.navigation.navigate('CariBuku')}
            title="Semester"
            textAngka="4"
            // img={require('./../../../assets/images/icon/books.png')}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(HomePerpus);

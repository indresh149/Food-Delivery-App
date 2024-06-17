import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import IconHeart from 'react-native-vector-icons/AntDesign';
import IconDown from 'react-native-vector-icons/AntDesign';
import IconStar from 'react-native-vector-icons/EvilIcons';
import IconStarFill from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';

import {Card} from '@rneui/base';
import SearchBar from '../../components/SearchBar';
import {images} from '../../../utils/data/popularData';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import DropDownPicker from 'react-native-dropdown-picker';
import {SelectList} from 'react-native-dropdown-select-list';

interface dishQuantity {
  label: string;
  value: string;
}

const itemsdishQuantitySelect: dishQuantity[] = [
  {label: 'Full Plate', value: 'Full Plate'},
  {label: 'Half Plate', value: 'Half Plate'},
  {label: '5 kg pack', value: '5 kg pack'},
  {label: '10 kg pack', value: '10 kg pack'},
  {label: '20 kg pack', value: '20 kg pack'},
  {label: '50 kg pack', value: '50 kg pack'},
];

const ParticularStore = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = ['Offers', 'Top rated', 'Loose', 'Combo'];

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleSelectImage = (index: number) => {
    setSelectedImage(index);
  };

  const [data, setData] = useState([
    {
      id: '1',
      rating: 4.5,
      name: 'Chicken Biryani',
      price: 450,
      originalPrice: 650,
      discount: 30,
      image: 'https://via.placeholder.com/150',
      plate: 'Full Plate',
      isVeg: false,
    },
    {
      id: '2',
      rating: 4.5,
      name: 'Veg Biryani',
      price: 450,
      originalPrice: 650,
      discount: 30,
      image: 'https://via.placeholder.com/150',
      plate: 'Half Plate',
      isVeg: true,
    },
    {
      id: '3',
      rating: 4.5,
      name: 'Rajma Chawal',
      price: 450,
      originalPrice: 650,
      discount: 30,
      image: 'https://via.placeholder.com/150',
      plate: '5 kg pack',
      isVeg: true,
    },
  ]);

  const handlePlateChange = (itemId: any, newPlate: any) => {
    setData(
      data.map(item =>
        item.id === itemId ? {...item, plate: newPlate} : item,
      ),
    );
  };

  const [opendishQuantitySelect, setOpendishQuantitySelect] =
    useState<boolean>(false);
  const [valuedishQuantitySelect, setValuedishQuantitySelect] = useState<
    any | null
  >();

  const [selected, setSelected] = React.useState('');

  const dataa = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.itemContainerMain}>
      <View style={styles.leftContainer}>
        <View style={styles.ratingandVegCategContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{item.rating}</Text>
            <IconStarFill
              name="star"
              size={12}
              style={styles.IconStar}
              color="#FF820D"
            />
          </View>
          <View style={styles.dotContainer}>
            <Image
              source={require('../../../assets/icons/reddot.png')}
              style={styles.redDot}
            />
          </View>
        </View>

        <Text style={styles.ItemName}>{item.name}</Text>

        {/* <View  style={styles.dropdownMainContainer}>
        <DropDownPicker
          labelStyle={{
            fontSize: 10,
            color: '#000000',
          }}
          textStyle={{
            fontSize: 15
          }}
          iconContainerStyle={{
            width: 5,
            height: 5,
          }}
          placeholderStyle={{
            height: 10,
            fontSize: 10,
            color: '#000000',
            }}
          style={styles.dishQuantityDropdown}
          dropDownContainerStyle={styles.dishQuantityDropdownContainer}
          open={opendishQuantitySelect}
          value={valuedishQuantitySelect}
          items={itemsdishQuantitySelect}
          setOpen={setOpendishQuantitySelect}
          setValue={setValuedishQuantitySelect}
          selectedItemLabelStyle={{color: '#FF820D'}}
          // setItems={setItemslanguageSelect}
          placeholder={'Choose'}
        />

</View> */}

        <View style={styles.dropdownMainContainer}>
          <SelectList
            setSelected={val => setSelected(val)}
            data={dataa}
            save="value"
          />
        </View>
      </View>

      <View></View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Card containerStyle={styles.cardcontainer}>
          <View style={styles.mainView}>
            <View>
              <Icon name="arrow-back" size={30} color="#000" />
              <Text style={styles.largeText}>Durga Groceries</Text>
            </View>
          </View>
          <SearchBar />

          <View style={styles.containerinner}>
            {options.map(option => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedOption === option && styles.selectedOptionButton,
                ]}
                onPress={() => handleSelectOption(option)}>
                {option === 'Offers' && (
                  <Image
                    source={require('../../../assets/icons/discount.png')}
                    style={styles.imageDiscount}
                  />
                )}
                <Text
                  style={[
                    styles.optionText,
                    selectedOption === option && styles.selectedOptionText,
                  ]}>
                  {option}
                </Text>
                {selectedOption === option && (
                  <Icons
                    style={styles.crossIcon}
                    name="cross"
                    size={20}
                    color="white"
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Card>
      </View>

      <View style={styles.wrapperRow}>
        <Card containerStyle={styles.cardcontainerRow}>
          <View style={styles.innerRow}>
            {images.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={styles.imageContainer}
                onPress={() => {
                  setModalVisible(true);
                  handleSelectImage(index);
                }}>
                <Image source={image.src} style={styles.imageBiryani} />
                <Text
                  style={[
                    styles.text,
                    selectedImage === index && styles.selectedText,
                  ]}>
                  {image.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          {selectedImage !== null && (
            <Image
              source={images[selectedImage].src}
              style={styles.modalImage}
            />
          )}

          <View style={styles.detailsContainer}>
            <View style={styles.nameContainerModal}>
              <Text style={styles.textopenModal}>Chicken Biriyani</Text>
              <View style={styles.starRed}>
                <Text>4.5</Text>
                <IconStar name="star" size={20} color="black" />
              </View>
              <Image
                source={require('../../../assets/icons/reddot.png')}
                style={styles.redDot}
              />
            </View>

            <View style={styles.description}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{' '}
              </Text>
            </View>

            <View style={styles.hertoarrow}>
              <View style={styles.caretDown}>
                <Text>Full Plate</Text>
                <IconDown name="caretdown" size={15} color="black" />
              </View>
              <IconHeart
                style={styles.heartoIcon}
                name="hearto"
                size={20}
                color="black"
              />
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.realPrice}>₹450.00</Text>
              <Text style={styles.discountPriceNew}>₹650.00</Text>
            </View>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.addButtonBig}>
              <Text style={styles.addTextButton}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.wrapperDishes}>
        <Card containerStyle={styles.cardcontainerRow}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainer}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    width: width,
    height: height * 0.3,
  },
  cardcontainer: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 0,
    margin: 0,
    padding: 10,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeText: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  grayText: {
    marginTop: 10,
    fontSize: 16,
    color: '#ccc',
    fontWeight: 'bold',
  },
  containerinner: {
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 10,
  },
  optionButton: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginEnd: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 100,
  },
  selectedOptionButton: {
    marginRight: 10,
    backgroundColor: '#FFA500',
  },
  imageDiscount: {
    marginRight: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  crossIcon: {
    marginLeft: 5,
  },
  optionText: {
    fontSize: 12,
    color: '#000000',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  wrapperRow: {
    width: width,
    height: height * 0.13,
    marginTop: 10,
  },
  cardcontainerRow: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 0,
    margin: 0,
    padding: 10,
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 12,
    color: '#000',
  },
  selectedText: {
    fontSize: 16,
    color: '#FF820D',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageBiryani: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: -40,
    left: '55%',
    transform: [{translateX: -20}],
    backgroundColor: '#ccc',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#000',
  },
  modalImage: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: 'contain',
    marginTop: 20,
    alignSelf: 'center',
  },
  nameContainerModal: {
    flexDirection: 'row',
  },
  textopenModal: {
    marginTop: 10,
    marginRight: 20,
    fontSize: 20,
    color: '#000',
  },
  detailsContainer: {
    marginTop: 20,
  },
  starRed: {
    flexDirection: 'row',
    marginTop: 15,
    borderRadius: 5,
    padding: 2,

    backgroundColor: '#FFB7B2',
  },
  redDot: {
    width: width * 0.02,
    height: height * 0.02,
    marginLeft: 5,
  },
  description: {
    marginTop: 10,
  },
  hertoarrow: {
    flexDirection: 'row',

    marginTop: 20,
  },
  heartoIcon: {
    marginTop: 15,
    marginLeft: 20,
  },
  caretDown: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: width * 0.4,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  realPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  discountPriceNew: {
    marginTop: 5,
    fontSize: 15,
    color: '#ccc',
    marginLeft: 10,
    textDecorationLine: 'line-through',
  },
  addButtonBig: {
    height: 50,
    width: width * 0.9,
    backgroundColor: '#FFEDEB',
    borderColor: '#FF820D',
    borderWidth: 1,
    color: 'white',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  addTextButton: {
    color: '#FF820D',
    textAlign: 'center',
  },
  contentContainer: {
    padding: 10,
  },

  wrapperDishes: {
    width: width,
    height: height * 0.5,
    marginTop: 10,
  },
  cardcontainerDishes: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 0,
    margin: 0,
    padding: 10,
  },
  itemContainerMain: {
    height: height * 0.3,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    padding: 1,
    height: height * 0.024,
    width: width * 0.14,
    gap: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFB7B2',
  },
  ratingandVegCategContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  ratingText: {
    color: '#FF820D',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  IconStar: {
    marginTop: 2,
  },
  dotContainer: {
    height: height * 0.024,
    width: width * 0.05,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  ItemName: {
    marginTop: 10,
    fontSize: 20,

    color: '#000',
  },
  leftContainer: {
    width: '50%',
  },
  dishQuantityDropdown: {
    borderColor: '#FFF',
    marginTop: height * 0.01,
    marginLeft: width * 0.01,
    width: width * 0.4,
    height: height * 0.001,
  },
  dishQuantityDropdownContainer: {
    // borderColor: '#FFF',
    // width: width * 0.9,
    // height: height * 0.3,
    // marginLeft: width * 0.05,
    // marginTop: height * 0.1,
  },
  dropdownMainContainer: {
    width: width * 0.4,
    height: height * 0.05,
    marginTop: height * 0.01,
    marginLeft: width * 0.01,
  },
});

export default ParticularStore;

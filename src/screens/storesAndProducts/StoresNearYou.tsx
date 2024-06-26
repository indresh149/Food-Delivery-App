import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Card} from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../components/SearchBar';
import Icons from 'react-native-vector-icons/Entypo';
import {imagesNewRow, imagesOpenStoreNew, storeData} from '../../../utils/data/popularData';
import IconStar from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const options = ['Offers', 'Top rated', 'Loose', 'Combo'];
const footerOptions = ['See stores', 'Dishes'];

interface storeDataTypes {
  id: string;
  image: any;
  name: string;
  rating: string;
  type?: string;
  address?: string;
}

const StoresNearYou = () => {
   const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedFooterOption, setSelectedFooterOption] = useState<
    string | null
  >("See stores");

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleSelectFooterOption = (option: string) => {
    setSelectedFooterOption(option);
  };

  interface storesNearYouFunctionProps {
    item: storeDataTypes;
  }

  const StoresNearYou: React.FC<storesNearYouFunctionProps> = ({item}) => {
    return (
      <View style={styles.mainViewStoreNear}>
        <Image source={item.image} style={styles.imageStoreNear} />

        <View style={styles.mainViewDetails}>
          <View style={styles.nameAndStar}>
            <Text style={styles.nameLargeNear}>{item.name}</Text>
            <IconStar
              name="star"
              size={18}
              color="black"
              style={styles.starNew}
            />
          </View>

          <Text style={styles.kmTextType}>{item.type}</Text>
          <Text style={styles.kmTextTypeAdd}>{item.address}</Text>

          <View style={styles.starContainerNearYou}>
            <Text style={styles.soldText}>4</Text>
            <Icons name="star" size={18} color="white" style={styles.star} />
          </View>
        </View>
      </View>
    );
  };

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleSelectImage = (index: number) => {
    setSelectedImage(index);
  };

  const [quantities, setQuantities] = useState<number[]>(
    Array(imagesNewRow.length).fill(0),
  );


  const handleAddPress = (index: number) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = 1;
      return newQuantities;
    });
  };

  const handleIncrement = (index: number) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const handleDecrement = (index: number) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] =
        newQuantities[index] > 1 ? newQuantities[index] - 1 : 0;
      return newQuantities;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Card containerStyle={styles.cardcontainer}>
          <View style={styles.mainView}>
            <View>
              <Icon name="arrow-back" size={30} color="#000" />
              <Text style={styles.largeText}>Select from store or product</Text>
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
          <View style={styles.footer}>
            {footerOptions.map(option => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.footerButton,
                  selectedFooterOption === option &&
                    styles.selectedFooterButton,
                ]}
                onPress={() => handleSelectFooterOption(option)}>
                <Text
                  style={[
                    styles.footerText,
                    selectedFooterOption === option &&
                      styles.selectedFooterText,
                  ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>
      </View>
        
{selectedFooterOption == "See stores" &&
      <Card containerStyle={styles.containerCraving}>
        <View style={styles.mainViewCraving}>
          <View style={styles.lineContainer}>
            <Text style={styles.storesNearText}>Stores near you</Text>
            <Image
              source={require('../../../assets/images/horline.png')}
              style={styles.storesNearLine}
            />
            <Text></Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={storeData}
            keyExtractor={(item, index) => item?.id ?? index.toString()}
            renderItem={({item}) => <StoresNearYou item={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Card> 
}

  {selectedFooterOption == "Dishes" && 
    <>
     <View style={styles.wrapperRow}>
        <Card containerStyle={styles.cardcontainerRow}>
          <View style={styles.innerRow}>
            {imagesNewRow.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={styles.imageContainer}
                onPress={() => handleSelectImage(index)}>
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

      <View style={styles.wrapperRowOpenStore}>
        <Card containerStyle={styles.cardcontainerRowOpenStore}>
          <View style={styles.nameContainer}>
            <Text style={styles.storeNameOpen}>Punjabi Rasoi</Text>

            <View style={styles.starContainerNearYou}>
              <Text style={styles.soldText}>4</Text>
              <Icons name="star" size={18} color="white" style={styles.star} />
            </View>
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('ParticularStoreScreen' as never); // Navigate to Home screen
            }}
            >
            <Text style={styles.openStoreText}>Open store</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.addressContainers}>
            <Text style={styles.addressText}>
              Court More, Opposite Orodental Hospital Asansol
            </Text>
          </View>

          <View style={styles.containerOpenStore}>
            {imagesOpenStoreNew.map((image, index) => (
              <View key={index} style={styles.imageContainerOpenStore}>
                <View style={styles.imageWrapper}>
                  <Image source={image.src} style={styles.imageOpenStore} />
                  <Image
                    source={image.topRightIcon}
                    style={styles.topRightIcon}
                  />
                </View>
                <Text style={styles.textopen}>{image.text}</Text>
                <Text style={styles.quantity}>{image.quantity}</Text>
                <Text style={styles.normalPrice}>{image.price}</Text>
                <Text style={styles.discountPrice}>{image.discountPrice}</Text>

                <View>
                  {quantities[index] === 0 ? (
                    <TouchableOpacity
                      style={styles.addButtonconatiner}
                      onPress={() => handleAddPress(index)}>
                      <Text style={styles.addButtonPink}>Add</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => handleDecrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>
                        {quantities[index]}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleIncrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                <Image
                  source={require('../../../assets/images/horline.png')}
                  style={styles.horizontalLine}
                />
              </View>
            ))}
          </View>
        </Card>
      </View>

      <View style={[styles.wrapperRowOpenStore, {marginTop: 0}]}>
        <Card containerStyle={styles.cardcontainerRowOpenStore}>
          <View style={styles.nameContainer}>
            <Text style={styles.storeNameOpen}>Nisha Groceries</Text>

            <View style={styles.starContainerNearYou}>
              <Text style={styles.soldText}>4</Text>
              <Icons name="star" size={18} color="white" style={styles.star} />
            </View>
            <Text style={styles.openStoreText}>Open store</Text>
          </View>
          <View style={styles.addressContainers}>
            <Text style={styles.addressText}>
              Court More, Opposite Orodental Hospital Asansol
            </Text>
          </View>

          <View style={styles.containerOpenStore}>
            {imagesOpenStoreNew.map((image, index) => (
              <View key={index} style={styles.imageContainerOpenStore}>
                <View style={styles.imageWrapper}>
                  <Image source={image.src} style={styles.imageOpenStore} />
                  <Image
                    source={image.topRightIcon}
                    style={styles.topRightIcon}
                  />
                </View>
                <Text style={styles.textopen}>{image.text}</Text>
                <Text style={styles.quantity}>{image.quantity}</Text>
                <Text style={styles.normalPrice}>{image.price}</Text>
                <Text style={styles.discountPrice}>{image.discountPrice}</Text>

                <View>
                  {quantities[index] === 0 ? (
                    <TouchableOpacity
                      style={styles.addButtonconatiner}
                      onPress={() => handleAddPress(index)}>
                      <Text style={styles.addButtonPink}>Add</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => handleDecrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>
                        {quantities[index]}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleIncrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <Image
                  source={require('../../../assets/images/horline.png')}
                  style={styles.horizontalLine}
                />
              </View>
            ))}
          </View>
        </Card>
      </View>

      <View
        style={[styles.wrapperRowOpenStore, {marginTop: 0, marginBottom: 30}]}>
        <Card containerStyle={styles.cardcontainerRowOpenStore}>
          <View style={styles.nameContainer}>
            <Text style={styles.storeNameOpen}>Nisha Groceries</Text>

            <View style={styles.starContainerNearYou}>
              <Text style={styles.soldText}>4</Text>
              <Icons name="star" size={18} color="white" style={styles.star} />
            </View>
            <Text style={styles.openStoreText}>Open store</Text>
          </View>
          <View style={styles.addressContainers}>
            <Text style={styles.addressText}>
              Court More, Opposite Orodental Hospital Asansol
            </Text>
          </View>

          <View style={styles.containerOpenStore}>
            {imagesOpenStoreNew.map((image, index) => (
              <View key={index} style={styles.imageContainerOpenStore}>
                <View style={styles.imageWrapper}>
                  <Image source={image.src} style={styles.imageOpenStore} />
                  <Image
                    source={image.topRightIcon}
                    style={styles.topRightIcon}
                  />
                </View>
                <Text style={styles.textopen}>{image.text}</Text>
                <Text style={styles.quantity}>{image.quantity}</Text>
                <Text style={styles.normalPrice}>{image.price}</Text>
                <Text style={styles.discountPrice}>{image.discountPrice}</Text>

                <View>
                  {quantities[index] === 0 ? (
                    <TouchableOpacity
                      style={styles.addButtonconatiner}
                      onPress={() => handleAddPress(index)}>
                      <Text style={styles.addButtonPink}>Add</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => handleDecrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>
                        {quantities[index]}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleIncrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                <Image
                  source={require('../../../assets/images/horline.png')}
                  style={styles.horizontalLine}
                />
              </View>
            ))}
          </View>
        </Card>
      </View>


    </>
  }


 

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
    height: height * 0.35,
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
  locationCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navIcon: {
    marginRight: 5,
    marginTop: 10,
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
  optionText: {
    fontSize: 12,
    color: '#000000',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    width: '100%',
    marginTop: 20,
  },
  footerButton: {
    padding: 10,
  },
  selectedFooterButton: {
    borderRadius: 20,
  },
  footerText: {
    color: '#000000',
    fontSize: 16,
  },
  selectedFooterText: {
    color: '#FFA500',
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
  imageContainer: {
    alignItems: 'center',
  },
  containerCraving: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 20,
    borderRadius: 0,
    margin: 0,
    padding: 10,
  },
  mainViewCraving: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
    marginBottom: 10,
  },
  storesNearText: {
    marginTop: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 40,
  },
  storesNearLine: {
    width: '50%',
    marginTop: 20,
    marginRight: 20,
  },
  mainViewStoreNear: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginBottom: 20,
  },
  nameLargeNear: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 25,
    marginBottom: 5,
  },
  mainViewDetails: {
    width: width / 1.4,

    marginRight: 20,
  },
  nameAndStar: {
    width: width / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starNew: {
    marginTop: 5,
    marginLeft: 35,
    marginRight: 5,
  },
  imageStoreNear: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginLeft: 20,
  },
  kmTextType: {
    marginLeft: 25,
    color: '#ccc',
    fontSize: 14,
  },
  kmTextTypeAdd: {
    flexWrap: 'wrap',
    marginTop: 5,
    marginLeft: 25,
    color: 'black',
    fontSize: 14,
  },
  starContainerNearYou: {
    width: width / 8,
    backgroundColor: '#FF820D',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 3,
    paddingBottom: 3,
    marginTop: 5,
    marginLeft: 25,
  },
  soldText: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    color: 'white',
  },
  star: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
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
  imageBiryani: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  selectedText: {
    fontSize: 16,
    color: '#FF820D',
  },
  horizontalLine: {
    width: width - 40,
    height: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  quantityButtonText: {
    backgroundColor: '#FF820D',
    color: 'white',
    fontSize: 18,
  },
  quantityButton: {
    height: 35,
    backgroundColor: '#FF820D',
    paddingTop: 2,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    color: 'white',
    paddingHorizontal: 0,
    fontSize: 18,
  },
  quantityContainer: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF820D',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 8,
    backgroundColor: '#FF820D',
  },
  addButtonPink: {
    color: '#FF820D',
    borderRadius: 10,
    textAlign: 'center',
  },
  addButtonconatiner: {
    height: 30,
    width: 90,
    backgroundColor: '#FFEDEB',
    color: '#FF820D',
    paddingTop: 5,
    borderWidth: 1,
    borderColor: '#FF820D',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  wrapperRowOpenStore: {
    width: width,
    height: height * 0.48,
    marginTop: 10,
  },
  cardcontainerRowOpenStore: {
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
  nameContainer: {
    flexDirection: 'row',
  },
  storeNameOpen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    marginTop: 10,
  },
  openStoreText: {
    marginTop: 15,
    marginLeft: 60,
    color: '#FF820D',
  },
  addressContainers: {
    width: width - 100,
    height: 50,
  },
  addressText: {
    marginTop: 5,
    marginLeft: 10,
    flexWrap: 'wrap',
    fontSize: 14,
    color: '#000',
  },
  containerOpenStore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  imageContainerOpenStore: {
    alignItems: 'center',
    width: (width - 40) / 3,
  },
  imageWrapper: {
    position: 'relative',
  },
  imageOpenStore: {
    resizeMode: 'contain',
    width: (width - 40) / 2.5,
    height: 80,
  },
  topRightIcon: {
    resizeMode: 'contain',
    position: 'absolute',
    top: -15,
    right: 5,
    width: 30,
    height: 30,
  },
  textopen: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  quantity: {
    marginRight: 20,
    fontSize: 15,
    color: '#ccc',
  },
  discountPrice: {
    marginTop: 10,
    fontSize: 12,
    color: '#FF820D',
    textDecorationLine: 'line-through',
  },
  normalPrice: {
    marginTop: 10,
    fontSize: 15,
    color: '#000',
  },
});

export default StoresNearYou;

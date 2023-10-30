
https://github.com/itsalir/react-native-test/assets/51325450/e054b98c-2c17-44a9-a9da-d2e17110d6c7
## Project Overview
This repository contains a React Native application with four main screens:

## Demo





https://github.com/itsalir/react-native-test/assets/51325450/3a4a42be-270d-476c-88cf-330c2237b6dc






## Splash Screen (Splash.tsx)
This is the initial screen displayed when the app starts. It includes a Lottie animation and automatically navigates to the "Product List" screen upon animation completion.



```bash
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {ProductListType} from '../../api/types';
import {getProductList} from '../../api';
import {RootStackParamList} from '../../types/NavigationTypes';

const Animation = require('../../assets/json/Animation.json');

const Splash = () => {
  // ... (animation and navigation logic)
};

export default Splash;
```
## Product List Screen (ProductList.tsx)
This screen displays a list of products fetched from a mock API. It supports searching and pull-to-refresh functionality.

```bash
import {StyleSheet, RefreshControl} from 'react-native';
import React, {useCallback, useState} from 'react';
import ProductBox from './components/ProductBox';
import {useQuery} from '@tanstack/react-query';
import {getProductList} from '../../api';
import {ProductListType} from '../../api/types';
import LoadingView from '../../components/LoadingView';
import HeaderList from './components/HeaderList';
import EmptyList from '../../components/EmptyList';
import Animated from 'react-native-reanimated';

const ProductList = () => {
  // ... (fetching and displaying product list with search and refresh functionality)
};

export default ProductList;
```

## Bookmark Page (BookmarkPage.tsx)
This screen allows you to view and search bookmarked products. It also supports pull-to-refresh.

```bash

import {Animated, RefreshControl, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {ProductListType} from '../../api/types';
import {getProductList} from '../../api';
import LoadingView from '../../components/LoadingView';
import ProductBox from '../ProductList/components/ProductBox';
import HeaderList from '../ProductList/components/HeaderList';
import EmptyList from '../../components/EmptyList';

const BookmarkPage = () => {
  // ... (fetching and displaying bookmarked products with search and refresh functionality)
};

export default BookmarkPage;
```

## Product Details (ProductDetails.tsx)
This screen displays detailed information about a specific product, including options for adding the product to the cart.

```bash

import {View, StyleSheet, Pressable, Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProductListType} from '../../api/types';
import HeaderProduct from './components/HeaderProduct';
import InfoProduct from './components/InfoProduct';
import SizeProduct from './components/SizeProduct';
import {getProductDetails} from '../../api';
import {useQuery} from '@tanstack/react-query';
import LoadingView from '../../components/LoadingView';
import {RootStackParamList} from '../../types/NavigationTypes';
import Header from './components/Header';

const ProductDetails = () => {
  // ... (fetching and displaying detailed product information)
};

export default ProductDetails;
```


## Note on API
The application relies on a mock API to fetch product data. Please be aware that this API has a limitation: it provides a new image every time you make a request. Additionally, the "Product List" and "Bookmark Page" screens allow searching, but due to the absence of a real API, filtering is manually handled on the retrieved data.

## Data Refresh
Both the "Product List" and "Bookmark Page" screens feature pull-to-refresh functionality, allowing you to manually refresh the data when needed.The "Bookmark Page" uses React Query and the setQuery  to update the cache when bookmarks are modified.

## Additional Information
The project is written in React Native and utilizes various libraries and components for navigation, state management, and UI design. The code is organized into separate modules and components for better maintainability.

Feel free to explore the code, test the app, and make any necessary improvements or customizations. If you have any questions or encounter issues, please don't hesitate to reach out for assistance.











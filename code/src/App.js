import React from 'react';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'

import { Welcome } from './components/Welcome'
import { Loader } from 'components/Loader'
import { ProductInfo } from './components/ProductInfo'
import { product } from 'reducers/product'
import { ui } from 'reducers/ui'


const reducer = combineReducers({
  ui: ui.reducer,
  product: product.reducer
});

export const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Welcome />
        <Loader />
        <ProductInfo />
      </Wrapper>
    </Provider>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
`
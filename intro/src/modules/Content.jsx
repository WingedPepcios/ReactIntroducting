import React, { useState, useEffect } from 'react';
import useCounter from './Counter';
import Button from '../atoms/Button';
import literals from '../data/literals';
import Settings from './Settings';

// HoC
const Content = () => (
  <div>
    <Settings />
  </div>
)

export default Content;

import { Heading, Sticky, Text } from '@primer/components';
import * as React from 'react';
import './Header.css';

const Header: React.SFC = (props: any) => {
  const a: number = 10;

  return (
    <Sticky><div className='Header'>
        <Heading fontSize={5} pt={3} pl={3} className='Header-h1'>
          Harry report
        </Heading>
      </div>
      <div className='Header-TestInfo'>
        <p className='Header-Detail'>
          <Text is='span' pl='3' fontWeight='bold' className='Header-TestName_color_black'>
            Total Tests:
          </Text>
          <Text is='span' pl='1' className='Header-TestValue_color_black'>
            8714
          </Text>
        </p>
        <p className='Header-Detail'>
          <Text is='span' color='green.6' pl='3' fontWeight='bold' className='Header-TestName_color_green'>
            Passed:
          </Text>
          <Text is='span' color='green.6' pl='1' className='Header-TestValue_color_green'>
            8714
          </Text>
        </p>
        <p className='Header-Detail'>
          <Text is='span' color='red.6' pl='3' fontWeight='bold' className='Header-TestName_color_red'>
            Failed:
          </Text>
          <Text is='span' color='red.6' pl='1' className='Header-TestValue_color_red'>
            15
          </Text>
        </p>
        <p className='Header-Detail'>
          <Text is='span' color='grey.6' pl='3' fontWeight='bold' className='Header-TestName_color_grey'>
            Skipped:
          </Text>
          <Text is='span' color='grey.6' pl='1' className='Header-TestValue_color_grey'>
            252
          </Text>
        </p>
        <p className='Header-Detail'>
          <Text is='span' color='yellow.6' pl='3' fontWeight='bold' className='Header-TestName_color_yellow'>
            Retries:
          </Text>
          <Text is='span' color='yellow.6' pl='1' className='Header-TestValue_color_yellow'>
            455
          </Text>
        </p>
      </div>
    </Sticky>
  );
};
export default Header;

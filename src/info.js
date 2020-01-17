import React from 'react';
import styled from 'styled-components';

import {Emoji} from './emoji';

const CenteredLi = styled.li`
  display: flex;
  align-items: center;
`;

export function Info() {
  return (
    <React.Fragment>
      <h2 style={{margin: 0}}>Stacey Sern</h2>
      <CenteredLi>
        <Emoji size="40px" marginRight="30px" name="twitter.svg" />
        @StaceySern
      </CenteredLi>
      <CenteredLi style={{marginTop: '150px'}}>http://bit.ly/376tOS0</CenteredLi>
    </React.Fragment>
  );
}

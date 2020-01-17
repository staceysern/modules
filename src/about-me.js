import React from 'react';
import styled from 'styled-components';

import {Emoji} from './emoji';
import {AppearList} from './appear-list';

const CenteredLi = styled.li`
  display: flex;
  align-items: center;
`;

export function AboutMe() {
  return (
    <React.Fragment>
      <h2 style={{margin: 0}}>Stacey Sern</h2>
      <CenteredLi>
        <Emoji size="40px" marginRight="30px" name="twitter.svg" />
        @StaceySern
      </CenteredLi>
      <AppearList style={{margin: 0}}>
        <CenteredLi>
          <Emoji size="40px" marginRight="30px" name="att.svg" />
          AT&T Bell Labs
        </CenteredLi>
        <CenteredLi>
          <Emoji size="40px" marginRight="30px" name="rc.png" />
          Recurse Center
        </CenteredLi>
        <CenteredLi>
          <Emoji size="40px" marginRight="30px" name="dropbox.svg" />
          Dropbox
        </CenteredLi>
      </AppearList>
    </React.Fragment>
  );
}

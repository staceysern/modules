import {Notes} from 'mdx-deck';
import React from 'react';

export function NotesList({children}) {
  return (
    <ul>
      <Notes><span style={{fontSize: '24px'}}>{children}</span></Notes>
    </ul>
  );
}



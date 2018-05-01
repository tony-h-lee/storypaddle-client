/**
*
* ScenePageWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';
import AsyncWrapper from 'components/AsyncWrapper';
import ErrorComponent from 'components/ErrorComponent';
import NarrationForm from 'components/ScenePageComponent/NarrationForm';
import DialogueForm from 'components/ScenePageComponent/DialogueForm';
import CommentsWrapper from 'components/ScenePageComponent/CommentsWrapper';
// import styled from 'styled-components';

const panes = [
  { menuItem: { key: 'narration', icon: 'align left', content: 'Narration' },
    render: () => (
      <Tab.Pane>
        <NarrationForm />
      </Tab.Pane>
    ) },
  { menuItem: { key: 'dialogue', icon: 'comments', content: 'Dialogue' },
    render: () => (
      <Tab.Pane>
        <DialogueForm />
      </Tab.Pane>
    ) },
];

function ScenePageWrapper(props) {
  // const scene = props.data.scene;
  const isAuthAndRole = props.moreProps.token;
  return (
    <div>
      <AsyncWrapper
        animate={false}
        spinner
        innerComponent={CommentsWrapper}
        errorComponent={
          <ErrorComponent
            header={'Sorry, an error occurred!'}
          />
        }
        payload={props.data.comments}
        error={props.moreProps.commentsError}
        loading={props.moreProps.commentsLoading}
        moreProps={props.moreProps}
      />
      {
        isAuthAndRole ?
          <Tab
            panes={panes}
          />
          :
          <div>
            Suggest roles if any
          </div>
      }

    </div>
  );
}

ScenePageWrapper.propTypes = {
  data: PropTypes.object,
  moreProps: PropTypes.object,
};

export default ScenePageWrapper;

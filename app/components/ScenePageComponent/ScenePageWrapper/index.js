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

function ScenePageWrapper(props) {
  const panes = [
    { menuItem: { key: 'narration', icon: 'align left', content: 'Narration' },
      render: () => (
        <Tab.Pane>
          <NarrationForm
            token={props.moreProps.token}
            sceneId={scene.get('id')}
            error={props.moreProps.commentsError}
          />
        </Tab.Pane>
      ) },
    { menuItem: { key: 'dialogue', icon: 'comments', content: 'Dialogue' },
      render: () => (
        <Tab.Pane>
          <DialogueForm
            token={props.moreProps.token}
            sceneId={scene.get('id')}
            error={props.moreProps.commentsError}
          />
        </Tab.Pane>
      ) },
  ];

  const scene = props.data.scene;
  const isAuthAndRole = props.moreProps.token && scene && scene.getIn(['narrative', 'roles'])
      .some((role) => role.get('user') === props.moreProps.user.get('id'));
  return (
    <div>
      <AsyncWrapper
        animate={false}
        spinner={false}
        innerComponent={CommentsWrapper}
        errorComponent={
          <ErrorComponent
            header={'Sorry, an error occurred!'}
          />
        }
        payload={props.data.comments}
        error={props.moreProps.sceneError}
        loading={props.moreProps.commentsLoading || props.moreProps.sceneLoading}
        moreProps={{ ...props.moreProps, sceneId: scene && scene.get('id') }}
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

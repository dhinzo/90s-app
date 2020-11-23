import React from 'react'
import { Grid, Rail, Button } from 'semantic-ui-react'
import AllPostsList from '../ShowAllPosts'

const RailExampleRail = (props) => (
  <Grid centered columns={3}>
    <Grid.Column>
      

        <Rail position='left'>
          <Button
            onClick={() => props.showAllPosts()}>All Posts</Button>
          <Button
            onClick={() => props.showUserPosts()}>My Posts</Button>
        </Rail>

      
    </Grid.Column>
  </Grid>
)

export default RailExampleRail
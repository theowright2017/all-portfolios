import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

import ProjectOne from './projects/projectOne';
import ProjectTwo from './projects/projectTwo';
import ProjectThree from './projects/projectThree';
import ProjectFour from './projects/projectFour';
import ProjectFive from './projects/projectFive';


class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 }
  }

toggleCategories() {

  let tab = this.state.activeTab;
  switch (tab){
    case 0:
      return (
        <div className="projects-grid">
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
        </div>
        )
        break;
    case 1:
      return (
        <ProjectTwo />
      )
        break;
    case 2:
      return (
        <ProjectThree />
      )
        break;
    case 3:
      return (
        <ProjectFour />
      )
        break;
    case 4:
      return (
        <ProjectFive />
      )
        break;

  }

//   if (this.state.activeTab === 0) {
//     {/* project 1 */}
//     return(
//       <ProjectOne />
//     )
//
//
//   } else if (this.state.activeTab === 1) {
//         {/* project 2 */}
//         return (
//           <ProjectTwo />
//     )
//
//
//   } else if (this.state.activeTab === 2) {
//         {/* project 3 */}
//         return (
//           <ProjectThree />
//     )
//
//
//   } else if (this.state.activeTab === 3) {
//         {/* project 4 */}
//         return (
//           <ProjectFour />
//     )
//
//
//   } else if (this.state.activeTab === 4) {
//         {/* project 5 */}
//         return (
//           <ProjectFive />
//     )
//   }
}


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab}
              onChange={(tabId) =>
                this.setState({activeTab: tabId})}
                ripple >

            <Tab>React</Tab>
            <Tab>Another</Tab>
            <Tab>project</Tab>
            <Tab>all</Tab>
            <Tab>well</Tab>

        </Tabs>


          <Grid>
            <Cell col={12}>
                <div className="content">
                    {this.toggleCategories()}
                </div>
            </Cell>
          </Grid>




      </div>
    )
  }
}

export default Projects;
